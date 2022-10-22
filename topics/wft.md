# WTF

The file about strange questions. But it still be usefull to discover logic

---

### From ["Хитрые задачки на собеседовании JavaScript"](https://habrahabr.ru/post/322568/)

what is g value?

<!-- prettier-ignore-start -->
```javascript
f = g = 0;
(function () {
  try {
    f = function() {
      return f();
    };
    f();
  } catch (e) {
    return g++ && f();
  } finally {
    return ++g;
  }
  function f() { g += 5; return 0; }
}) ();
```
<!-- prettier-ignore-end -->

---

what is g value?

<!-- prettier-ignore-start -->
```javascript
f = g = 0;
(function () {
  try {
    f = function() {
      return f();
    } && f();
  } catch (e) {
    return g++ && f();
  } finally {
    return ++g;
  }
  function f() { g += 5; return 0; }
}) ();
```
<!-- prettier-ignore-end -->

---

what will be the output?

<!-- prettier-ignore-start -->
```javascript
function b(b) {
  return this.b && b(b)
}
b(b.bind(b))
```
<!-- prettier-ignore-end -->

---

what will be the output?

<!-- prettier-ignore-start -->
```javascript
c = (c) => {
  return this.c && c(c)
}
c(c.bind(c))
```
<!-- prettier-ignore-end -->

---

output? ( just remember about prefix / postfix increment )

<!-- prettier-ignore-start -->
```javascript
var g = 0;
g = 1 && g++;
console.log(g);
```
<!-- prettier-ignore-end -->

which one is correct ? ( about IIFE trick )

<!-- prettier-ignore-start -->
```javascript
!function(){}()
function(){}()
true && function(){}()
(function(){})()
function(){}
!function(){}
```
<!-- prettier-ignore-end -->

---

what will expression return?

<!-- prettier-ignore-start -->
```javascript
var a = b = true, c = (a) => a;
(function a(a = c(b).a = c = () => a) { return a(); })()
```
<!-- prettier-ignore-end -->

---

result?

<!-- prettier-ignore-start -->
```javascript
var a = true;
(a = function () { return a })()
```
<!-- prettier-ignore-end -->

---

what will be the output?

<!-- prettier-ignore-start -->
```javascript
var v = 0;
try {
  throw v = (function(c) { throw v = function(a){ return v; } })();
} catch (e) {
  console.log (e()());
}
```
<!-- prettier-ignore-end -->
