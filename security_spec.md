# Firestore Security Specification (Phase 0: Payload-First Security TDD)

## 1. Data Invariants

1. **Global Default Deny**: Any path not explicitly matched (`/users/{userId}`, `/projects/{projectId}`, `/templates/{templateId}`, `/dissections/{dissectionId}`) is strictly denied for all reads and writes.
2. **Verified Identity & Ownership**:
   - Every write operation requires `request.auth != null` and `request.auth.token.email_verified == true`.
   - For `/users/{userId}`, `userId` must match `request.auth.uid` and `incoming().uid == request.auth.uid`.
   - For `/projects/{projectId}`, `/templates/{templateId}`, and `/dissections/{dissectionId}`, `ownerId` must match `request.auth.uid` and the owner's `/users/$(request.auth.uid)` profile document must exist (`exists()`).
3. **Path Variable Hardening (ID Poisoning Guard)**:
   - All single-document operations (`get`, `create`, `update`, `delete`) validate document IDs using `isValidId(id)` (`id is string && id.size() >= 1 && id.size() <= 128 && id.matches('^[a-zA-Z0-9_\\-]+$')`).
4. **Strict Schema & Anti-Update-Gap**:
   - Every `create` and `update` invokes `isValid[Entity](incoming())` enforcing `hasAll` and `hasOnly` key allowlists, string `.size()` bounds, enum constraints, and bounded list checks (`size() >= 1 && size() <= 8` and element type checks).
5. **Temporal & Ownership Immutability**:
   - `createdAt == request.time` on `create`, and `incoming().createdAt == existing().createdAt` on `update`.
   - `updatedAt == request.time` on `create` and `update`.
   - `ownerId` and `uid` are strictly immutable on `update`.
6. **Secure List Queries (Query Enforcer)**:
   - `allow list` on `/projects`, `/templates`, and `/dissections` strictly enforces `resource.data.ownerId == request.auth.uid` without any `get()` or `exists()` calls inside `list`.

## 2. The "Dirty Dozen" Adversarial Payloads

1. **Payload 1 (Identity Spoofing on Create)**: Creating `/projects/proj_1` with `ownerId: "victim_uid"` while authenticated as `"attacker_uid"`. -> `PERMISSION_DENIED`
2. **Payload 2 (Unverified Email Write)**: Creating `/users/attacker_uid` when `request.auth.token.email_verified == false`. -> `PERMISSION_DENIED`
3. **Payload 3 (Shadow Field Injection on Create)**: Creating `/projects/proj_1` with an extra undocumented field `isAdmin: true`. -> `PERMISSION_DENIED`
4. **Payload 4 (Shadow Field Injection on Update)**: Updating `/projects/proj_1` with `affectedKeys` containing `isFeatured: true`. -> `PERMISSION_DENIED`
5. **Payload 5 (Owner Hijack on Update)**: Updating `/projects/proj_1` to change `ownerId` from `"user_1"` to `"user_2"`. -> `PERMISSION_DENIED`
6. **Payload 6 (Timestamp Forgery on Create)**: Creating `/projects/proj_1` with a past or future client-forged `createdAt` instead of `request.time`. -> `PERMISSION_DENIED`
7. **Payload 7 (Immortal Field Mutation on Update)**: Updating `/projects/proj_1` while mutating `createdAt`. -> `PERMISSION_DENIED`
8. **Payload 8 (Denial-of-Wallet Oversized String)**: Updating `/projects/proj_1` with a `sellingPoints` string of 5,000 characters (exceeding `<= 500`). -> `PERMISSION_DENIED`
9. **Payload 9 (Unbounded Array Injection)**: Creating `/projects/proj_1` with `sceneLines` containing 20 elements (exceeding `<= 8`) or non-string first element. -> `PERMISSION_DENIED`
10. **Payload 10 (Cross-Tenant Read / PII Leak)**: Authenticated user `"user_2"` attempting `get` on `/users/user_1` or `/projects/proj_owned_by_user_1`. -> `PERMISSION_DENIED`
11. **Payload 11 (Unfiltered List Scraping)**: Authenticated user `"user_2"` executing an unconstrained `list` query across `/projects` without `where('ownerId', '==', 'user_2')`. -> `PERMISSION_DENIED`
12. **Payload 12 (Orphaned Write Without Parent Profile)**: Authenticated user `"user_no_profile"` attempting to create `/projects/proj_1` before `/users/user_no_profile` exists. -> `PERMISSION_DENIED`
