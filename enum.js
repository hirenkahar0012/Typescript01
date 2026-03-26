var fruits;
(function (fruits) {
    fruits["a"] = "apple";
    fruits["b"] = "banana";
    fruits["c"] = "cherry";
})(fruits || (fruits = {}));
var myFruit = fruits.a;
console.log(myFruit);
myFruit = fruits.c;
console.log(myFruit);
