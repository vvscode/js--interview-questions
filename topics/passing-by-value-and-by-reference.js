// What is the output?
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

// What is the output?
(function(a) {
  arguments[0] = 10;
  return a;
})(5);

// What is the output?
function Car(color) {
  this.color = color;
}
var lada = new Car('Black');
Car.prototype.currentGear = 1;
console.log(++lada.currentGear);
console.log(Car.prototype.currentGear);

// What is the output?
var User = function() {
};

User.prototype.attributes = {
  isAdmin: false
};

var admin = new User('Sam'),
  guest = new User('Bob');

admin.attributes.isAdmin = true;

alert(admin.attributes.isAdmin);
alert(guest.attributes.isAdmin);

// What is the output?
var obj = {
  a: 1
};
(function(obj) {
  obj = {
    a: 2
  };
})(obj);
console.log(obj.a);
