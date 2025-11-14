"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Pariah = void 0;
var Pariah = /** @class */ (function () {
    function Pariah(definition) {
        this.expression = "";
        this.definition = definition;
    }
    Pariah.prototype.defineExpression = function (exp) {
        this.expression = exp;
    };
    Object.defineProperty(Pariah.prototype, "meaning", {
        get: function () {
            return this.definition;
        },
        enumerable: false,
        configurable: true
    });
    Pariah.prototype.regulate = function (gst) {
        var _a;
        // Apparently without the g this will only match the first instance.
        return (_a = gst.match(new RegExp(this.expression, 'g'))) === null || _a === void 0 ? void 0 : _a.forEach(function (answer) {
            console.log(answer);
        });
    };
    Pariah.prototype.finishRequirements = function () {
        this.interfacing = { type: "example", numbers: [1, 2, 3], tooMuch: [true, 42] };
        console.log(this.interfacing.type);
        console.log(this.interfacing.numbers);
        if (!this.interfacing.tooMuch[0]) // will print the tuple if it isn't too much.
         {
            console.log(this.interfacing.tooMuch[1]);
        }
    };
    return Pariah;
}());
exports.Pariah = Pariah;
