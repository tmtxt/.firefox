'use strict';


module.exports = class KeySnailConfig {

  /**
   * @param {object} window the chrome window object
   */
  constructor(window) {
    this.window = window;

    const KeySnail = window.KeySnail;
    const {key, ext, command, plugins, hook, util} = KeySnail.modules;

    this.KeySnail = KeySnail;
    this.key = key;
    this.ext = ext;
    this.command = command;
    this.plugins = plugins;
    this.hook = hook;
    this.util = util;
  }
};
