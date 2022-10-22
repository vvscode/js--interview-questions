# Inheritance and context

What is the output? Fix code

<!-- prettier-ignore-start -->
```javascript
var person = {
  name: "Sam",
  hello: function() {
    alert(this.name);
  }
};
var hello = person.hello;
hello(); // Make it to output "Sam"
```
<!-- prettier-ignore-end -->
---
What is the output?
<!-- prettier-ignore-start -->
```javascript
var fn = {};
function valueAccessor(value) {
  var accessor = function(newValue) {
    if(arguments.length === 0) {
      return value;
    }
    value = newValue;
  };
  accessor.__proto__ = fn;
  return accessor;
}
var a = valueAccessor(5);
fn.incrementValue = function() { this(this() + 1); };
a.incrementValue();
a();
```
<!-- prettier-ignore-end -->
---
Update code for conditions
<!-- prettier-ignore-start -->
```javascript
function A() {
  this.value = 1;
}
var B = function() {} ;
/* put your code here */
var b = new B;
b.value === undefined; // should be true
b instanceof A; // should be true
```
<!-- prettier-ignore-end -->
---
Explain the difference
<!-- prettier-ignore-start -->
```javascript
function User(name) {
  this.name = name;
  this.hello = function() {
    alert(this.name);
  }
}
// -- vs -- ( what is the difference ?)
function User(name) {
  this.name = name;
}
User.prototype.hello = function() {
  alert(this.name);
};
```
<!-- prettier-ignore-end -->
---
What is the output? Fix code
<!-- prettier-ignore-start -->
```javascript
Logger = function(logFn) {
  _logFn = logFn;
  this.log = function(message) {
    _logFn(new Date() + ": " + message);
  }
};
var logger = new Logger(console.log);
logger.log("Hi!");
logger.log("Wazzup?");
```
<!-- prettier-ignore-end -->

Explain difference between `.call/.apply/.bind`

---

Create `.bind` polyfill

---

Create `.newInstance` method which has behaviour like `.apply` for constructors

Examples: `new A(1,2,3)` should be equal to `A.newInstance([1,2,3])`

---

Describe what happens in next line ( and difference )

<!-- prettier-ignore-start -->
```javascript
function User(name) { this.name = name; }
var u1 = User('Bob');
var u2 = new User('Sam');
var u3 = User.call({}, 'Mike'); // <-- N.B.
```
<!-- prettier-ignore-end -->
---
Create singleton
<!-- prettier-ignore-start -->
```javascript
var getInstance = /* put your code here */;
var o1 = getInstance();
var o2 = getInstance();
o1 instanceof User; // true
o1 === o2; // true
```
<!-- prettier-ignore-end -->

modify example above

<!-- prettier-ignore-start -->
```javascript
var User = /* your code */
var u1 = new User(1);
var u2 = new User(2);
u1 === u2; // true
```
<!-- prettier-ignore-end -->
---
What does it do and how it works?
<!-- prettier-ignore-start -->
```javascript
function bind(method, context) {
    var args = Array.prototype.slice.call(arguments, 2);
    return function() {
        var a = args.concat(Array.prototype.slice.call(arguments, 0));
        return method.apply(context, a);
    }
}
```
<!-- prettier-ignore-end -->

How many ways do you know to check if something is Array (`.isArray` / `instanceof` / `Object.prototype.toString.call([])` etc.)

---

Output?

<!-- prettier-ignore-start -->
```javascript
 var foo = {
    bar: function() { return this.baz; },
    baz: 1
  };
  (function(){
    return typeof arguments[0]();
  })(foo.bar);
```
<!-- prettier-ignore-end -->
---
Output ?
<!-- prettier-ignore-start -->
```javascript
var foo = {
    bar: function(){ return this.baz; },
    baz: 1
  }
  typeof (f = foo.bar)();
```
<!-- prettier-ignore-end -->
---
With ( oldschool) `1 / 2 / undefined / Error` ?
<!-- prettier-ignore-start -->
```javascript
with (function(x, undefined){}) length;
```
<!-- prettier-ignore-end -->
---
Implement `Object.create` - like inheritance
* You can't use `Object.create` / `__proto__`*
* 
<!-- prettier-ignore-start -->
```javascript
var A = function() { };
var B = function() { };
var b = new B(); // A wasn't called
b instanceof A // true
B.prototype.addSome = 1;
A.prototype.addSome; // undefined
```
<!-- prettier-ignore-end -->
---
result?
<!-- prettier-ignore-start -->
```javascript
var x = 10;
var foo = {
  x: 20,
  bar: function () {
    var x = 30;
    return this.x;
  }
};
console.log(
  foo.bar(),
  (foo.bar)(),
  (foo.bar = foo.bar)(),
  (foo.bar, foo.bar)()
);
```
<!-- prettier-ignore-end -->
---
output ?
<!-- prettier-ignore-start -->
```javascript
function f(x, y) {
  x = 10;
  console.log(
    arguments[0],
    arguments[1]
  );
}
f();
```
<!-- prettier-ignore-end -->
---
Create “native” methods
Define a repeatify function on the String object. The function accepts an integer that specifies how many times the string has to be repeated. The function returns the string repeated the number of times specified. For example:
<!-- prettier-ignore-start -->
```javascript
console.log('hello'.repeatify(3)); // hellohellohello
```
<!-- prettier-ignore-end -->
---
difference in next methods? 
<!-- prettier-ignore-start -->
```javascript
(a instanceof Array)
// vs
(Array.isArray(a));
 ```
<!-- prettier-ignore-end -->

http://stackoverflow.com/questions/22289727/difference-between-using-array-isarray-and-instanceof-array

---

Implement function, which can't be used as constructor ( with `new` keyword )

---

Implement `applyConstructor(ClassFunction, arrayWithArguments)` function, which allows to do the same as
`new ClassFunction(...arrayWithArguments)`

Babel says that

<!-- prettier-ignore-start -->
```javascript
new (Function.prototype.bind.apply(ClassFunction, arrayWithArguments))();
```
<!-- prettier-ignore-end -->

one of the variants

Any other variants? tricky question to discuss subtle highlights about inheritance
