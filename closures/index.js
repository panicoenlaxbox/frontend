function foo(a) {
    var bar = "bar";
    if(a !==undefined) {
        bar = a;
    }
    function baz() {
        console.log(bar);
    }
    return baz;
}
var a = foo("sergio");
var b = foo();
var c = foo("carmen");
a();
b();
c();