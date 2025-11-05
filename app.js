"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var classy_1 = require("./classy");
var message = 'Definitely a string, why are we using let?';
console.log(message);
// Okay, so it appears that we are compiling typescript to javascript,
// Which makes me think the point of typescript is to make my life harder.
// Apparently the advantage is that you don't accidently try referencing a property that doesn't exist
var magic = 56; // This language doesn't appear to be strongly typed, who thought this was a good idea?
var interesting;
do_something(magic, 20);
classified();
// Like why is a number a type? It doesn't even tell you how it is stored.
// But typescript adds classes, which makes my life easier.
function do_something(a, b) {
    return a;
}
function classified() {
    var pariah = new classy_1.Pariah("An outcast");
    console.log(pariah.meaning);
    pariah.finishRequirements();
}
