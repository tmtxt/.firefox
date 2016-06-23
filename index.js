'use strict';

const {Cu, Ci, Cc} = require('chrome');

// config
const configPref = require('./config/pref.js');

// keysnai
const WindowKeySnailConfig = require('./keysnail/index.js');

// global dot firefox, init for global config
const gdff = {
  // some global vars
  Cu, Ci, Cc,

  // config
  configPref,

  run: function() {
    this.configPref.run();
  }
};
gdff.run();

// get the first browser window
var { viewFor } = require('sdk/view/core');
var browserWindows = require('sdk/windows').browserWindows;
const chromeWindow = viewFor(browserWindows[0]);

// function to init on window local config
function initDotFirefoxForWindow(window) {
  // convert back to chrome window
  window = viewFor(window);

  // local dot firefox object, local inside this window only
  const ldff = {
    Cu, Ci, Cc,

    keySnailConfig: new WindowKeySnailConfig(window),

    run: function() {
      this.keySnailConfig.run();
    }
  };
  ldff.run();

  window.gdff = gdff;
  window.ldff = ldff;
}

// init for each new window open
browserWindows.on('open', initDotFirefoxForWindow);
initDotFirefoxForWindow(chromeWindow);
