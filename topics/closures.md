# Closures

What is the output? ( How make it correct )
```javascript
for (var i = 0; i < 5; i++) {
  setTimeout(function() {
    console.log(i);
  }, 1000);
}
```
---
What is the output?
```javascript
var func = [];
for (var i = 0; i < 5; i++) {
  func[i] = function() {
    console.log(i);
  };
}
func[3]();
```
---
What is the output?
```javascript
(function() {
  var a = b = 5;
})();
console.log(b);
```
---
Create code for next conditions
```javascript
function calculate() {/* put your code here */}
calculate('+')(1)(2); // 3
calculate('*')(2)(3); // 6
```
---
Create code for next conditions
```javascript
var sum = function() { /* put your code here */};
var s = sum();
alert(s); // 0
alert(s(1)); // 1
alert(s(1)(2)); //3
alert(s(3)(4)(5)); // 12
```

lighter version might use `sum(1)(2)()` with empty `()` at the end
---
What is the output?
```javascript
(function(x) {
    return (function(y) {
        console.log(x);
    })(2)
})(1);
```
---
What do next code do?
```html
<button id="btn-0">Button 1!</button>
<button id="btn-1">Button 2!</button>
<button id="btn-2">Button 3!</button>
<script type="text/javascript">
    var prizes = ['A Unicorn!', 'A Hug!', 'Fresh Laundry!'];
    for (var btnNum = 0; btnNum < prizes.length; btnNum++) {
        // for each of our buttons, when the user clicks it...
        document.getElementById('btn-' + btnNum).onclick = function() {
            // tell her what she's won!
            alert(prizes[btnNum]);
        };
    }
</script>
```
---
what output will be?
```javascript
const fn = () => {
 let a = 1;
 return () => {
   a++;
   return a;
 }
};
const fnRes = fn();
alert(fnRes());
alert(fnRes());

const fnRes2 = fn();
alert(fnRes2());
alert(fnRes2());
```
---

```javascript
/*
- Do you understand the closure?
- Yes!
- Write a function, that does this next:
*/
const func = (a, b, c, d, e) => a + b + c + d + e;

const hof = yourFunction(func);

console.log(hof(1, 2, 3, 4, 5)); // 15
console.log(hof(2, 3, 4)(5, 6)); // 20
console.log(hof(3, 4)(5, 6)(7)); // 25
console.log(hof(4, 5)(6)(7, 8)); // 30
console.log(hof(5)(6)(7)(8)(9)); // 35
```

---

Write a function that takes any function a return the same function with caching feature

```javascript
const add = (a, b) => a + b;

const modifiedAdd = your_function(add);

modifiedAdd(1,2) /* will calculate 1 + 2 */
modifiedAdd(5,6) /* will calculate 5 + 6 */

modifiedAdd(1,2) /* already called this function with (1,2) arguments so it will not calculate again for 1 and 2, function will directly return answer from the cache i.e. 3.
