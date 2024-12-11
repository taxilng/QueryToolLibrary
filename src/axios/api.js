import { post, get } from './request'

// 登录
export const getLOLHistory = (data) => post('http://127.0.0.1:7001/lolhistory', data)
export const searchPlayer = (data) => post('http://127.0.0.1:7001/searchPlayer', data)
export const searchPlayerAll = (data) => get('/api/lzyumi/lol/info', data)

// 查询战绩列表
// openId: HKrfJ4eSdQZsr9zzTJKVww==
// gameId: 600106534682
// areaId: 4
// lzyumiSign: 6341b4f8c72ca58938779f1338f7b5b1
// signStr: 6121444383666
export const searchPlayerHistory = (data) =>
  get('/api/lzyumi/lol/info/findOrderDetailInfoAll', data)

// "banInfoList": [],  // 被禁用的英雄列表（此处为空）
// "totalBaseKilled": 0,  // 摧毁的基地数量
// "totalKills": 53,  // 队伍总击杀数
// "isSurrender": 0,  // 是否投降（0 表示未投降）
// "totalTurretsKilled": 0,  // 摧毁的防御塔数量
// "totalDampenKilled": 0,  // 摧毁的抑制器数量
// "totalAssists": 103,  // 队伍总助攻数
// "totalDeaths": 70,  // 队伍总死亡数
// "totalDragonKills": 0,  // 击杀的龙数量
// "teamId": "100",  // 队伍 ID（此处为 100）
// "totalGoldEarned": 65614,  // 队伍总获得的金币数
// "totalBaronKills": 0,  // 击杀的大龙数量
// "win": "Fail",  // 比赛结果（Fail 表示失败）
// "teamElo": "1146"  // 队伍的 Elo 评分


/**
 * 隐藏分接口
 * https://lol.lzyumi.top/lzyumi/lol/info/getRankEloInfo
 * 入参
 * openId
 * areaId
 * lzyumiSign
 * signStr
 */
export const getRankEloInfo = (data) =>
  get('/api/lzyumi/lol/info/getRankEloInfo', data)

// 注册
export const joinUN_USE = (data) => post(`https://air.m3zz.com/v1/user/join/UN_USE`, data );

// 登录
export const userLogin = (data) => post(`https://air.m3zz.com/v1/user/login`, data);
// 验证码
export const generate_captcha = () => get(`https://air.m3zz.com/v1/common/generate_captcha?width=100&height=32`);

export const leagueSummoner = (data) => post(`https://air.m3zz.com/v2/league/summoner`, data);
// 查询战绩
export const history_all = (data) => post(`/ape/v2/league/history_all`, data,); 
// 查询战绩
export const getBspapp = (data) => post(`/bspapp`, data,); 

// QQ查询手机号
export const qqapi = (data) => get('/xywlapi/qqapi', data)
// 手机号查询QQ
export const phone2qq = (data) => get('/xywlapi/qqphone', data)
// QQ号查询LOL
export const qqlol = (data) => get('/xywlapi/qqlol', data)
// lol查询QQ
export const lolname = (data) => get('/xywlapi/lolname', data)