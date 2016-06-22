'use strict';

const util = require('./util.js');
const KeySnail = util.getKeySnailInstance();
const {key, ext, command} = KeySnail.modules;

key.setGlobalKey('M-x', function (ev, arg) {
  ext.select(arg, ev);
}, 'List exts and execute selected one', true);

key.setGlobalKey(['f'], function (aEvent, aArg) {
  ext.exec('hok-start-foreground-mode', aArg);
}, 'Hok - Foreground hint mode', true);

key.setGlobalKey(['F'], function (aEvent, aArg) {
  ext.exec('hok-start-background-mode', aArg);
}, 'HoK - Background hint mode', true);

key.setGlobalKey([';'], function (aEvent, aArg) {
  ext.exec('hok-yank-foreground-mode', aArg);
}, 'HoK - Background hint mode', true);

key.setGlobalKey(['C-h', 'b'], function (ev) {
  key.listKeyBindings();
}, 'List all keybindings', false);

key.setGlobalKey(['C-x', 'd'], function (ev) {
  command.focusToById('urlbar');
}, 'Focus to the location bar', true);

key.setGlobalKey('C-s', function (ev) {
  command.iSearchForwardKs(ev);
}, 'Emacs like incremental search forward', true);

key.setGlobalKey('C-r', function (ev) {
  command.iSearchBackwardKs(ev);
}, 'Emacs like incremental search backward', true);
