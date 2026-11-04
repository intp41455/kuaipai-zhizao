import { initializeApp } from 'firebase/app';
import { getAuth, GoogleAuthProvider } from 'firebase/auth';
import {
  getFirestore,
  doc,
  getDocFromServer,
  serverTimestamp,
} from 'firebase/firestore';
import firebaseConfig from '../firebase-applet-config.json';

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app, firebaseConfig.firestoreDatabaseId);
export const auth = getAuth(app);
export const googleProvider = new GoogleAuthProvider();

// Mandatory connection validation on boot per firebase-integration-rpc skill
async function testConnection() {
  try {
    await getDocFromServer(doc(db, 'test', 'connection'));
  } catch (error) {
    if (error instanceof Error && error.message.includes('the client is offline')) {
      console.error('Please check your Firebase configuration.');
    }
  }
}
testConnection();

export enum OperationType {
  CREATE = 'create',
  UPDATE = 'update',
  DELETE = 'delete',
  LIST = 'list',
  GET = 'get',
  WRITE = 'write',
}

export interface FirestoreErrorInfo {
  error: string;
  operationType: OperationType;
  path: string | null;
  authInfo: {
    userId?: string | null;
    email?: string | null;
    emailVerified?: boolean | null;
    isAnonymous?: boolean | null;
    tenantId?: string | null;
    providerInfo?: {
      providerId?: string | null;
      email?: string | null;
    }[];
  };
}

export function handleFirestoreError(
  error: unknown,
  operationType: OperationType,
  path: string | null
): never {
  const errInfo: FirestoreErrorInfo = {
    error: error instanceof Error ? error.message : String(error),
    authInfo: {
      userId: auth.currentUser?.uid,
      email: auth.currentUser?.email,
      emailVerified: auth.currentUser?.emailVerified,
      isAnonymous: auth.currentUser?.isAnonymous,
      tenantId: auth.currentUser?.tenantId,
      providerInfo:
        auth.currentUser?.providerData?.map((provider) => ({
          providerId: provider.providerId,
          email: provider.email,
        })) || [],
    },
    operationType,
    path,
  };
  console.error('Firestore Error: ', JSON.stringify(errInfo));
  throw new Error(JSON.stringify(errInfo));
}

// Defensive Payload Constraints synchronized with firebase-blueprint.json & firestore.rules
function sanitizeBoundedStringArray(arr: string[], maxItems = 8, maxItemLen = 500): string[] {
  const cleaned = (Array.isArray(arr) ? arr : [])
    .map((item) => String(item || '').trim().slice(0, maxItemLen))
    .filter((item) => item.length >= 1)
    .slice(0, maxItems);
  return cleaned.length > 0 ? cleaned : ['默认分镜内容'];
}

export function buildUserProfileCreatePayload(params: {
  uid: string;
  displayName: string;
  brandName?: string;
  industry?: string;
}) {
  return {
    uid: params.uid.slice(0, 128),
    displayName: (params.displayName || '创作者').trim().slice(0, 80) || '创作者',
    brandName: (params.brandName || '我的品牌工坊').trim().slice(0, 80),
    industry: (params.industry || '美妆个护').trim().slice(0, 60) || '美妆个护',
    planTier: 'free' as const,
    credits: 100,
    createdAt: serverTimestamp(),
    updatedAt: serverTimestamp(),
  };
}

export function buildUserProfileBillingUpdatePayload(params: {
  planTier: 'free' | 'pro' | 'enterprise';
  credits: number;
}) {
  const validTier = ['free', 'pro', 'enterprise'].includes(params.planTier)
    ? params.planTier
    : 'free';
  const safeCredits = Math.min(1000000, Math.max(0, Math.floor(params.credits)));
  return {
    planTier: validTier,
    credits: safeCredits,
    updatedAt: serverTimestamp(),
  };
}

