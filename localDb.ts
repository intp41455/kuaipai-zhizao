import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const DB_PATH = path.join(__dirname, '.local_db.json');

export interface LocalDbState {
  stores: any[];
  projects: any[];
  templates: any[];
  staff: any[];
  assets: any[];
  liveCodes: any[];
  matrixAccounts: any[];
  matrixSchedules: any[];
  sopTasks: any[];
  leads: any[];
}

const DEFAULT_STATE: LocalDbState = {
  stores: [
    {
      id: 'store_catering_prototype',
      storeName: '同城特色餐饮口碑名店（示范样本）',
      storeType: '同城团购 + 口碑老字号',
      industry: '餐饮美食',
      cityLocation: '同城核心商圈示范店（支持到店核销 & 免排队）',
      signatureProducts: '① 招牌爆款特惠尝鲜单人餐；② 招牌双人硬核经典套餐',
      storePersona: '行业多年老手艺人，朴素真诚，全靠老街坊口碑和扎实分量说话',
      targetAudience: '同城美食爱好者、上班族、注重真材实料与性价比的消费者',
      memoryAnchors: '核心记忆锚点：纯手工现点现做、绝非预制冷冻、分量管饱、左下角团购不用随时退',
      redlines: { disallow_kitchen: false, owner_not_on_camera: true },
    },
    {
      id: 'store_bistro_prototype',
      storeName: '城市风味特色小酒馆（示范样本）',
      storeType: '特色夜市小酒馆 + 音乐聚会店',
      industry: '餐饮美食',
      cityLocation: '同城夜间经济特色街区（聚会小酌 & 氛围打卡）',
      signatureProducts: '① 招牌硬核烤物组合；② 冰镇精酿鲜饮专属特惠券',
      storePersona: '豪爽真诚的主理人，坚持免后厨拍摄，端上来的全是烤好的招牌硬菜',
      targetAudience: '下班聚餐、年轻白领、夜市宵夜、注重轻松社交氛围的客群',
      memoryAnchors: '核心记忆锚点：成品硬菜无烟上桌免动手、环境舒适烟火气拉满、专属引流特权随时退',
      redlines: { disallow_kitchen: true, owner_not_on_camera: false },
    },
  ],
  projects: [],
  templates: [],
  staff: [
    {
      id: 'staff_1',
      name: '王店长',
      phone: '13800138001',
      role: '店长/运营主管',
      status: 'active',
      store_id: 'store_catering_prototype',
    },
  ],
  assets: [],
  liveCodes: [
    {
      id: 'lc_1',
      name: '同城到店体验引流码',
      short_key: 'vip666',
      target_url: 'https://v.douyin.com/',
      scan_count: 128,
      status: 'active',
    },
  ],
  matrixAccounts: [
    {
      id: 'acc_1',
      platform: 'douyin',
      account_name: '品牌官方旗舰号',
      follower_count: 15600,
      status: 'normal',
    },
    {
      id: 'acc_2',
      platform: 'douyin',
      account_name: '同城门店矩阵号·01',
      follower_count: 8200,
      status: 'normal',
    },
  ],
  matrixSchedules: [],
  sopTasks: [],
  leads: [
    {
      id: 'lead_1',
      customer_name: '张先生',
      customer_phone: '139****5678',
      package_title: '【引流尝鲜】9.9元单人爆汁大肉试吃套',
      status: 'verified',
      created_at: '2026-11-05 12:30',
    },
    {
      id: 'lead_2',
      customer_name: '王女士',
      customer_phone: '186****1234',
      package_title: '【聚会爆品】68元双人精酿大肉欢聚套',
      status: 'pending',
      created_at: '2026-11-05 14:15',
    },
  ],
};

function readDb(): LocalDbState {
  try {
    if (fs.existsSync(DB_PATH)) {
      const data = JSON.parse(fs.readFileSync(DB_PATH, 'utf-8'));
      return { ...DEFAULT_STATE, ...data };
    }
  } catch (err) {
    console.error('Failed to read local DB, using defaults', err);
  }
  return { ...DEFAULT_STATE };
}

function writeDb(state: LocalDbState): void {
  try {
    fs.writeFileSync(DB_PATH, JSON.stringify(state, null, 2), 'utf-8');
  } catch (err) {
    console.error('Failed to write local DB', err);
  }
}

export const localDb = {
  get<K extends keyof LocalDbState>(key: K): LocalDbState[K] {
    const db = readDb();
    return db[key];
  },
  set<K extends keyof LocalDbState>(key: K, value: LocalDbState[K]): void {
    const db = readDb();
    db[key] = value;
    writeDb(db);
  },
  insert<K extends keyof LocalDbState>(key: K, item: any): any {
    const db = readDb();
    const arr = (db[key] as any[]) || [];
    if (!item.id) {
      item.id = `${key}_${Date.now()}_${Math.random().toString(36).slice(2, 6)}`;
    }
    arr.unshift(item);
    db[key] = arr as any;
    writeDb(db);
    return item;
  },
  update<K extends keyof LocalDbState>(key: K, id: string, patch: any): any {
    const db = readDb();
    const arr = (db[key] as any[]) || [];
    const idx = arr.findIndex((x) => x.id === id);
    if (idx !== -1) {
      arr[idx] = { ...arr[idx], ...patch };
      db[key] = arr as any;
      writeDb(db);
      return arr[idx];
    }
    return null;
  },
  delete<K extends keyof LocalDbState>(key: K, id: string): boolean {
    const db = readDb();
    const arr = (db[key] as any[]) || [];
    const filtered = arr.filter((x) => x.id !== id);
    if (filtered.length !== arr.length) {
      db[key] = filtered as any;
      writeDb(db);
      return true;
    }
    return false;
  },
};
