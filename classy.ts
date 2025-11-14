// classy.ts
// A basic typescript class
// https://www.geeksforgeeks.org/typescript/how-to-define-a-regex-matched-string-type-in-typescript/ (use an adblocker)
interface Information {
    type: string;
    numbers: number[];
    tooMuch: [boolean, number];
}

export class Pariah {
    expression: string = "";
    definition: string;
    interfacing?: Information;

    constructor(definition: string) {
        this.definition = definition;
    }

    defineExpression(exp: string)
    {
        this.expression = exp;
    }

    get meaning(): string {
        return this.definition;
    }

    regulate(gst: string) // Apparently typescript has a match() function for regular expressions
    {
        // Apparently without the g this will only match the first instance.
        return gst.match(new RegExp(this.expression, 'g'))?.forEach((answer) => {
            console.log(answer);
        });
    }

    finishRequirements()
    {
        this.interfacing = { type: "example", numbers: [1, 2, 3], tooMuch: [true, 42]}
        console.log(this.interfacing.type);
        console.log(this.interfacing.numbers);
        if (!this.interfacing.tooMuch[0]) // will print the tuple if it isn't too much.
        {
            console.log(this.interfacing.tooMuch[1]);
        }
    }
    // Now we just need arrays and tuples...
}