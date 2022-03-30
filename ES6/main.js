import * as moduleA from "./moduleA.js";

function main(){
    console.log("This is main!");
}
main();
moduleA.helloA();

import test from "./moduleB.js"

console.log(test);

import * as moduleC from "./moduleC.js"

moduleC.helloC();
