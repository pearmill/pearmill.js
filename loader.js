!function () {var pearmill = window.pearmill || window.pearmill || [];if (pearmill.called) {window.console && console && console.error(`Pearmill snippet included twice.`);} else {pearmill.called = !0;pearmill.methods = ['track', 'track', 'page', 'identify'];pearmill.func = function (t) {return function () {pearmill.push([t, Array.prototype.slice.call(arguments)]);return pearmill;}};for (var t = 0; t < pearmill.methods.length; t++) {var name = pearmill.methods[t];pearmill[name] = pearmill.func(name);}pearmill.load = function (key, options) {var n = document.createElement("script");n.type = "text/javascript";n.async = !0;n.src = "https://cdn.pearmill.com/pearmill.min.js";var a = document.getElementsByTagName("script")[0];a.parentNode.insertBefore(n,a);pearmill._loadOptions = [key, options];};window.pearmill=pearmill;}

  pearmill.load("<Pearmill API key>");
  pearmill.page();
}();
