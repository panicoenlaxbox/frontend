'use strict';

var _lib = require('./lib');

var _lib2 = _interopRequireDefault(_lib);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

console.log(_lib2.default); //foo
//Combining a default import with a renamed imports
(0, _lib.bar)(); //bar