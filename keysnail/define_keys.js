'use strict';

// const util = require('./util.js');
// const KeySnail = util.getKeySnailInstance();
// const {key, ext, command} = KeySnail.modules;

// key.setGlobalKey('M-x', function (ev, arg) {
//   ext.select(arg, ev);
// }, 'List exts and execute selected one', true);

// key.setViewKey(['f'], function (aEvent, aArg) {
//   ext.exec('hok-start-foreground-mode', aArg);
// }, 'Hok - Foreground hint mode', true);

// key.setViewKey(['F'], function (aEvent, aArg) {
//   ext.exec('hok-start-background-mode', aArg);
// }, 'HoK - Background hint mode', true);

// key.setViewKey([';'], function (aEvent, aArg) {
//   ext.exec('hok-yank-foreground-mode', aArg);
// }, 'HoK - Background hint mode', true);

// key.setGlobalKey(['C-h', 'b'], function (ev) {
//   key.listKeyBindings();
// }, 'List all keybindings', false);

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

  constructor(window) {
    super(window);

    const key = this.key;
    const ext = this.ext;

    key.setGlobalKey('M-x', function (ev, arg) {
      ext.select(arg, ev);
    }, 'List exts and execute selected one', true);

    this.defineKeys(
      GLOBAL,
      'C-l',  'select-next-tab',
      'C-j',  'select-previous-tab'
    );
  }


  defineKeys() {
    if (arguments.length <= 1) {
      throw new Error('Too few arguments');
    }

    if (arguments.length % 2 == 0) {
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

    for(var i = 0; i < args.length; i+=2) {
      key.defineKey([keyMode], args[i], makeHandler(args[i+1]));
    }
  }
};
