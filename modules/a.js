define("a", ["b"], function (b) {
    b.bar();
    return {
        foo: function() {
            console.log("foo");
        }
    };
});