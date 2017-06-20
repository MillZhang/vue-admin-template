/**
 * === Javascript Module ======================
 * Copyright (c) 2016 Mill, All rights reserved.
 *
 * @version 1.0
 * @author Mill
 * @description 管理后台接口服务层
 * ---2017/4/27----------------------------------
 */

import axios from 'axios'

axios.defaults.baseURL = process.env.API_ROOT;
axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';
/**
 * 登录请求
 * @param  {[type]} params [description]
 * @return {[type]}        [description]
 */
export const req_login = params => {
  return axios.post(`/mgr/login`, params).then(res => res.data);
}
