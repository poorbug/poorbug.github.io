export const isAndroid = () => {
  return window.navigator.userAgent.indexOf('Android') >= 0
}

export const isIos = () => {
  return window.navigator.userAgent.indexOf('iPhone') >= 0 || window.navigator.userAgent.indexOf('iPad') >= 0
}

export const isWechat = () => {
  return window.navigator.userAgent.indexOf('micromessage') >= 0
}
