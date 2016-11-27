'use strict'

export const SERVER_HOST = 'http://www.lixbra.com/yyb';

//登录:         /yyb/user/login             post:{account,passwd}
export const URI_USER_LOGIN = '/user/login';

//注册:         /yyb/user/register          post:{account,passwd,header(图片文件头像 )}
export const URI_USER_REGIST = '/user/register';

//昵称修改: /yyb/user/updatenickname        post:{userid,nickname}
export const URI_USER_UPD_NICKNAME = '/user/updatenickname';

//头像修改:     /yyb/user/updateheader      post:{userid,header}
export const URI_USER_UPD_HEADER = '/user/updateheader';

//我的信息:     /yyb/user/                  post:{userid}
export const URI_USER_INFO = '/user';