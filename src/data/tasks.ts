export interface Task {
  id: number
  text: string
  category: string
  completed: boolean
}

export interface Category {
  id: string
  name: string
  icon: string
  color: string
}

export const categories: Category[] = [
  { id: 'all', name: '全部', icon: 'i-ph-sparkle-fill', color: '#8B5CF6' },
  { id: 'travel', name: '旅行', icon: 'i-ph-airplane-fill', color: '#06B6D4' },
  { id: 'food', name: '美食', icon: 'i-ph-bowl-food-fill', color: '#F59E0B' },
  { id: 'romance', name: '浪漫', icon: 'i-ph-heart-fill', color: '#EC4899' },
  { id: 'home', name: '居家', icon: 'i-ph-house-fill', color: '#10B981' },
  { id: 'challenge', name: '挑战', icon: 'i-ph-target-fill', color: '#8B5CF6' },
  { id: 'growth', name: '成长', icon: 'i-ph-book-open-fill', color: '#22D3EE' },
  { id: 'other', name: '其他', icon: 'i-ph-star-fill', color: '#F472B6' },
]

export function getCategoryColor(categoryId: string): string {
  const cat = categories.find(c => c.id === categoryId)
  return cat?.color || '#C8FF2E'
}

export function hexToRgba(hex: string, alpha: number): string {
  const r = parseInt(hex.slice(1, 3), 16)
  const g = parseInt(hex.slice(3, 5), 16)
  const b = parseInt(hex.slice(5, 7), 16)
  return `rgba(${r}, ${g}, ${b}, ${alpha})`
}

