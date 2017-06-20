/**
 * === Javascript Module ======================
 * Copyright (c) 2016 Mill, All rights reserved.
 *
 * @version 1.0
 * @author Mill
 * @description 工具类模块
 * ---2017/4/27----------------------------------
 */
import moxie from './qiniu/moxie'
import plupload from './qiniu/plupload.full.min'
import qiniu from './qiniu/qiniu'
import md5 from 'md5'
export default {
  domain: 'http://image.cache.timepack.cn/',
  Access_token() {
    let key = md5('haidu-admin-user');
    return {
      getter() {
        return localStorage.getItem(key);
      },
      setter(json) {
        localStorage.setItem(key, json)
        return this;
      },
      value() {
        return md5('loginTime' + new Date().getTime())
      },
      remove() {
        localStorage.removeItem(key);
        return this;
      }
    }
  },
  formateDate(date, fmt) {
    let o = {
      "M+": date.getMonth() + 1, //月份
      "d+": date.getDate(), //日
      "h+": date.getHours(), //小时
      "m+": date.getMinutes(), //分
      "s+": date.getSeconds(), //秒
      "q+": Math.floor((date.getMonth() + 3) / 3), //季度
      "S": date.getMilliseconds() //毫秒
    };
    if (/(y+)/.test(fmt)) fmt = fmt.replace(RegExp.$1, (date.getFullYear() + "").substr(4 - RegExp.$1.length));
    for (let k in o)
      if (new RegExp("(" + k + ")").test(fmt)) fmt = fmt.replace(RegExp.$1, (RegExp.$1.length == 1) ? (o[k]) : (("00" + o[k]).substr(("" + o[k]).length)));
    return fmt;
  },
  isTelephone(str) {
    if (/^1[3|4|5|7|8]\d{9}$/.test(str)) {
      return true;
    }
    return false;
  },
  isEmpty(str) {
    if ('' == str || undefined == str) {
      return true;
    }
    return false;
  },
  FileUploader(param, callback) {
    let exension = "jpg,png,jpeg";
    if (undefined == param.fileType || param.fileType == 'image') {
      //do nothing
    } else if (param.fileType == 'excel') {
      exension = 'xls,xlsx';
    }
    Qiniu.uploader({
      runtimes: 'html5,flash,html4',
      browse_button: param.buttonId,
      uptoken: param.uptoken,
      domain: this.domain, //TODO
      get_new_uptoken: false,
      max_file_size: '100mb', //没有会导致微信端614错误
      max_retries: 3,
      dragdrop: true,
      chunk_size: '10mb',
      auto_start: true,
      unique_names: true,
      save_key: false,
      filters: {
        mime_types: [{
          title: "Image files",
          extensions: exension
        }],
        max_file_size: undefined == param.size ? '4mb' : param.size
      },
      log_level: 1,
      init: {
        'FilesAdded': function(up, files) {
          callback.added(up, files);
        },
        'BeforeUpload': function(up, file) {},
        'UploadProgress': function(up, file) {
          callback.progress(up, file);
        },
        'UploadComplete': function(up) {
          up.files = [];
          callback.complete();
        },
        'FileUploaded': function(up, file, info) {
          let res = $.parseJSON(info);
          callback.uploaded(encodeURI(res.key));
        },
        'Error': function(up, err, errTip) {
          callback.error(up, err, errTip);
        }
      }
    });
  }
}
