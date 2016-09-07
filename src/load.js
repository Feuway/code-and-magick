'use strict';

window.JSONPRegistry = {};

module.exports = function(url, callback) {
  var callbackName = 'cb' + String(Math.random()).slice(-6);
  window.JSONPRegistry[callbackName] = function(data) {
    callback(data);
  };

  var script = document.createElement('script');
  script.src = url + '?callback=JSONPRegistry.' + callbackName;
  document.body.appendChild(script);
};


