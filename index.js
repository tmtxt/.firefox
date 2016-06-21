const {Class} = require('sdk/core/heritage');
const {Unknown, Factory} = require('sdk/platform/xpcom');

const dotfirefox = {
  // Component class required props
  extends: Unknown,
  get wrappedJSObject() {
    return this;
  },

  hello: function() {
    console.log('world');
  }
};

// Create and register the factory
const contractId = '@truongtx.me/dotfirefox';
const DotFirefox = Class(dotfirefox);
Factory({
  contract: contractId,
  Component: DotFirefox
});
