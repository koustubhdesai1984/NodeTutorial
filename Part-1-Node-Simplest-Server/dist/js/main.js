define(["require", "exports", "./jimmy", "./jimmy"], function (require, exports, jimmy_1, jimmy_2) {
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
    var obj = new jimmy_1.default();
    console.log('listen', obj.greetings(), jimmy_2.mimo);
});
