# Quirks

What will be the output?

<!-- prettier-ignore-start -->
```javascript
function foo(x) {
console.log(arguments)
return x
}
foo(1, 2, 3, 4, 5)
```
<!-- prettier-ignore-end -->

and

<!-- prettier-ignore-start -->
```javascript
function foo(x) {
console.log(arguments)
return x
}(1, 2, 3, 4, 5)
```
<!-- prettier-ignore-end -->
---
What will be the output
<!-- prettier-ignore-start -->
```javascript
a = [1,2,3,4]
a[1.5] = 1.5
a // ?
```
<!-- prettier-ignore-end -->
---
What will be the output
<!-- prettier-ignore-start -->
```javascript
function foo(){console.log("hello")}
foo.call.call.call.apply(function bar(x) {console.log(x)}, [this,"world"])
```
<!-- prettier-ignore-end -->

What will be the output

<!-- prettier-ignore-start -->
```javascript
console.log("1" + 2);
console.log(2 + "1");
console.log(1 + 2 + 3 + 4 + "5"); //<-- nb
```
<!-- prettier-ignore-end -->
---
Make it true
<!-- prettier-ignore-start -->
```javascript
var a;
/* put your code here */
a !== a; // should be true
```
<!-- prettier-ignore-end -->

What will be the output

<!-- prettier-ignore-start -->
```javascript
var scores = [98, 74,85, 77, 93,100,89];
var total = 0;
for (var score in scores) { 
  total += score;
} 
var mean = total / scores.length;
console.log(mean); //?
```
<!-- prettier-ignore-end -->
---
What will be the output
<!-- prettier-ignore-start -->
```javascript
[2, 3, -1, -6, 0, -108, 42, 10].sort();
```
<!-- prettier-ignore-end -->

What is the difference between 0 / -0 ?

---

What will be the output

<!-- prettier-ignore-start -->
```javascript
var y = 1;
if (function f(){}) {
  y += typeof f;
}
console.log(y);
```
<!-- prettier-ignore-end -->
---
What will be the output
<!-- prettier-ignore-start -->
```javascript
var foo = function bar(){ return 12; };
typeof bar();  
```
<!-- prettier-ignore-end -->
---
What will be the output
<!-- prettier-ignore-start -->
```javascript
var a={},
    b={key:'b'},
    c={key:'c'};

a[b]=123;
a[c]=456;
console.log(a[b]);
```
<!-- prettier-ignore-end -->
---
What will be the output? 
<!-- prettier-ignore-start -->
```javascript
['11','11','11','11'].map(parseInt)
```
<!-- prettier-ignore-end -->
---
what will display alert?
<!-- prettier-ignore-start -->
```javascript
function aaa() {
    return
    {
        test: 1
    };
}
alert(typeof aaa());
```
<!-- prettier-ignore-end -->

What is alerted?

<!-- prettier-ignore-start -->
```javascript
function bar() {
    return foo;
    foo = 10;
    function foo() {}
    var foo = '11';
}
alert(typeof bar());
```
<!-- prettier-ignore-end -->
---
Output?
<!-- prettier-ignore-start -->
```javascript
console.log("1" - - "1")
```
<!-- prettier-ignore-end -->
---
what is the output?
<!-- prettier-ignore-start -->
```javascript
var x = 3;
var foo = {
    x: 2,
    baz: {
        x: 1,
        bar: function() {
            return this.x;
        }
    }
}
var go = foo.baz.bar;
alert(go());
alert(foo.baz.bar());
```
<!-- prettier-ignore-end -->
---
output?
<!-- prettier-ignore-start -->
```javascript
var myArr = ['foo', 'bar', 'baz'];
myArr.length = 0;
myArr.push('bin');
console.log(myArr);
```
<!-- prettier-ignore-end -->
---
Output?
<!-- prettier-ignore-start -->
```javascript
var x = 0;
function foo() {
    x++;
    this.x = x;
    return foo;
}
var bar = new new foo;
console.log(bar.x);
```
<!-- prettier-ignore-end -->
---
result?
<!-- prettier-ignore-start -->
```javascript
var bar = 1,
    foo = {};
foo: {
    bar: 2;
    baz: ++bar;
};
foo.baz + foo.bar + bar;
```
<!-- prettier-ignore-end -->
---
output?
<!-- prettier-ignore-start -->
```javascript
var myArr = ['foo', 'bar', 'baz'];
myArr[2];
console.log('2' in myArr);
```
<!-- prettier-ignore-end -->

output?

<!-- prettier-ignore-start -->
```javascript
function foo(a, b) {
    arguments[1] = 2;
    alert(b);
}
foo(1);
```
<!-- prettier-ignore-end -->
---
What value is alerted?
<!-- prettier-ignore-start -->
```javascript
function foo(){}
delete foo.length;
alert(typeof foo.length);
```
<!-- prettier-ignore-end -->
---
output ? 
<!-- prettier-ignore-start -->
```javascript
var f = function g(){ return 23; };
typeof g();
```
<!-- prettier-ignore-end -->
---
output?
<!-- prettier-ignore-start -->
```javascript
var f = (function f(){ return "1"; }, function g(){ return 2; })();
typeof f;
```
<!-- prettier-ignore-end -->
---
output ?
<!-- prettier-ignore-start -->
```javascript
var a = 1,
    b = function a(x) {
        x && a(--x);
    };
alert(a);
```
<!-- prettier-ignore-end -->
---
output?
<!-- prettier-ignore-start -->
```javascript
function a() {
    alert(this);
}
a.call(null);
```
<!-- prettier-ignore-end -->
---
result?
<!-- prettier-ignore-start -->
```javascript
var foo = bar ? bar : 0;
```
<!-- prettier-ignore-end -->
---
How to empty an array in JavaScript ?
<!-- prettier-ignore-start -->
```javascript
var arrayList =  ['a','b','c','d','e','f'];
// how many ways? compare them
```
<!-- prettier-ignore-end -->
---
result? =)
<!-- prettier-ignore-start -->
```javascript
var a = (1,5 - 1) * 2
```
<!-- prettier-ignore-end -->
---
output? 
<!-- prettier-ignore-start -->
```javascript
// http://stackoverflow.com/questions/39277394/why-settimeout-calls-make-different-result
setTimeout(function() {
  setTimeout(function() {
    console.log('foo');
  }, 50);
}, 100);
setTimeout(function() {
  setTimeout(function() {
    console.log('baz');
  }, 100);
}, 50);
```
<!-- prettier-ignore-end -->
---
result?
<!-- prettier-ignore-start -->
```javascript
5 > 3 > 2
```
<!-- prettier-ignore-end -->
---
what is logged in the console?
<!-- prettier-ignore-start -->
```javascript
var a;
if (a = (1+1==2)) {
    console.log(a);
} else {
    console.log('false');
}
```
<!-- prettier-ignore-end -->
---
are next expressions equal ? what's the result for both?
<!-- prettier-ignore-start -->
```javascript
1 << 33
(1 << 31) << 2
```
<!-- prettier-ignore-end -->

---

What will be the output

<!-- prettier-ignore-start -->
```javascript
let y = 1;
if (function F(){}) {
  y += typeof F;
}
console.log(y);
```
<!-- prettier-ignore-end -->