export function buildVideoProjectCreatePayload(params: {
  ownerId: string;
  title: string;
  productName: string;
  sellingPoints: string;
  targetAudience: string;
  category: string;
  aspectRatio: '9:16' | '16:9' | '4:3';
  bgmStyle: string;
  voiceTone: string;
  pacingTip: string;
  sceneLines: string[];
  visualCues: string[];
  cameraAngles: string[];
}) {
  const validAspect = ['9:16', '16:9', '4:3'].includes(params.aspectRatio)
    ? params.aspectRatio
    : '9:16';
  return {
    ownerId: params.ownerId.slice(0, 128),
    title: (params.title || '未命名爆款视频').trim().slice(0, 120) || '未命名爆款视频',
    productName: (params.productName || '主打商品').trim().slice(0, 100) || '主打商品',
    sellingPoints: (params.sellingPoints || '高转化核心卖点').trim().slice(0, 500) || '高转化核心卖点',
    targetAudience: (params.targetAudience || '核心受众').trim().slice(0, 100) || '核心受众',
    category: (params.category || '美妆个护').trim().slice(0, 40) || '美妆个护',
    aspectRatio: validAspect,
    bgmStyle: (params.bgmStyle || '轻快种草卡点律动').trim().slice(0, 60) || '轻快种草卡点律动',
    voiceTone: (params.voiceTone || '活力种草女声').trim().slice(0, 60) || '活力种草女声',
    pacingTip: (params.pacingTip || '前3秒特写切入，字幕卡点输出').trim().slice(0, 400),
    sceneLines: sanitizeBoundedStringArray(params.sceneLines, 8, 500),
    visualCues: sanitizeBoundedStringArray(params.visualCues, 8, 500),
    cameraAngles: sanitizeBoundedStringArray(params.cameraAngles, 8, 120),
    createdAt: serverTimestamp(),
    updatedAt: serverTimestamp(),
  };
}

export function buildVideoProjectUpdatePayload(params: {
  title: string;
  productName: string;
  sellingPoints: string;
  targetAudience: string;
  category: string;
  aspectRatio: '9:16' | '16:9' | '4:3';
  bgmStyle: string;
  voiceTone: string;
  pacingTip: string;
  sceneLines: string[];
  visualCues: string[];
  cameraAngles: string[];
}) {
  const validAspect = ['9:16', '16:9', '4:3'].includes(params.aspectRatio)
    ? params.aspectRatio
    : '9:16';
  return {
    title: (params.title || '未命名爆款视频').trim().slice(0, 120) || '未命名爆款视频',
    productName: (params.productName || '主打商品').trim().slice(0, 100) || '主打商品',
    sellingPoints: (params.sellingPoints || '高转化核心卖点').trim().slice(0, 500) || '高转化核心卖点',
    targetAudience: (params.targetAudience || '核心受众').trim().slice(0, 100) || '核心受众',
    category: (params.category || '美妆个护').trim().slice(0, 40) || '美妆个护',
    aspectRatio: validAspect,
    bgmStyle: (params.bgmStyle || '轻快种草卡点律动').trim().slice(0, 60) || '轻快种草卡点律动',
    voiceTone: (params.voiceTone || '活力种草女声').trim().slice(0, 60) || '活力种草女声',
    pacingTip: (params.pacingTip || '前3秒特写切入，字幕卡点输出').trim().slice(0, 400),
    sceneLines: sanitizeBoundedStringArray(params.sceneLines, 8, 500),
    visualCues: sanitizeBoundedStringArray(params.visualCues, 8, 500),
    cameraAngles: sanitizeBoundedStringArray(params.cameraAngles, 8, 120),
    updatedAt: serverTimestamp(),
  };
}

