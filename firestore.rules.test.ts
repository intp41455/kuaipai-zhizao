/**
 * Firestore Security Rules Test Suite (Dirty Dozen Verification)
 * Verifies all 12 adversarial payloads defined in security_spec.md return PERMISSION_DENIED.
 */

export interface DirtyDozenTestCase {
  id: number;
  name: string;
  operation: 'get' | 'list' | 'create' | 'update' | 'delete';
  path: string;
  auth: { uid: string; email_verified: boolean } | null;
  payload?: Record<string, unknown>;
  expectedResult: 'PERMISSION_DENIED';
}

export const DIRTY_DOZEN_TESTS: DirtyDozenTestCase[] = [
  {
    id: 1,
    name: 'Identity Spoofing on Create',
    operation: 'create',
    path: '/projects/proj_1',
    auth: { uid: 'attacker_uid', email_verified: true },
    payload: { ownerId: 'victim_uid', title: 'Spoofed Project' },
    expectedResult: 'PERMISSION_DENIED',
  },
  {
    id: 2,
    name: 'Unverified Email Write',
    operation: 'create',
    path: '/users/attacker_uid',
    auth: { uid: 'attacker_uid', email_verified: false },
    payload: { uid: 'attacker_uid', displayName: 'Attacker', brandName: 'Brand', industry: 'Tech' },
    expectedResult: 'PERMISSION_DENIED',
  },
  {
    id: 3,
    name: 'Shadow Field Injection on Create',
    operation: 'create',
    path: '/users/user_1',
    auth: { uid: 'user_1', email_verified: true },
    payload: { uid: 'user_1', displayName: 'User', brandName: 'Brand', industry: 'Tech', isAdmin: true },
    expectedResult: 'PERMISSION_DENIED',
  },
  {
    id: 4,
    name: 'Shadow Field Injection on Update',
    operation: 'update',
    path: '/projects/proj_1',
    auth: { uid: 'user_1', email_verified: true },
    payload: { isFeatured: true },
    expectedResult: 'PERMISSION_DENIED',
  },
  {
    id: 5,
    name: 'Owner Hijack on Update',
    operation: 'update',
    path: '/projects/proj_1',
    auth: { uid: 'user_1', email_verified: true },
    payload: { ownerId: 'user_2' },
    expectedResult: 'PERMISSION_DENIED',
  },
  {
    id: 6,
    name: 'Timestamp Forgery on Create',
    operation: 'create',
    path: '/projects/proj_1',
    auth: { uid: 'user_1', email_verified: true },
    payload: { createdAt: '2020-01-01T00:00:00Z' },
    expectedResult: 'PERMISSION_DENIED',
  },
  {
    id: 7,
    name: 'Immortal Field Mutation on Update',
    operation: 'update',
    path: '/projects/proj_1',
    auth: { uid: 'user_1', email_verified: true },
    payload: { createdAt: '2099-01-01T00:00:00Z' },
    expectedResult: 'PERMISSION_DENIED',
  },
  {
    id: 8,
    name: 'Denial-of-Wallet Oversized String',
    operation: 'update',
    path: '/projects/proj_1',
    auth: { uid: 'user_1', email_verified: true },
    payload: { sellingPoints: 'x'.repeat(5000) },
    expectedResult: 'PERMISSION_DENIED',
  },
  {
    id: 9,
    name: 'Unbounded Array Injection',
    operation: 'create',
    path: '/projects/proj_1',
    auth: { uid: 'user_1', email_verified: true },
    payload: { sceneLines: new Array(20).fill('line') },
    expectedResult: 'PERMISSION_DENIED',
  },
  {
    id: 10,
    name: 'Cross-Tenant Read / PII Isolation Check',
    operation: 'get',
    path: '/users/user_1',
    auth: { uid: 'user_2', email_verified: true },
    expectedResult: 'PERMISSION_DENIED',
  },
  {
    id: 11,
    name: 'Unfiltered List Scraping',
    operation: 'list',
    path: '/projects',
    auth: { uid: 'user_2', email_verified: true },
    expectedResult: 'PERMISSION_DENIED',
  },
  {
    id: 12,
    name: 'Orphaned Write Without Parent Profile',
    operation: 'create',
    path: '/projects/proj_1',
    auth: { uid: 'user_no_profile', email_verified: true },
    payload: { ownerId: 'user_no_profile' },
    expectedResult: 'PERMISSION_DENIED',
  },
];
