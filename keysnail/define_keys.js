'use strict';

// const util = require('./util.js');
// const KeySnail = util.getKeySnailInstance();
// const {key, ext, command} = KeySnail.modules;

// key.setGlobalKey(['C-x', 'd'], function (ev) {
//   command.focusToById('urlbar');
// }, 'Focus to the location bar', true);

// key.setGlobalKey('C-s', function (ev) {
//   command.iSearchForwardKs(ev);
// }, 'Emacs like incremental search forward', true);

// key.setGlobalKey('C-r', function (ev) {
//   command.iSearchBackwardKs(ev);
// }, 'Emacs like incremental search backward', true);

// key.setGlobalKey('C-l', function (ev) {
//   const window = util.getFirstWindow();
//   const {getBrowser} = window;
//   getBrowser().mTabContainer.advanceSelectedTab(1, true);
// }, 'Select next tab', false);

const GLOBAL = 'global'
const VIEW = 'view';
const EDIT = 'edit';
const CARET = 'caret';

const KeySnailConfig = require('./keysnail_config.js');

module.exports = class DefineKeysConfig extends KeySnailConfig {

  /**
   * Define keys
   * @param {object} window
   */
  constructor(window) {
    super(window);

    const key = this.key;
    const ext = this.ext;

    key.setGlobalKey('M-x', function (ev, arg) {
      ext.select(arg, ev);
    }, 'List exts and execute selected one', true);

    // global
    this.defineKeys(
      GLOBAL,
      'C-l', 'select-next-tab', 'Select next tab',
      'C-j', 'select-previous-tab', 'Select previous tab',
      ['C-h', 'b'], 'describe-bindings', 'List all key bindings'
    );

    // view
    this.defineKeys(
      VIEW,
      'f', 'hok-start-foreground-mode', 'Follow a link in current buffer',
      'F', 'hok-start-background-mode', 'Follow a link in new buffer',
      ';', 'hok-yank-foreground-mode', 'Copy'
    );
  }


  /**
   * Batch define key
   * First arg: key mode
   */
  defineKeys() {
    if (arguments.length <= 1) {
      throw new Error('Too few arguments');
    }

    if (arguments.length % 3 != 1) {
      throw new Error('Wrong number of arguments');
    }

    // key mode is the first arg
    const key = this.key;
    const ext = this.ext;
    const args = Array.prototype.slice.call(arguments);
    const keyMode = args[0];

    // the rest are the pair of key bindings
    args.splice(0, 1);
    const makeHandler = function(command){
      return function(args) {
        ext.exec(command, args);
      }
    };

    for(var i = 0; i < args.length; i+=3) {
      const keyStroke = args[i];
      const command = args[i+1];
      const desc = args[i+2];
      key.defineKey([keyMode], keyStroke, makeHandler(command), desc);
    }
  }
};
