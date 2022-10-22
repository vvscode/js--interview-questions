# Hoisting and types

What is the output?

<!-- prettier-ignore-start -->
```javascript
var a = 1;
function b() {
  a = 10;
  return;
  function a() {
  }
}
b();
console.log(a);
```
<!-- prettier-ignore-end -->
---
What is the output?
<!-- prettier-ignore-start -->
```javascript
var a = {};
var b = { key: 'b' };
var c = { key: 'c' };

a[b] = 123;
a[c] = 456;
console.log(a[b]);
```
<!-- prettier-ignore-end -->
---
What is the output?
<!-- prettier-ignore-start -->
```javascript
console.log("1" + 2);
console.log(2 + "1");
console.log(1 + 2 + 3 + 4 + "5");
```
<!-- prettier-ignore-end -->

What for use next contruction?

<!-- prettier-ignore-start -->
```javascript
function greetAll() {
  var args = Array.prototype.slice.call(arguments, 0);
}
```
<!-- prettier-ignore-end -->
---
What is the output?
<!-- prettier-ignore-start -->
```javascript
function test() {
  console.log(a);
  console.log(foo());

  var a = 1;

  function foo() {
    return 2;
  }
}
test();
```
<!-- prettier-ignore-end -->
---
What is the output?
<!-- prettier-ignore-start -->
```javascript
(function() {
  alert(inner);
  inner();
  function inner() {
    alert('inner');
  }
})();
```
<!-- prettier-ignore-end -->

What is the output?

<!-- prettier-ignore-start -->
```javascript
(function {
  alert(inner);
  inner();
  var inner = function() {
    alert('inner');
  }
})();
```
<!-- prettier-ignore-end -->

What is the output?

<!-- prettier-ignore-start -->
```javascript
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
```
<!-- prettier-ignore-end -->
---
What is the output?
<!-- prettier-ignore-start -->
```javascript
(function() {
  var x = 1;

  function x() {};

  console.log(x);
})();
```
<!-- prettier-ignore-end -->
---
`number / undefined / function / Error` ?
<!-- prettier-ignore-start -->
```javascript
var f = function g(){ return 23; };
typeof g();
```
<!-- prettier-ignore-end -->
---
what is x ?
<!-- prettier-ignore-start -->
```javascript
var y = 1, x = y = typeof x;
x;
```
<!-- prettier-ignore-end -->
---
Output?
<!-- prettier-ignore-start -->
```javascript
var x = [typeof x, typeof y][1];
typeof typeof x;
```
<!-- prettier-ignore-end -->
---
Output?  Just be attentive
<!-- prettier-ignore-start -->
```javascript
(function(foo){
  return typeof foo.bar;
})({ foo: { bar: 1 } });
```
<!-- prettier-ignore-end -->
---
Output
<!-- prettier-ignore-start -->
```javascript
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
```
<!-- prettier-ignore-end -->
---
result?
<!-- prettier-ignore-start -->
```javascript
new String('Hello') === 'Hello'
```
<!-- prettier-ignore-end -->
---
result?
<!-- prettier-ignore-start -->
```javascript
"This is a string" instanceof String;
```
<!-- prettier-ignore-end -->
---
output ?
<!-- prettier-ignore-start -->
```javascript
var a = 1;
var b = function() {
 a = 10;
 return a;
 function a() {
   a = 5;
  }
};
console.log(b(), a);
```
<!-- prettier-ignore-end -->
---
output?
<!-- prettier-ignore-start -->
```javascript
var x = [typeof x, typeof y][1];
typeof typeof x;
```
<!-- prettier-ignore-end -->
---
output?
<!-- prettier-ignore-start -->
```javascript
(function f(){
  function f(){ return 1; }
  return f();
  function f(){ return 2; }
})();
```
<!-- prettier-ignore-end -->
---
result?
<!-- prettier-ignore-start -->
```javascript
function f(){ return f; }
new f() instanceof f;
```
<!-- prettier-ignore-end -->
---
output?
<!-- prettier-ignore-start -->
```javascript
var text = 'outside';
function logIt(){
    console.log(text);
    var text = 'inside';
};
logIt();
```
<!-- prettier-ignore-end -->
---
output? ( nb: answer depends on environment / browser )
<!-- prettier-ignore-start -->
```javascript
(function() {
 var a = 'initial';
  if(a) {
    function f() { console.log("1"); };
  } else {
    function f() { console.log("2"); };
  }
  f();
})();
```
<!-- prettier-ignore-end -->
---
output?
<!-- prettier-ignore-start -->
```javascript
(function() {
 var a = 0;
  f();
  if( a ) {
    function f() { console.log("1"); };
  } else {
    function f() { console.log("2"); };
  }
})();
```
<!-- prettier-ignore-end -->
---
What does the following code do? And why? ( quirks )
<!-- prettier-ignore-start -->
```javascript
falseStr = "false";
if(true){
  var falseStr;
  if(falseStr){
   console.log("false" == true);
   console.log("false" == false);
  }
}
```
<!-- prettier-ignore-end -->
---
how to check if something is object?
NB: asker should keep in mind:
 - typeof null => 'object'
 - `Object.create(null) instanseof Object => false`
 - `typeof function() {} => 'function'` , but it's still object

---
output?
<!-- prettier-ignore-start -->
```javascript
var a = (1,2,3);
console.log(a);
```
<!-- prettier-ignore-end -->
---
What will be the output?
<!-- prettier-ignore-start -->
```javascript
(function() {
   var a = b = 5;
})();
console.log(b);
```
<!-- prettier-ignore-end -->
---
output?
<!-- prettier-ignore-start -->
```javascript
var text = 'outside';
function logIt(){
    console.log(text);
    var text = 'inside';
};
logIt();
```
<!-- prettier-ignore-end -->
---
is it possible to have 
<!-- prettier-ignore-start -->
```javascript
(a == 1 && a == 2 && a == 3); // true 
```
<!-- prettier-ignore-end -->

by https://twitter.com/hugojmd/status/953763304958255105

<!-- prettier-ignore-start -->
```javascript
var a = {
  currentValue: 0,
  valueOf() {
     return this.currentValue += 1
  }
}
var eq = (a == 1 && a == 2 && a == 3);
console.log(eq); // awesome =)
```
<!-- prettier-ignore-end -->

---

what whould be the output?

<!-- prettier-ignore-start -->
```javascript
foo();

var foo = function() {
  console.log(false);
}

foo();

function foo() {
  console.log(true);
}

foo();
```
<!-- prettier-ignore-end -->
