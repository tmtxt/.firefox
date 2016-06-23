'use strict';

const CommonConfig = require('./common.js');
const SpecialKeysConfig = require('./special_keys.js');
const NavigationConfig = require('./navigation.js');
const DefineKeysConfig = require('./define_keys.js');


/**
 * Class for init Key Snail config for specific chrome window
 */
module.exports = class WindowKeySnailConfig {

  /**
   * Constrcutor
   * @param {object} window the chrome window to init
   */
  constructor(window) {
    this.window = window;
  }


  run() {
    const window = this.window;
    new SpecialKeysConfig(window);
    new CommonConfig(window);
    new NavigationConfig(window);
    new DefineKeysConfig(window);
  }
};
