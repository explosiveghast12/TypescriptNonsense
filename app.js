"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var classy_1 = require("./classy");
function manly() {
    // This function embodies maculinity as it is the main function.
    // That is a joke, of course.
    var message = 'There are things happening in the background, trust me.';
    var disp = document.getElementById("JSOut");
    if (disp != null) {
        disp.innerText = message !== null && message !== void 0 ? message : "";
    }
    // Okay, so it appears that we are compiling typescript to javascript,
    // Which makes me think the point of typescript is to make my life harder.
    // Apparently the advantage is that you don't accidently try referencing a property that doesn't exist
    var magic = 56; // This language doesn't appear to be strongly typed, who thought this was a good idea?
    var interesting;
    do_something(magic, 20);
    classified();
    // Like why is a number a type? It doesn't even tell you how it is stored.
}
// But typescript adds classes, which makes my life easier.
function do_something(a, b) {
    return a;
}
function classified() {
    var pariah = new classy_1.Pariah("An outcast");
    console.log(pariah.meaning);
    pariah.finishRequirements();
    pariah.defineExpression("\\d+"); // Intellisense wrote these two lines.
    pariah.regulate("Here are some numbers: 123 and 4567.");
    var userinput = "123means nothin324to you2349802so why should 234908 I care21"; // Apparently if I want to get user input I need to use node, which I don't feel like doing.
    pariah.regulate(userinput); // intellisense also added the || "" part, which I assume means that this won't break if the user inputs nothing.
}
