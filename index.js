const {Class} = require('sdk/core/heritage');
const {Cu, Ci, Cc} = require('chrome');
const {Unknown, Factory} = require('sdk/platform/xpcom');

const dotfirefox = {
  // Component class required props
  extends: Unknown,
  get wrappedJSObject() {
    return this;
  },

  // some global vars
  Cu, Ci, Cc,

  configPref: require('./config/pref.js'),

  run: function(){
  }
};
dotfirefox.run();

// Create and register the factory
const contractId = '@truongtx.me/dotfirefox';
const DotFirefox = Class(dotfirefox);
Factory({
  contract: contractId,
  Component: DotFirefox
});