export function buildViralTemplateCreatePayload(params: {
  ownerId: string;
  title: string;
  category: string;
  hookFormula: string;
  structureSummary: string;
  pacingStyle: string;
  bgmStyle: string;
  sceneLines: string[];
  visualCues: string[];
  cameraAngles: string[];
}) {
  return {
    ownerId: params.ownerId.slice(0, 128),
    title: (params.title || '自定义爆款模板').trim().slice(0, 120) || '自定义爆款模板',
    category: (params.category || '通用').trim().slice(0, 40) || '通用',
    hookFormula: (params.hookFormula || '黄金前3秒痛点提问').trim().slice(0, 300) || '黄金前3秒痛点提问',
    structureSummary: (params.structureSummary || '痛点引入+产品亮相+实测对比+福利号召').trim().slice(0, 600),
    pacingStyle: (params.pacingStyle || '快节奏卡点').trim().slice(0, 60) || '快节奏卡点',
    bgmStyle: (params.bgmStyle || '动感卡点律动').trim().slice(0, 60) || '动感卡点律动',
    sceneLines: sanitizeBoundedStringArray(params.sceneLines, 8, 500),
    visualCues: sanitizeBoundedStringArray(params.visualCues, 8, 500),
    cameraAngles: sanitizeBoundedStringArray(params.cameraAngles, 8, 120),
    createdAt: serverTimestamp(),
  };
}

export function buildVideoDissectionCreatePayload(params: {
  ownerId: string;
  sourceTitle: string;
  sourceContent: string;
  hookAnalysis: string;
  retentionSecret: string;
  conversionTrigger: string;
  extractedFormula: string;
  sceneBreakdown: string[];
}) {
  return {
    ownerId: params.ownerId.slice(0, 128),
    sourceTitle: (params.sourceTitle || '爆款视频拆解').trim().slice(0, 120) || '爆款视频拆解',
    sourceContent: (params.sourceContent || '视频原始脚本内容').trim().slice(0, 2000) || '视频原始脚本内容',
    hookAnalysis: (params.hookAnalysis || '前3秒直击受众痛点').trim().slice(0, 500) || '前3秒直击受众痛点',
    retentionSecret: (params.retentionSecret || '高密度信息点与视觉反差').trim().slice(0, 500) || '高密度信息点与视觉反差',
    conversionTrigger: (params.conversionTrigger || '真实效果对比激发购买欲').trim().slice(0, 500) || '真实效果对比激发购买欲',
    extractedFormula: (params.extractedFormula || '痛点引入+产品近景+卖点实测+号召行动').trim().slice(0, 500),
    sceneBreakdown: sanitizeBoundedStringArray(params.sceneBreakdown, 8, 550),
    createdAt: serverTimestamp(),
  };
}

export function buildSharedProjectLinkCreatePayload(params: {
  ownerId: string;
  title: string;
  productName: string;
  category: string;
  aspectRatio: '9:16' | '16:9' | '4:3';
  pacingTip: string;
  sceneLines: string[];
  visualCues: string[];
  cameraAngles: string[];
  expiresAtMs: number;
}) {
  const validAspect = ['9:16', '16:9', '4:3'].includes(params.aspectRatio)
    ? params.aspectRatio
    : '9:16';
  return {
    ownerId: params.ownerId.slice(0, 128),
    title: (params.title || '未命名爆款视频').trim().slice(0, 120) || '未命名爆款视频',
    productName: (params.productName || '主打商品').trim().slice(0, 100) || '主打商品',
    category: (params.category || '美妆个护').trim().slice(0, 40) || '美妆个护',
    aspectRatio: validAspect,
    pacingTip: (params.pacingTip || '前3秒特写切入，字幕卡点输出').trim().slice(0, 400),
    sceneLines: sanitizeBoundedStringArray(params.sceneLines, 8, 500),
    visualCues: sanitizeBoundedStringArray(params.visualCues, 8, 500),
    cameraAngles: sanitizeBoundedStringArray(params.cameraAngles, 8, 120),
    expiresAtMs: Math.max(Date.now() + 60000, Math.floor(params.expiresAtMs)),
    createdAt: serverTimestamp(),
  };
}

