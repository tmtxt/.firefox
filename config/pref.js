'use strict';

const pref = require('sdk/preferences/service');

function run() {
  pref.set('browser.history_expire_day', 365);
}

module.exports = {
  pref,
  run
};
