'use strict';

const KeySnailConfig = require('./keysnail_config.js');

module.exports = class NavigationConfig extends KeySnailConfig {

  constructor(window) {
    super(window);

    this.initCommonNavigation();
  }


  /**
   * Common navigation
   */
  initCommonNavigation() {
    // new tab
    const window = this.window;
    const ext = this.ext;
    const {focusAndSelectUrlBar} = window;

    ext.add('find-alternate-url', () => {
      focusAndSelectUrlBar();
    }, 'Edit the url in the current buffer');
  }
};
