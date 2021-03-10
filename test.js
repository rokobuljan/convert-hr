import {convertHR} from "./convert-hr.js";

// TEST EXAMPLE:
const convertOptions = {
    delimiter: " ",
    simple: false,
};
let step = 0;
for (let i = 0; i < 250; ++i) {
    const num = step;
    console.log(num.toFixed(2) + " \t " + convertHR(num, convertOptions));
    step += 0.01;
    step *= 1.15;
}
