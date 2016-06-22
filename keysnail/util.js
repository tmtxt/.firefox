'use strict';

/**
 * Get the current KeySnail instance (in the currently active window)
 * @returns {KeySnail}
 * @throws {Error}
 */
exports.getKeySnailInstance = function() {
  var { viewFor } = require('sdk/view/core');
  var browserWindows = require('sdk/windows').browserWindows;
  const chromeWindow = viewFor(browserWindows[0]);
  const KeySnail = chromeWindow.KeySnail;

  if (!KeySnail) {
    throw new Error('Cannot find KeySnail instance');
  }

  return KeySnail;
};
