'use strict';

const KeySnailConfig = require('./keysnail_config.js');

module.exports = class CommonConfig extends KeySnailConfig {

  constructor(window) {
    super(window);

    const key = this.key;
    const command = this.command;
    const ext = this.ext;

    ext.add('describe-bindings', () => {
      key.listKeyBindings();
    }, 'List all key bindings');
  }
};
