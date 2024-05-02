"use strict";
let a = 10;
console.log(a);
let b = 10;
console.log(b);
let c = 40;
console.log(c);
let str = 'thiru';
console.log(str);
let bool = true;
console.log(bool);
//Enum
var gender;
(function (gender) {
    gender["male"] = "male";
    gender["female"] = "female";
    gender["transgeder"] = "transgender";
})(gender || (gender = {}));
console.log(gender.female);
let user = {
    id: 1,
    name: 'thiru'
};
//type assert
