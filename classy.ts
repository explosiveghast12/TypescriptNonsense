// classy.ts
// A basic typescript class
interface Information {
    type: string;
    numbers: number[];
    tooMuch: [boolean, number];
}

export class Pariah {
    definition: string;
    interfacing?: Information;

    constructor(definition: string) {
        this.definition = definition;
    }

    get meaning(): string {
        return this.definition;
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