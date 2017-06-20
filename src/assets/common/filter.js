import Vue from 'vue'

/**
 * vue渲染时间值
 * @param  {[type]} value [description]
 * @return {[type]}       [description]
 */
Vue.filter('time', function(value) {
  let fmt = 'yyyy-MM-dd',
    date = new Date(value);
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
});

Vue.filter('money', function(value) {
  if (undefined == value) {
    return '0.00';
  }
  return Number(value).toFixed(2);
});
