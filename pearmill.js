import 'whatwg-fetch'
import * as pear from './lib'

if (window.pearmill && window.pearmill.called) {
  if (window.pearmill._loadOptions) {
    pear.init.apply(pear, window.pearmill._loadOptions)
  }

  const calls = window.pearmill || []

  calls.forEach((call) => {
    const [func, args] = call || []

    if (pear[func]) {
      pear[func].apply(pear, args);
    }
  })
}

window.pearmill = pear

export default pear
