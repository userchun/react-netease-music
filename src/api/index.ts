import { get, post } from './axios';
/**
 * api接口统一管理
 */
// export const getEnterprise = (p: any) => get('?Action=home', p);
// export const login = (p: any) => post('/?Action=token', p);
export const getBanner = (p: any) => get('/banner', p);
// personalized?limit=10
export const getPersonalized = (p: any) => get('/personalized', p);
// personalized/newsong
export const getNewSong = (p: any) => get('/personalized/newsong', p);
