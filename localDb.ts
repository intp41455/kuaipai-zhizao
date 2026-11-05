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
      id: 'store_jufu_dumpling',
      storeName: '聚福传统手工水饺馆（老社区店）',
      storeType: '抖音来客同城团购 + 老字号口碑店',
      industry: '餐饮美食',
      cityLocation: '西安·碑林区老街坊社区店（支持同城团购核销 & 到店免排队）',
      signatureProducts: '① 招牌黑猪肉莲菜水饺（￥22买1送1特惠）；② 正宗老陕手工油泼大块牛肉面（免费加面1两）',
      storePersona: '三十年老面点师傅，说话朴素真诚，老板不出镜，全靠老街坊口碑和扎实肉馅说话',
      targetAudience: '下班打工人、社区居民、看重实惠量大出餐快的食客',
      memoryAnchors: '核心记忆锚点：黑猪肉手工现包现煮、绝非冷冻预制、不够吃免费加面、左下角限时团购不用可退',
      redlines: { disallow_kitchen: false, owner_not_on_camera: true },
    },
    {
      id: 'store_bufei_bbq',
      storeName: '不肥酒肉馆（红旗铁路公园店）',
      storeType: '同城特色烤肉小酒馆 + 音乐驻唱店',
      industry: '餐饮美食',
      cityLocation: '西安·红旗铁路公园文化街区（夜间客流高潮 & 驻唱点歌）',
      signatureProducts: '① 招牌整根大油边烤肉；② 盘龙五花肉；③ 正宗重庆风味碗杂面',
      storePersona: '天水豪爽老板与四川老板娘，性格真诚接地气，坚持免后厨拍摄，端上来的全是烤好的硬菜',
      targetAudience: '下班聚餐、年轻白领、夜市宵夜、喜欢音乐互动氛围的社交人群',
      memoryAnchors: '核心记忆锚点：成品烤肉无烟上桌免动手、整根大油边外焦里嫩爆肉汁、两杯精酿加肉券随时可退',
      redlines: { disallow_kitchen: true, owner_not_on_camera: false },
    },
  ],
  projects: [],
  templates: [],
  staff: [
    {
      id: 'staff_1',
      name: '李店长',
      phone: '13800138001',
      role: '店长/主播',
      status: 'active',
      store_id: 'store_bufei_bbq',
    },
  ],
  assets: [],
  liveCodes: [
    {
      id: 'lc_1',
      name: '同城霸王餐引流码',
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
      account_name: '不肥又见面·官方号',
      follower_count: 15600,
      status: 'normal',
    },
    {
      id: 'acc_2',
      platform: 'douyin',
      account_name: '不肥酒肉馆·矩阵店长号',
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
