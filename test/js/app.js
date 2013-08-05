goog.provide('app.start');

goog.require('app.Hello');

/**
 * @param {Object} config
 */
app.start = function(config) {
    var hello = new app.Hello();
    hello.sayHello();
};

goog.exportSymbol('app.start', app.start);
