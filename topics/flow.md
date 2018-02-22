# Flow

What is the output?
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
---
What is the output?
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
---
What's wrong? How fix?
```javascript
var done = false;
$.ajax(url, function() {
  done = true;
});
while (!done) {
  someWaitingStuff();
}
```
---
Next code print `0,1,2,3,4,4,3,2,1,0`
Modify only functions ( not loops ) to get output as `4,3,2,1,0,0,1,2,3,4`
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
---
The following recursive code will cause a stack overflow if the array list is too large.
How can you fix this and still retain the recursive pattern?
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
---
What is the output
```javascript
(function() {
  console.log(1);
  setTimeout(() => console.log(2), 1000);
  setTimeout(() => console.log(3), 0);
  Promise.resolve(true).then(() => console.log(4));
  console.log(5);
})();
```
---
Create fetcher function, which takes url, and number of tryies to re-fetch data in case of error.
You can use any load-interface ( fetch/xhr/... )

Bonus: Implement in both styles - recursion /  non-recursion

---
What is the output
```javascript
try {
  setTimeout(function() {
    throw new Error();
  }, 1000);
} catch (e) {
  alert( e);
}
```

Create `promisify` function which takes node-style (error-first) function and converts it into promise-based function. 
Instead of calling callback with error, data it return promise which resolves/rejectes. It worth to check if function save context for original function (`this`)
