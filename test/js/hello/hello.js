goog.provide('app.Hello');

/**
 * @constructor
 */
app.Hello = function() {

};

app.Hello.prototype.sayHello = function() {
    /** @desc Hello World ! */
    var MSG_HELLO_WORLD = goog.getMsg('Hello World !');

    alert(MSG_HELLO_WORLD);
};
