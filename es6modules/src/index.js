//Combining a default import with a renamed imports
import theDefault, { bar as b } from './lib';
console.log(theDefault); //foo
b(); //bar