export const coupleTasks: Task[] = [
  // 旅行 (1-25)
  { id: 1, text: '一起看日出', category: 'travel', completed: false },
  { id: 2, text: '一起看日落', category: 'travel', completed: false },
  { id: 3, text: '一起去看海', category: 'travel', completed: false },
  { id: 4, text: '一起去爬山', category: 'travel', completed: false },
  { id: 5, text: '一起去露营', category: 'travel', completed: false },
  { id: 6, text: '一起去滑雪', category: 'travel', completed: false },
  { id: 7, text: '一起去温泉', category: 'travel', completed: true },
  { id: 8, text: '一起去游乐园', category: 'travel', completed: true },
  { id: 9, text: '一起去动物园', category: 'travel', completed: false },
  { id: 10, text: '一起去水族馆', category: 'travel', completed: false },
  { id: 11, text: '一起去博物馆', category: 'travel', completed: false },
  { id: 12, text: '一起去美术馆', category: 'travel', completed: false },
  { id: 13, text: '一起去图书馆', category: 'travel', completed: false },
  { id: 14, text: '一起去电影院', category: 'travel', completed: true },
  { id: 15, text: '一起去KTV', category: 'travel', completed: true },
  { id: 16, text: '一起去演唱会', category: 'travel', completed: true },
  { id: 17, text: '一起去音乐节', category: 'travel', completed: true },
  { id: 18, text: '一起去逛街', category: 'travel', completed: true },
  { id: 19, text: '一起去超市', category: 'travel', completed: true },
  { id: 20, text: '一起去菜市场', category: 'travel', completed: true },
  { id: 21, text: '一起去海边捡贝壳', category: 'travel', completed: false },
  { id: 22, text: '一起去古镇漫步', category: 'travel', completed: false },
  { id: 23, text: '一起去赏樱花', category: 'travel', completed: true },
  { id: 24, text: '一起去看红叶', category: 'travel', completed: false },
  { id: 25, text: '一起去冰岛看极光', category: 'travel', completed: false },
  
  // 美食 (26-50)
  { id: 26, text: '一起吃火锅', category: 'food', completed: true },
  { id: 27, text: '一起吃烧烤', category: 'food', completed: true },
  { id: 28, text: '一起吃日料', category: 'food', completed: true },
  { id: 29, text: '一起吃韩料', category: 'food', completed: true },
  { id: 30, text: '一起吃意大利菜', category: 'food', completed: false },
  { id: 31, text: '一起吃法餐', category: 'food', completed: false },
  { id: 32, text: '一起吃米其林', category: 'food', completed: false },
  { id: 33, text: '一起吃路边摊', category: 'food', completed: true },
  { id: 34, text: '一起做蛋糕', category: 'food', completed: false },
  { id: 35, text: '一起做饼干', category: 'food', completed: false },
  { id: 36, text: '一起包饺子', category: 'food', completed: true },
  { id: 37, text: '一起煮泡面', category: 'food', completed: true },
  { id: 38, text: '一起吃早餐', category: 'food', completed: true },
  { id: 39, text: '一起吃Brunch', category: 'food', completed: false },
  { id: 40, text: '一起吃宵夜', category: 'food', completed: true },
  { id: 41, text: '一起吃甜品', category: 'food', completed: true },
  { id: 42, text: '一起吃冰淇淋', category: 'food', completed: true },
  { id: 43, text: '一起喝咖啡', category: 'food', completed: true },
  { id: 44, text: '一起喝奶茶', category: 'food', completed: true },
  { id: 45, text: '一起吃自助餐', category: 'food', completed: true },
  { id: 46, text: '一起吃海鲜大餐', category: 'food', completed: false },
  { id: 47, text: '一起吃素食', category: 'food', completed: false },
  { id: 48, text: '一起吃私房菜', category: 'food', completed: false },
  { id: 49, text: '一起探店', category: 'food', completed: true },
  { id: 50, text: '一起打卡网红店', category: 'food', completed: true },
  
  // 浪漫 (51-75)
  { id: 51, text: '一起过情人节', category: 'romance', completed: true },
  { id: 52, text: '一起过七夕', category: 'romance', completed: false },
  { id: 53, text: '一起过生日', category: 'romance', completed: true },
  { id: 54, text: '一起过纪念日', category: 'romance', completed: true },
  { id: 55, text: '一起跨年', category: 'romance', completed: false },
  { id: 56, text: '一起放烟花', category: 'romance', completed: false },
  { id: 57, text: '一起放孔明灯', category: 'romance', completed: false },
  { id: 58, text: '一起数星星', category: 'romance', completed: false },
  { id: 59, text: '一起看月亮', category: 'romance', completed: true },
  { id: 60, text: '一起听雨', category: 'romance', completed: false },
  { id: 61, text: '一起堆雪人', category: 'romance', completed: false },
  { id: 62, text: '一起赏荷花', category: 'romance', completed: false },
  { id: 63, text: '一起摘草莓', category: 'romance', completed: false },
  { id: 64, text: '一起摘樱桃', category: 'romance', completed: false },
  { id: 65, text: '一起放风筝', category: 'romance', completed: false },
  { id: 66, text: '一起荡秋千', category: 'romance', completed: false },
  { id: 67, text: '一起坐摩天轮', category: 'romance', completed: true },
  { id: 68, text: '一起坐旋转木马', category: 'romance', completed: false },
  { id: 69, text: '一起坐缆车', category: 'romance', completed: true },
  { id: 70, text: '一起坐热气球', category: 'romance', completed: false },
  { id: 71, text: '一起写情书', category: 'romance', completed: false },
  { id: 72, text: '一起交换礼物', category: 'romance', completed: true },
  { id: 73, text: '一起拍写真', category: 'romance', completed: false },
  { id: 74, text: '一起拍Vlog', category: 'romance', completed: true },
  { id: 75, text: '一起录一首歌', category: 'romance', completed: false },
  
  // 居家 (76-100)
  { id: 76, text: '一起逛宜家', category: 'home', completed: true },
  { id: 77, text: '一起买家具', category: 'home', completed: false },
  { id: 78, text: '一起布置房间', category: 'home', completed: false },
  { id: 79, text: '一起打扫卫生', category: 'home', completed: true },
  { id: 80, text: '一起洗衣服', category: 'home', completed: true },
  { id: 81, text: '一起做饭', category: 'home', completed: true },
  { id: 82, text: '一起洗碗', category: 'home', completed: true },
  { id: 83, text: '一起整理衣柜', category: 'home', completed: false },
  { id: 84, text: '一起换床单', category: 'home', completed: false },
  { id: 85, text: '一起买日用品', category: 'home', completed: true },
  { id: 86, text: '一起种花', category: 'home', completed: false },
  { id: 87, text: '一起养宠物', category: 'home', completed: false },
  { id: 88, text: '一起给宠物洗澡', category: 'home', completed: false },
  { id: 89, text: '一起窝在沙发', category: 'home', completed: true },
  { id: 90, text: '一起 binge-watch', category: 'home', completed: true },
  { id: 91, text: '一起打游戏', category: 'home', completed: true },
  { id: 92, text: '一起拼乐高', category: 'home', completed: true },
  { id: 93, text: '一起拼图', category: 'home', completed: false },
  { id: 94, text: '一起画画', category: 'home', completed: false },
  { id: 95, text: '一起写手账', category: 'home', completed: false },
  { id: 96, text: '一起写日记', category: 'home', completed: false },
  { id: 97, text: '一起记账', category: 'home', completed: false },
  { id: 98, text: '一起规划未来', category: 'home', completed: true },
  { id: 99, text: '一起存旅行基金', category: 'home', completed: false },
  { id: 100, text: '一起还房贷', category: 'home', completed: false },
  
  // 挑战 (101-125)
  { id: 101, text: '一起跑5公里', category: 'challenge', completed: false },
  { id: 102, text: '一起跑10公里', category: 'challenge', completed: false },
  { id: 103, text: '一起跑半马', category: 'challenge', completed: false },
  { id: 104, text: '一起爬山', category: 'challenge', completed: false },
  { id: 105, text: '一起徒步', category: 'challenge', completed: false },
  { id: 106, text: '一起骑行', category: 'challenge', completed: false },
  { id: 107, text: '一起游泳', category: 'challenge', completed: false },
  { id: 108, text: '一起潜水', category: 'challenge', completed: false },
  { id: 109, text: '一起跳伞', category: 'challenge', completed: false },
  { id: 110, text: '一起蹦极', category: 'challenge', completed: false },
  { id: 111, text: '一起攀岩', category: 'challenge', completed: false },
  { id: 112, text: '一起冲浪', category: 'challenge', completed: false },
  { id: 113, text: '一起学新技能', category: 'challenge', completed: false },
  { id: 114, text: '一起考证书', category: 'challenge', completed: false },
  { id: 115, text: '一起学外语', category: 'challenge', completed: false },
  { id: 116, text: '一起学乐器', category: 'challenge', completed: false },
  { id: 117, text: '一起学跳舞', category: 'challenge', completed: false },
  { id: 118, text: '一起学画画', category: 'challenge', completed: false },
  { id: 119, text: '一起学做饭', category: 'challenge', completed: true },
  { id: 120, text: '一起参加比赛', category: 'challenge', completed: false },
  { id: 121, text: '一起完成拼图1000片', category: 'challenge', completed: false },
  { id: 122, text: '一起完成乐高', category: 'challenge', completed: true },
  { id: 123, text: '一起看完一本书', category: 'challenge', completed: false },
  { id: 124, text: '一起写日记30天', category: 'challenge', completed: false },
  { id: 125, text: '一起早起30天', category: 'challenge', completed: false },
  
  // 成长 (126-150)
  { id: 126, text: '一起听讲座', category: 'growth', completed: false },
  { id: 127, text: '一起看纪录片', category: 'growth', completed: false },
  { id: 128, text: '一起参观博物馆', category: 'growth', completed: false },
  { id: 129, text: '一起去图书馆', category: 'growth', completed: false },
  { id: 130, text: '一起上公开课', category: 'growth', completed: false },
  { id: 131, text: '一起学理财', category: 'growth', completed: false },
  { id: 132, text: '一起学投资', category: 'growth', completed: false },
  { id: 133, text: '一起读同一本书', category: 'growth', completed: false },
  { id: 134, text: '一起交流读后感', category: 'growth', completed: false },
  { id: 135, text: '一起制定年度计划', category: 'growth', completed: true },
  { id: 136, text: '一起复盘过去', category: 'growth', completed: false },
  { id: 137, text: '一起规划未来', category: 'growth', completed: true },
  { id: 138, text: '一起见家长', category: 'growth', completed: true },
  { id: 139, text: '一起参加婚礼', category: 'growth', completed: false },
  { id: 140, text: '一起参加葬礼', category: 'growth', completed: false },
  { id: 141, text: '一起搬家', category: 'growth', completed: false },
  { id: 142, text: '一起装修', category: 'growth', completed: false },
  { id: 143, text: '一起买第一套房', category: 'growth', completed: false },
  { id: 144, text: '一起买第一辆车', category: 'growth', completed: false },
  { id: 145, text: '一起养第一个孩子', category: 'growth', completed: false },
  { id: 146, text: '一起养第一只宠物', category: 'growth', completed: false },
  { id: 147, text: '一起过第一个情人节', category: 'growth', completed: true },
  { id: 148, text: '一起过第一个生日', category: 'growth', completed: true },
  { id: 149, text: '一起过第一个纪念日', category: 'growth', completed: true },
  { id: 150, text: '一起领证', category: 'growth', completed: true },
]
