import { Pariah } from './classy';

let message: String = 'Definitely a string, why are we using let?';
console.log(message);
// Okay, so it appears that we are compiling typescript to javascript,
// Which makes me think the point of typescript is to make my life harder.
// Apparently the advantage is that you don't accidently try referencing a property that doesn't exist
let magic = 56; // This language doesn't appear to be strongly typed, who thought this was a good idea?
let interesting: number;
do_something(magic, 20);
classified();
// Like why is a number a type? It doesn't even tell you how it is stored.



// But typescript adds classes, which makes my life easier.
function do_something(a: number, b: number)
{
    return a;
}

function classified()
{
    let pariah = new Pariah("An outcast");
    console.log(pariah.meaning);
    pariah.finishRequirements();
}