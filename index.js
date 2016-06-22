const {Cu, Ci, Cc} = require('chrome');

// wrap inside an object for exporting to global browser window
const dotfirefox = {
  // some global vars
  Cu, Ci, Cc,

  configPref: require('./config/pref.js'),
  keySnail: require('./keysnail/index.js'),

  run: function(){
  }
};

// export to main browser window
var { viewFor } = require('sdk/view/core');
var browserWindows = require('sdk/windows').browserWindows;
const chromeWindow = viewFor(browserWindows[0]);
chromeWindow.dotfirefox = dotfirefox;

// start running
dotfirefox.run();
