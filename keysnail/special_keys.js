'use strict';

const util = require('./util.js');
const KeySnail = util.getKeySnailInstance();
const {key} = KeySnail.modules;

key.quitKey              = 'C-g';
key.helpKey              = '<f1>';
key.escapeKey            = 'C-q';
key.macroStartKey        = '<f3>';
key.macroEndKey          = '<f4>';
key.suspendKey           = '<f2>';
key.universalArgumentKey = 'C-u';
key.negativeArgument1Key = 'C--';
key.negativeArgument2Key = 'C-M--';
key.negativeArgument3Key = 'M--';
