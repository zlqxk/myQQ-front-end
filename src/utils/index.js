function addCookie(name, value, expiresHours) {
  //添加一个cookie。  三个参数：cookie的名称、值、有效时间（为0时，关闭浏览器cookie消失）
  var cookieString = name + "=" + escape(value);
  //判断是否设置过期时间
  if (expiresHours > 0) {
    var date = new Date();
    date.setTime(date.getTime + expiresHours * 3600 * 1000);
    cookieString = cookieString + "; expires=" + date.toGMTString();
  }
  document.cookie = cookieString;
}

function getCookie(name) {
  //获取指定cookie值。 该函数返回名称为name的cookie值，如果不存在则返回空
  var strCookie = document.cookie;
  var arrCookie = strCookie.split("; ");
  for (var i = 0; i < arrCookie.length; i++) {
    var arr = arrCookie[i].split("=");
    if (arr[0] == name) return arr[1];
  }
  return "";
}

function deleteCookie(name) {
  //删除指定的cookie
  var date = new Date();
  date.setTime(date.getTime() - 10000);
  document.cookie = name + "=v; expires=" + date.toGMTString();
}

export { addCookie, getCookie, deleteCookie };
