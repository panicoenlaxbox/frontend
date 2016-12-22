/*function ns(ns) {
    var i, w = window;
    ns = ns.split('.');
    for (i in ns) {
        if (!(w[ns[i]])) {
            w[ns[i]] = {};
        }
        w = w[ns[i]];
    }
    return w;
}*/

function ns(ns) {
    var i, b = window;
    for (i in (ns = ns.split('.')))
        b = (b[ns[i]] || (b[ns[i]] = {}))
    return b;
}