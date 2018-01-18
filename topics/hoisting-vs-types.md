# Hoisting and types

What is the output?
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
---
What is the output?
```javascript
var a = {};
var b = { key: 'b' };
var c = { key: 'c' };

a[b] = 123;
a[c] = 456;
console.log(a[b]);
```
---
What is the output?
```javascript
console.log("1" + 2);
console.log(2 + "1");
console.log(1 + 2 + 3 + 4 + "5");
```
What for use next contruction?
```javascript
function greetAll() {
  var args = Array.prototype.slice.call(arguments, 0);
}
```
---
What is the output?
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
---
What is the output?
```javascript
(function() {
  alert(inner);
  inner();
  function inner() {
    alert('inner');
  }
})();
```
What is the output?
```javascript
(function {
  alert(inner);
  inner();
  var inner = function() {
    alert('inner');
  }
})();
```
What is the output?
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
---
What is the output?
```javascript
(function() {
  var x = 1;

  function x() {};

  console.log(x);
})();
```
---
`number / undefined / function / Error` ?
```javascript
var f = function g(){ return 23; };
typeof g();
```
---
what is x ?
```javascript
var y = 1, x = y = typeof x;
x;
```
---
Output?
```javascript
var x = [typeof x, typeof y][1];
typeof typeof x;
```
---
Output?  Just be attentive
```javascript
(function(foo){
  return typeof foo.bar;
})({ foo: { bar: 1 } });
```
---
Output
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
---
result?
```javascript
new String('Hello') === 'Hello'
```
---
result?
```javascript
"This is a string" instanceof String;
```
---
output ?
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
---
output?
```javascript
var x = [typeof x, typeof y][1];
typeof typeof x;
```
---
output?
```javascript
(function f(){
  function f(){ return 1; }
  return f();
  function f(){ return 2; }
})();
```
---
result?
```javascript
function f(){ return f; }
new f() instanceof f;
```
---
output?
```javascript
var text = 'outside';
function logIt(){
    console.log(text);
    var text = 'inside';
};
logIt();
```
---
output? ( nb: answer depends on environment / browser )
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
---
output?
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
---
What does the following code do? And why? ( quirks )
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
---
how to check if something is object?
NB: asker should keep in mind:
 - typeof null => 'object'
 - `Object.create(null) instanseof Object => false`
 - `typeof function() {} => 'function'` , but it's still object

---
output?
```javascript
var a = (1,2,3);
console.log(a);
```
---
What will be the output?
```javascript
(function() {
   var a = b = 5;
})();
console.log(b);
```
---
output?
```javascript
var text = 'outside';
function logIt(){
    console.log(text);
    var text = 'inside';
};
logIt();
```
---
is it possible to have 
```javascript
(a == 1 && a == 2 && a == 3); // true 
```

by https://twitter.com/hugojmd/status/953763304958255105
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