export function buildStoreProfileCreatePayload(params: {
  ownerId: string;
  storeName: string;
  storeType: string;
  industry: string;
  cityLocation: string;
  signatureProducts: string;
  storePersona: string;
  targetAudience: string;
  memoryAnchors: string;
}) {
  return {
    ownerId: params.ownerId.slice(0, 128),
    storeName: (params.storeName || '我的门店品牌').trim().slice(0, 100) || '我的门店品牌',
    storeType: (params.storeType || '抖音来客同城团购店').trim().slice(0, 60) || '抖音来客同城团购店',
    industry: (params.industry || '个护').trim().slice(0, 40) || '个护',
    cityLocation: (params.cityLocation || '核心商圈门店 / 全国发货').trim().slice(0, 80) || '核心商圈门店 / 全国发货',
    signatureProducts: (params.signatureProducts || '镇店爆款套餐').trim().slice(0, 400) || '镇店爆款套餐',
    storePersona: (params.storePersona || '实在接地气的十年老店长，只讲真话不玩套路').trim().slice(0, 200) || '实在老店长',
    targetAudience: (params.targetAudience || '周边3公里同城精准顾客与线上粉丝').trim().slice(0, 200) || '精准消费客群',
    memoryAnchors: (params.memoryAnchors || '左下角团购券核销立省、假一赔十、不满意随时退').trim().slice(0, 500) || '左下角团购转化',
    createdAt: serverTimestamp(),
    updatedAt: serverTimestamp(),
  };
}

export function buildStoreProfileUpdatePayload(params: {
  storeName: string;
  storeType: string;
  industry: string;
  cityLocation: string;
  signatureProducts: string;
  storePersona: string;
  targetAudience: string;
  memoryAnchors: string;
}) {
  return {
    storeName: (params.storeName || '我的门店品牌').trim().slice(0, 100) || '我的门店品牌',
    storeType: (params.storeType || '抖音来客同城团购店').trim().slice(0, 60) || '抖音来客同城团购店',
    industry: (params.industry || '个护').trim().slice(0, 40) || '个护',
    cityLocation: (params.cityLocation || '核心商圈门店 / 全国发货').trim().slice(0, 80) || '核心商圈门店 / 全国发货',
    signatureProducts: (params.signatureProducts || '镇店爆款套餐').trim().slice(0, 400) || '镇店爆款套餐',
    storePersona: (params.storePersona || '实在接地气的十年老店长，只讲真话不玩套路').trim().slice(0, 200) || '实在老店长',
    targetAudience: (params.targetAudience || '周边3公里同城精准顾客与线上粉丝').trim().slice(0, 200) || '精准消费客群',
    memoryAnchors: (params.memoryAnchors || '左下角团购券核销立省、假一赔十、不满意随时退').trim().slice(0, 500) || '左下角团购转化',
    updatedAt: serverTimestamp(),
  };
}

export type AppRbacRole =
  | 'super_admin'
  | 'store_manager'
  | 'operator'
  | 'finance'
  | 'support'
  | 'creator';

export const RBAC_ROLE_LABELS: Record<AppRbacRole, string> = {
  super_admin: '超级管理员 (全权限)',
  store_manager: '店长 (门店/员工/成片)',
  operator: '短视频运营 (编导/混剪/套图)',
  finance: '财务核销 (算力/订阅/账单)',
  support: '客服专员 (查看/协同)',
  creator: '内容创作者 (脚本/成片)',
};

export function getCurrentRbacHeaders(role: AppRbacRole = 'super_admin'): Record<string, string> {
  return {
    'Content-Type': 'application/json',
    'X-User-Uid': auth.currentUser?.uid || 'cn_default_creator',
    'X-User-Role': role,
  };
}

export async function callBackendApi<T>(
  endpoint: string,
  payload?: Record<string, unknown>,
  method: 'GET' | 'POST' = 'POST',
  role: AppRbacRole = 'super_admin'
): Promise<T | null> {
  try {
    const res = await fetch(endpoint, {
      method,
      headers: getCurrentRbacHeaders(role),
      body: method === 'POST' && payload ? JSON.stringify(payload) : undefined,
    });
    if (!res.ok) return null;
    return (await res.json()) as T;
  } catch {
    return null;
  }
}


