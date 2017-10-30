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
