"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const classy_1 = __importDefault(require("./classy"));
let message = 'Definitely a string, why are we using let?';
console.log(message);
// Okay, so it appears that we are compiling typescript to javascript,
// Which makes me think the point of typescript is to make my life harder.
// Apparently the advantage is that you don't accidently try referencing a property that doesn't exist
let magic = 56; // This language doesn't appear to be strongly typed, who thought this was a good idea?
let interesting;
// Like why is a number a type? It doesn't even tell you how it is stored.
// But typescript adds classes, which makes my life easier.
function do_something(a, b) {
    return a;
}
function plant_garden() {
    const garden = new classy_1.default(1000);
    garden.plant('🌷');
    garden.plant('🍄');
    garden.start();
}
