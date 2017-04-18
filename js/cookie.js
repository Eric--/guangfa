

function setCookie(name, value){
  document.cookie = name + "=" + value;
}

function getCookie(name){
  return document.cookie;
}

module.exports = {
  setCookie: setCookie,
  getCookie: getCookie
}
