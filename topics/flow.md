# Flow

What is the output?

<!-- prettier-ignore-start -->
```javascript
console.log(1);
setTimeout(function() {
  console.log(2);
}, 1000);
setTimeout(function() {
  console.log(3);
}, 0);
console.log(4);
```
<!-- prettier-ignore-end -->
---
What is the output?
<!-- prettier-ignore-start -->
```javascript
function say(a) {
  alert(a);
}
say(1);
setTimeout(say(2), 5000);
setTimeout(function() {
  say(3);
}, 1000);
setTimeout(say, 2000, 4);
```
<!-- prettier-ignore-end -->
---
What's wrong? How fix?
<!-- prettier-ignore-start -->
```javascript
var done = false;
$.ajax(url, function() {
  done = true;
});
while (!done) {
  someWaitingStuff();
}
```
<!-- prettier-ignore-end -->
---
Next code print `0,1,2,3,4,4,3,2,1,0`
Modify only functions ( not loops ) to get output as `4,3,2,1,0,0,1,2,3,4`
<!-- prettier-ignore-start -->
```javascript
var a = function(i) {
  console.log(i);
};
var b = function(i) {
  console.log(i);
};
for (var i = 0; i < 5; i++) {
  a(i);
}
for (var i = 4; i >= 0; i--) {
  b(i);
}
```
<!-- prettier-ignore-end -->
---
The following recursive code will cause a stack overflow if the array list is too large.
How can you fix this and still retain the recursive pattern?
<!-- prettier-ignore-start -->
```javascript
var list = readHugeList();
var nextListItem = function() {
  var item = list.pop();
  if (item) {
    // process the list item...
    nextListItem();
  }
};
```
<!-- prettier-ignore-end -->
---
What is the output
<!-- prettier-ignore-start -->
```javascript
(function() {
  console.log(1);
  setTimeout(() => console.log(2), 1000);
  setTimeout(() => console.log(3), 0);
  Promise.resolve(true).then(() => console.log(4));
  console.log(5);
})();
```
<!-- prettier-ignore-end -->
---
Create fetcher function, which takes url, and number of tryies to re-fetch data in case of error.
You can use any load-interface ( fetch/xhr/... )

Bonus: Implement in both styles - recursion /  non-recursion

---
What is the output
<!-- prettier-ignore-start -->
```javascript
try {
  setTimeout(function() {
    throw new Error();
  }, 1000);
} catch (e) {
  alert( e);
}
```
<!-- prettier-ignore-end -->

---

Create `promisify` function which takes node-style (error-first) function and converts it into promise-based function.
Instead of calling callback with error, data it return promise which resolves/rejectes. It worth to check if function save context for original function (`this`)

---

Create function for asyn serial list processing. Takes list and callback `(element, index, list, doneCb)`. Returns promise wich resolved with results. Add callbacks should be called one by one.

<!-- prettier-ignore-start -->
```javascript
serialProcess([1,2,3,4,5], (el, index, list, done) => {
  console.log(`${el} start`);
  setTimeout(() => {
    console.log(`${el} end`);
    done(el*el);
  }, el*100);
}).then((list) => console.log(list)); // [1,4,9,16,25]
```
<!-- prettier-ignore-end -->

in callback style

<!-- prettier-ignore-start -->
```javascript
serialProcess(
  [1,2,3,4,5], 
  (el, index, list, done) => {
    console.log(`${el} start`);
    setTimeout(() => {
      console.log(`${el} end`);
      done(el*el);
    }, el*100);
  },
  (list) => console.log(list)
); // [1,4,9,16,25]
```
<!-- prettier-ignore-end -->
