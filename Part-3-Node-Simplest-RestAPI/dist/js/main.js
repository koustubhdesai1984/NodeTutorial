define(["require", "exports", "./Ajax"], function (require, exports, Ajax_1) {
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
    Object.defineProperty(exports, "__esModule", { value: true });
    var a = new Ajax_1.default('json/product.json', "POST");
    a.Trigger();
});
