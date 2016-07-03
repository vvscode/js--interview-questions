// What is the output? ( How make it correct )
for (var i = 0; i < 5; i++) {
  setTimeout(function() {
    console.log(i);
  }, 1000);
}

// What is the output?
var func = [];
for (var i = 0; i < 5; i++) {
  func[i] = function() {
    console.log(i);
  };
}
func[3]();

// What is the output?
(function() {
  var a = b = 5;
})();

console.log(b);

// Create code for next conditions
function calculate() {/* put your code here */}
calculate('+')(1)(2); // 3
calculate('*')(2)(3); // 6

// Create code for next conditions
var sum = function() { /* put your code here */};
var s = sum();
alert(s); // 0
alert(s(1)); // 1
alert(s(1)(2)); //3
alert(s(3)(4)(5)); // 12

// What is the output?
(function(x) {
    return (function(y) {
        console.log(x);
    })(2)
})(1);
