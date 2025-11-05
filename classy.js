"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Pariah = void 0;
var Pariah = /** @class */ (function () {
    function Pariah(definition) {
        this.definition = definition;
    }
    Object.defineProperty(Pariah.prototype, "meaning", {
        get: function () {
            return this.definition;
        },
        enumerable: false,
        configurable: true
    });
    Pariah.prototype.finishRequirements = function () {
        this.interfacing = { type: "example", numbers: [1, 2, 3], tooMuch: [true, 42] };
        console.log(this.interfacing.type);
        console.log(this.interfacing.numbers);
        if (this.interfacing.tooMuch[0]) {
            console.log(this.interfacing.tooMuch[1]);
        }
    };
    return Pariah;
}());
exports.Pariah = Pariah;
