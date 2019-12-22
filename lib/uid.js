import Cookies from 'js-cookie'
import psl from 'psl'
const cookieKey = `_pearm`

function uuid() {
    var dt = new Date().getTime()

    var uuid = 'xxxxxxxx-xxxx-yxxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
        var r = (dt + Math.random() * 16) % 16 | 0
        dt = Math.floor(dt / 16)
        return (c == 'x' ? r : (r & 0x3 | 0x8) ).toString(16)
    })

    return uuid
}

export default () => {
  const { domain } = psl.parse(window.location.host)
  let uid = Cookies.get(cookieKey, { domain })

  if (uid && uid.length) {
    return uid
  }

  uid = `pm.${(new Date()).getTime()}.${uuid()}`
  Cookies.set(cookieKey, uid, { domain })

  return uid
}
