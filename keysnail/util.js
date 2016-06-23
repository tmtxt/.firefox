'use strict';

function getFirstWindow() {
  var { viewFor } = require('sdk/view/core');
  var browserWindows = require('sdk/windows').browserWindows;
  const chromeWindow = viewFor(browserWindows[0]);

  return chromeWindow;
}


/**
 * Get the current KeySnail instance (in the currently active window)
 * @returns {KeySnail}
 * @throws {Error}
 */
function getKeySnailInstance() {
  const chromeWindow = getFirstWindow();
  const KeySnail = chromeWindow.KeySnail;

  if (!KeySnail) {
    throw new Error('Cannot find KeySnail instance');
  }

  return KeySnail;
}


module.exports = {
  getFirstWindow,
  getKeySnailInstance
};
