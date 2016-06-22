'use strict';

const util = require('./util.js');
const KeySnail = util.getKeySnailInstance();
const {key, ext} = KeySnail.modules;

key.setGlobalKey('M-x', function (ev, arg) {
  ext.select(arg, ev);
}, 'List exts and execute selected one', true);
