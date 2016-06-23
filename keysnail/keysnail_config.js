'use strict';


module.exports = class KeySnailConfig {

  /**
   * @param {object} window the chrome window object
   */
  constructor(window) {
    this.window = window;

    const KeySnail = window.KeySnail;
    const {key, ext} = KeySnail.modules;

    this.KeySnail = KeySnail;
    this.key = key;
    this.ext = ext;
  }
};
