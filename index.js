// Closure

// Q.1)

// function counter(){
//     var counter = 0;

//     function IncreaseCounter() {
//         return counter += 1;
//     };

//     return IncreaseCounter;
// }

// var counter = Counter();
// alert(counter());
// alert(counter());
// alert(counter());
// alert(counter());


// Q.2) 

let counts = 0;
(function immediate() {
  if (counts === 0) {
    let counts = 1;
    console.log(counts); // What is logged?
  }
  console.log(counts); // What is logged?
})();

// Output : For line 28 it gives '1' & For line 30 it gives '0'


// Q.3)
for (var i = 0; i < 3; i++) {
  setTimeout(function log() {
    console.log(i); // What is logged?
  }, 1000);
}

// Output : It gives an output '3' as three times with interval of 1 sec .


// Q.4) Write a code to calculate area of a rectangle using inner function. In this case outer function should accept parameter length and inner function should accept parameter breadth.

function area (a, b) {
    let area = a * b;
    return area;
}
console.log(4,5);



// Q.5) Take a variable in outer function and create an inner function to increase the counter every time it is called

function counter(){
  var counter = 0;
  
  function IncreaseCounter() {
      return counter += 1;
  };
  return IncreaseCounter;
}
var counter = counter();
alert(counter());
alert(counter());
alert(counter());
alert(counter());


// Q.6) Print Output

var a = 12;
(function () {
  alert(a);
})();

// Output : It gives output as a alert message with message output value as 12.


// Q.7)
var a = 10;
var x = (function () {
  var a = 12;
  return function () {
    alert(a);
  };
})();
x();


// Q.8)

var globalVar = "xyz";

(function outerFunc(outerArg) {
    var outerVar = 'a';
    
    (function innerFunc(innerArg) {
    var innerVar = 'b';
    
    console.log(
        "outerArg = " + outerArg + "\n" +
        "innerArg = " + innerArg + "\n" +
        "outerVar = " + outerVar + "\n" +
        "innerVar = " + innerVar + "\n" +
        "globalVar = " + globalVar);
    
    })(456);
})(123);

// Output : outerArg = 123
//          innerArg = 456
//          outerVar = a
//          innerVar = b
//          globalVar = xyz




















































