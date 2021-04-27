import { get, post } from './axios';
/**
 * api接口统一管理
 */

export const getBanner = (p: any) => get('/banner', p);
export const getPersonalized = (p: any) => get('/personalized', p);
export const getNewSong = (p: any) => get('/personalized/newsong', p);
