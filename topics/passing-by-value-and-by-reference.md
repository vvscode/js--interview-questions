# Passing by value and by reference

What is the output?

<!-- prettier-ignore-start -->
```javascript
var myObject = {
  price: 20.99,
  get_price: function() {
    return this.price;
  }
};
var customObject = Object.create(myObject);
customObject.price = 19.99;
delete customObject.price;
console.log(customObject.get_price());
```
<!-- prettier-ignore-end -->
---
What is the output?
<!-- prettier-ignore-start -->
```javascript
(function(a) {
  arguments[0] = 10;
  return a;
})(5);
```
<!-- prettier-ignore-end -->
---
What is the output?
<!-- prettier-ignore-start -->
```javascript
function Car(color) {
  this.color = color;
}
var lada = new Car("Black");
Car.prototype.currentGear = 1;
console.log(++lada.currentGear);
console.log(Car.prototype.currentGear);
```
<!-- prettier-ignore-end -->
---
What is the output?
<!-- prettier-ignore-start -->
```javascript
var User = function() {};

User.prototype.attributes = {
  isAdmin: false
};

var admin = new User("Sam"),
  guest = new User("Bob");

admin.attributes.isAdmin = true;

alert(admin.attributes.isAdmin);
alert(guest.attributes.isAdmin);
```
<!-- prettier-ignore-end -->
---

What is the output?
<!-- prettier-ignore-start -->
```javascript
var obj = {
  a: 1
};
(function(obj) {
  obj = {
    a: 2
  };
})(obj);
console.log(obj.a);
```
<!-- prettier-ignore-end -->
---
What is the value of foo.x?
<!-- prettier-ignore-start -->
```javascript
var foo = { n: 1 };
var bar = foo;
foo.x = foo = { n: 2 };
```
<!-- prettier-ignore-end -->
---
how to return result for async operation in sync style?
like `.getData()` - should return data synchroniously, but data get in async by ajax. let's discuss workarounds

---
About prototype inheritance / passing by reference - What is the output?
<!-- prettier-ignore-start -->
```javascript
function Person(name) {
  if (name) this.options.name = name;
}

Person.prototype.options = {
  name: "Default name"
};

var foo = new Person("foo");
var bar = new Person("bar");

console.log(foo.options.name);
console.log(bar.options.name);
```
<!-- prettier-ignore-end -->

---

what would be the output ?

<!-- prettier-ignore-start -->
```javascript
var a = {};

(function b ( a ) {
    a.a = 10;
    a = null;
})( a );

console.log(a);
```
<!-- prettier-ignore-end -->
