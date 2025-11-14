import { Pariah } from './classy';

function manly(): void
{
    // This function embodies maculinity as it is the main function.
    // That is a joke, of course.
    let message: string = 'Things have happened in the background, trust me.';
    let disp = document.getElementById("JSOut");
    if (disp != null)
    {
        disp.innerText = message;
    }
    // Okay, so it appears that we are compiling typescript to javascript,
    // Which makes me think the point of typescript is to make my life harder.
    // Apparently the advantage is that you don't accidently try referencing a property that doesn't exist
    let magic = 56; // This language doesn't appear to be strongly typed, who thought this was a good idea?
    let interesting: number;
    do_something(magic, 20);
    classified();
    // Like why is a number a type? It doesn't even tell you how it is stored.
}


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
    pariah.defineExpression("\\d+"); // Intellisense wrote these two lines.
    pariah.regulate("Here are some numbers: 123 and 4567.");
    let userinput = "123means nothin324to you2349802so why should 234908 I care21"; // Apparently if I want to get user input I need to use node, which I don't feel like doing.
    pariah.regulate(userinput); // intellisense also added the || "" part, which I assume means that this won't break if the user inputs nothing.
}