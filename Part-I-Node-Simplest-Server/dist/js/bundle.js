define("jimmy", ["require", "exports"], function (require, exports) {
    "use strict";
    exports.__esModule = true;
    var foo = "bar";
    exports["default"] = foo;
});
define("main", ["require", "exports", "jimmy"], function (require, exports, jimmy_1) {
    /*
    
    Learnt:
    1. Lambda function => ()
    2. import, export
    
    Task:
    1. write a module for ajax calls and
    2. What are enums, interfaces, generators, iterators, DECORATORS, reflections, proxies and observables?
       Implement at least 1 of every type.
    3. Implemented:
    
    4.
    
    1. For compile and output to dir
    "outDir":"./dist/js"
    2. For compile and bundle to single file
    "outFile": "dist/bundle"
    
    */
    "use strict";
    exports.__esModule = true;
    var Greeting = /** @class */ (function () {
        function Greeting() {
            this.num2 = "why";
        }
        Greeting.prototype.greet = function () {
            console.log('hello world', jimmy_1["default"]);
        };
        Greeting.num = "hellossa";
        return Greeting;
    }());
    var obj = new Greeting();
    obj.greet();
    console.log('listen', Greeting.num);
    obj.greet();
});
