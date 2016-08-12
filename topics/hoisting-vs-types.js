// What is the output?
var a = 1;
function b() {
  a = 10;
  return;
  function a() {
  }
}
b();
console.log(a);

// What is the output?
var a = {};
var b = { key: 'b' };
var c = { key: 'c' };

a[b] = 123;
a[c] = 456;
console.log(a[b]);

// What is the output?
console.log("1" + 2);
console.log(2 + "1");
console.log(1 + 2 + 3 + 4 + "5");

// What for use next contruction?
function greetAll() {
  var args = Array.prototype.slice.call(arguments, 0);
}

// What is the output?
function test() {
  console.log(a);
  console.log(foo());

  var a = 1;

  function foo() {
    return 2;
  }
}
test();

// What is the output?
(function() {
  alert(inner);
  inner();
  function inner() {
    alert('inner');
  }
})();

// What is the output?
(function {
  alert(inner);
  inner();
  var inner = function() {
    alert('inner');
  }
})();

// What is the output?
(function() {
  f();
  f = function() {
    console.log(1);
  }
})();

function f() {
  console.log(2)
}
f();

// What is the output?
(function() {
  var x = 1;

  function x() {};

  console.log(x);
})();


// number / undefined / function / Error ?
var f = function g(){ return 23; };
typeof g();

// what is x ?
var y = 1, x = y = typeof x;
x;

// Output?
var x = [typeof x, typeof y][1];
typeof typeof x;


// Output?  Just be attentive
(function(foo){
  return typeof foo.bar;
})({ foo: { bar: 1 } });


// Output
(function() {
    logMe();
    var logMe = function() {
        console.log('Jesus, George, it was a wonder I was even born.');
    };
    logMe();

    function logMe() {
        console.log('Great Scott!');
    }
    logMe();
})();

// result?
new String('Hello') === 'Hello'

// result?
"This is a string" instanceof String;

// output ?
var a = 1;
var b = function() {
 a = 10;
 return a;
 function a() {
   a = 5;
  }
};
console.log(b(), a);

// output?
var x = [typeof x, typeof y][1];
typeof typeof x;

// output?
(function f(){
  function f(){ return 1; }
  return f();
  function f(){ return 2; }
})();

// result?
function f(){ return f; }
new f() instanceof f;

// output?
var text = 'outside';
function logIt(){
    console.log(text);
    var text = 'inside';
};
logIt();

// output? ( nb: answer depends on environment / browser )
(function() {
 var a = 'initial';
  if(a) {
    function f() { console.log("1"); };
  } else {
    function f() { console.log("2"); };
  }
  f();
})();

// output?
(function() {
 var a = 0;
  f();
  if( a ) {
    function f() { console.log("1"); };
  } else {
    function f() { console.log("2"); };
  }
})();

// What does the following code do? And why? ( quirks )
falseStr = "false";
if(true){
  var falseStr;
  if(falseStr){
   console.log("false" == true);
   console.log("false" == false);
  }
}
