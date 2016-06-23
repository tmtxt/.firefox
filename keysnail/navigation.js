'use strict';

const KeySnailConfig = require('./keysnail_config.js');

module.exports = class NavigationConfig extends KeySnailConfig {

  constructor(window) {
    super(window);

    this.initChangeTabCommands();
  }


  initChangeTabCommands() {
    const window = this.window;
    const ext = this.ext;
    const {getBrowser} = window;

    ext.add('select-next-tab', () => {
      getBrowser().mTabContainer.advanceSelectedTab(1, true);
    }, 'Select next tab');

    ext.add('select-previous-tab', () => {
      getBrowser().mTabContainer.advanceSelectedTab(-1, true);
    }, 'Select previous tab');
  }
};
