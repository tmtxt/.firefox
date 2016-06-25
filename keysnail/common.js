'use strict';

const KeySnailConfig = require('./keysnail_config.js');

module.exports = class CommonConfig extends KeySnailConfig {

  constructor(window) {
    super(window);

    const key = this.key;
    const command = this.command;
    const ext = this.ext;
    const hook = this.hook;
    const util = this.util;
    const KeySnail = this.KeySnail;

    hook.addToHook('KeyBoardQuit', function (aEvent) {
      if (key.currentKeySequence.length)
        return;

      command.closeFindBar();

      let marked = command.marked(aEvent);

      if (util.isCaretEnabled()) {
        if (marked) {
          command.resetMark(aEvent);
        } else {
          if ('blue' in aEvent.target) aEvent.target.blur();

          const {gBrowser, _content} = window;
          gBrowser.focus();
          _content.focus();
        }
      } else {
        const {goDoCommand} = window;
        goDoCommand('cmd_selectNone');
      }

      const {KeyEvent} = window;
      if (KeySnail.windowType === 'navigator:browser' && !marked) {
        key.generateKey(aEvent.originalTarget, KeyEvent.DOM_VK_ESCAPE, true);
      }
    });

    ext.add('describe-bindings', () => {
      key.listKeyBindings();
    }, 'List all key bindings');
  }
};
