define(["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var Greeting = /** @class */ (function () {
        function Greeting() {
            this.num2 = "why";
            this.greetings = function () { return greet() + 'kutty'; };
        }
        Greeting.num = "hellossa";
        return Greeting;
    }());
    var greet = function () { return 'lola'; };
    exports.preet = greet;
    var kiko = function () { };
    exports.mimo = kiko;
    exports.default = Greeting;
});
