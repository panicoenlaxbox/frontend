require(["a", "jquery"], function(a, $) {
    a.foo();
    $("#button1").on("click", function(e) {
        console.log("button1 was clicked");
    });
});