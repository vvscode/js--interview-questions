# Complex

Spiral output for array

<!-- prettier-ignore-start -->
```javascript
var m = [
  [0,  1,  2,  3,  4],
  [5,  6,  7,  8,  9],
  [10, 11, 12, 13, 14],
  [15, 16, 17, 18, 19]
];

var spiral = function (m) {
 // Put your code here
};
```
<!-- prettier-ignore-end -->

Should be `[0, 1, 2, 3, 4, 9, 14, 19, 18, 17, 16, 15, 10, 5, 6, 7, 8, 13, 12, 11]`

---

Sort array with semver-rules

<!-- prettier-ignore-start -->
```javascript
var arr = [ "1.0.5", "2.5.0", "0.12.0", "1", "1.23.45", "1.4.50", "1.2.3.4.5.6.7"];

function semverSor() {
  // put your code here
}

semverSor(arr);
```
<!-- prettier-ignore-end -->

Like `[ "0.12.0", "1", "1.0.5", "1.2.3.4.5.6.7", "1.4.50", "1.23.45", "2.5.0" ]`

---

Implement deepClone ( withour recursive links and functions
Simpliest , suppose is JSON.parse(JSON.stringify(m)) but we need real code =)

---

Implement bind(func, context). Make polyfill .bind(context)

---

Check if string is anagramm ( start-to-end is the same as end-to-start)
Like `ololo`.
Option -- the same without spaces like `olo lo`
Option - the same in functional style

---

We have next stub
Fill blank methods to describe algorithms for servicing multistory building with your elevator.
You have only low-leve intarface (HardwareElevator) with three states - stoppes, move up, move down.
Every floor has two buttons up/down
Inside cabin there are only buttons with numbers

<!-- prettier-ignore-start -->
```javascript
DIRECTION_DOWN = -1
DIRECTION_NONE = 0
DIRECTION_UP = 1

function HardwareElevator(){};
HardwareElevator.prototype = {
    moveUp:function(){console.log('moving up');},
    moveDown:function(){console.log('moving down');},
    stopAndOpenDoors:function(){console.log('stopping and opening doors');},
    getCurrentFloor:function(){console.log('getting current floor');},
    getCurrentDirection:function(){console.log('getting current drection');}
}

function Elevator() {
    this.hw = new HardwareElevator();
    this.hw.addEventListener("doorsClosed", _bind(this.onDoorsClosed, this));
    this.hw.addEventListener("beforeFloor", _bind(this.onBeforeFloor, this));
}
Elevator.prototype = {
    onDoorsClosed: function(floor) {
      // put your code here
    },
    onBeforeFloor: function(floor, direction) {
      // put your code here
    },
    floorButtonPressed: function(floor, direction) {
      // put your code here
    },
    cabinButtonPressed: function(floor) {
      // put your code here
    }
}
```
<!-- prettier-ignore-end -->
---
Implement chain map-method which can work with async functions ( promises-based )
Like: 
<!-- prettier-ignore-start -->
```javascript
Chain([link1,link2,link3]).mapAsync(link => get(link)).mampAsync(page => printPage)
```
<!-- prettier-ignore-end -->
---
Write code which will output itself into console/document
---
We want to write calculations using functions and get the results. Let's have a look at some examples:
<!-- prettier-ignore-start -->
```javascript
seven(times(five())); // must return 35
four(plus(nine())); // must return 13
eight(minus(three())); // must return 5
six(dividedBy(two())); // must return 3
```
<!-- prettier-ignore-end -->

Requirements:

- There must be a function for each number from 0 ("zero") to 9 ("nine")
- There must be a function for each of the following mathematical operations: plus, minus, times, dividedBy (divided_by in Ruby)
- Each calculation consist of exactly one operation and two numbers
- The most outer function represents the left operand, the most inner function represents the right operand

---

Написать функцию котороя будет разворачивать буквы в словах предложения, но только лишь буквы цифры и специальные символы должны остаться на месте

```
<!-- prettier-ignore-end -->
// s1tar3t 2 hellow  ->  t1rat3s 2 wolleh
// s1ta$%r3t 2 hel^low  ->  t1ra$%t3s 2 wol^leh
// s1tar3t 2   low5  ->  t1rat3s 2   wol5
```

## <!-- prettier-ignore-end -->

Реализовать фукнционал, допускающий следующий код

<!-- prettier-ignore-start -->
```javascript
(3).add(5).multiply(2) // 16
```
<!-- prettier-ignore-end -->

Нужно реализовать следующие методы

- add
- subtract
- multiply
- divide
- square
- После должна появится возможность выстраивать команды в цепочку ( см пример выше )

---

Implement simple module system with injection system like in angular

<!-- prettier-ignore-start -->
```javascript
function($moduleName, $anotherModuleName){}
```
<!-- prettier-ignore-end -->

should get objects from `module('moduleName') / module(anotherModuleName)`

---

Output?

<!-- prettier-ignore-start -->
```javascript
var f = (function f(){ return "1"; }, function g(){ return 2; })();
typeof f;
```
<!-- prettier-ignore-end -->
---
Output?
<!-- prettier-ignore-start -->
```javascript
var text = 'outside';
function logIt(){
    console.log(text);
    var text = 'inside';
};
logIt();
```
<!-- prettier-ignore-end -->
---
Game where everyone win. Output?
<!-- prettier-ignore-start -->
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
<!-- prettier-ignore-end -->
---
Define a spacify function which takes a string as an argument, and returns the same string but with each character separated by a space
 - `spacify('hello world') // => 'h e l l o  w o r l d'`
 - `'hello world'.spacify() //  => 'h e l l o  w o r l d'`
---
Write a program that prints all the numbers from 1 to 100.  For multiples of 3, instead of the number, print "Fizz", for multiples of 5 print "Buzz". For numbers which are multiples of both 3 and 5, print "FizzBuzz".

Option: do it without conditional statements (if/switch/?:)
Option: do not use logical operators (&& / ||)
Option: do not use loops (for/do/while/etc)
---
Create lazy-evaluations POC
<!-- prettier-ignore-start -->
```javascript
var le = new LazyEval([1, 2, 3, 4, 5])
  .filter(i => i > 2)
  .map(i => i * 2);
le.value(); // [6, 8, 10]
```
<!-- prettier-ignore-end -->

_BUT!_ all evaluations should be done only after .value() call

---

Create .bind method for function without using .call/.apply (only trash, only hardcore)

---

Create compose function

<!-- prettier-ignore-start -->
```javascript
const compose = (f1, f2) => value => f1( f2(value) )
```
<!-- prettier-ignore-end -->

- list of functions can has any length
- for zero-length list it should return `() => undefined`
  `compose(fn, fn1, fn2, fn3)` ... etc

---

Implement `.map` using `.reduce` for iteration ( for arrays )

---

Fnd average age for male-users

<!-- prettier-ignore-start -->
```javascript
var users = {
  'Bob': { age: 24, isMale: true },
  'Sam': { age: 23, isMale: true },
  'Mag': { age: 54, isMale: false },
  'Ken': { age: 43, isMale: true },
  'Marta': { age: 34, isMale: false },
  'Duglas': { age: 27, isMale: true },
  'Martin': { age: 34, isMale: true },
};
```
<!-- prettier-ignore-end -->

---

**Challenge:** Implement a tic-tac-toe game (3x3)

**Requirements:**

1. program must be a pure JavaScript solution. not looking for a web application here
1. program must play a game for both players with no user interaction
1. program must display the game board after each player move
1. program must display the game winner, or 'draw' if not won

**Notes:**

1. program does not have to choose a player move intelligently
1. don't bother drawing lines for the game board
1. feel free to use underscore/lodash if you like
1. feel free to use es6/es2015 features if you like

Begin when ready, and remember to verbalize your design and implementation thoughts as you proceed.

---

About promises:

- Suppose findData is a function that takes a query object and returns a promise for the result of the query.
- Suppose also that someRandomArrayOfQueries is an array of query objects.

---

Explain what would be printed by the following code and why

<!-- prettier-ignore-start -->
```javascript
function runMultipleQueries(queries) {
 var results = [];
 queries.forEach(doQuery);
 return results;

 function doQuery(query) {
   findData(query)
   .then(results.push.bind(results));
 } 
}
function log(value) {
 console.log(value);
}
runMultipleQueries(someRandomArrayOfQueries).forEach(log);
```
<!-- prettier-ignore-end -->

---

Create code to pass test ( mocha, but it doesn't metter )

<!-- prettier-ignore-start -->
```javascript
describe('Step 5', function() {
  it('add(2,8)(5).value() => 15', function() {
    add(2,8)(5).value()
      .should.be.exactly(15).and.be.a.Number;
  });
  it('add(3, 3, 5)(4)(3, 2).value() => 20', function() {
    add(3, 3, 5)(4)(3, 2).value()
      .should.be.exactly(20).and.be.a.Number;
  });
});
```
<!-- prettier-ignore-end -->

---

Given two identical DOM trees (not the same one), and a node from one of them find the node in the other one.

---

What is the difference between these four promises?

<!-- prettier-ignore-start -->
```javascript
doSomething().then(function () {
  return doSomethingElse();
});

doSomething().then(function () {
  doSomethingElse();
});

doSomething().then(doSomethingElse());

doSomething().then(doSomethingElse);
```
<!-- prettier-ignore-end -->

---

Implement function to remove duplication from list (array)

---

You have a function `rand7()` that generates a random integer from 1 to 7.
Use it to write a function `rand5()` that generates a random integer from 1 to 5.

- rand7() returns each integer with equal probability.
- rand5() must also return each integer with equal probability.

---

For next markup

<!-- prettier-ignore-start -->
```html
<div id="selectio">Select me!</div>
```
<!-- prettier-ignore-end -->

create js code ( via native js ) which on click at div will select all text inside
note - just check range/selection api

---

A polindromic number reads the same both ways.
The largest polindrome made from the product of two 2-digit numbers is 9009 = 91\*99.
Find the largest polindrom made from the product of two 3-digit numbers.

---

Given an input string, you should check if the string contains the same amount of 'x' and 'o'. The case doesn't matter - if the amount is equal, return a true otherwise return false.

<!-- prettier-ignore-start -->
```javascript
describe('sameXOAmount()', () => {
   it('should return `true` if number of `X` and `O` is equal', () => {
     expect(sameXOAmount('xXoO')).toEqual(true);
     expect(sameXOAmount('aAxXXbBoOo')).toEqual(true);
     expect(sameXOAmount('abc')).toEqual(true);
    });
   it('should return `false` if number of `X` and `O` is not equal', () => {
    expect(sameXOAmount('OaAxXbBoO')).toEqual(false);
    expect(sameXOAmount('xgXoXsdxOxz')).toEqual(false);
    expect(sameXOAmount('aaAmmMxMM')).toEqual(false);
   });
 });
```
<!-- prettier-ignore-end -->

---

Given an array of numbers, you should find the number which occurs an odd number of times within the array.
You can assume that there is always just one number with an odd amount.
Furthermore the array is never undefined and contains only numbers.

<!-- prettier-ignore-start -->
```javascript
describe('findOddAmount()', () => {
  it('should return the number which occurs with an odd frequency', () => {
     expect(findOddAmount([1, 2, 2, 3, 3])).toEqual(1);
     expect(findOddAmount([8, 8, 7, 7, 7])).toEqual(7);
     expect(findOddAmount([10, 3, 3, 10, 6, 10, 6, 1, 1])).toEqual(10);
   });
});
```
<!-- prettier-ignore-end -->

---

Create `uniq` function, witch takes a list and returns only uniq values from list. Like in lodash/underscore

---

Let imaging sequence `1010010001000010000010000001...` `(k(1->oo) "1{0xk}"`. Create function which takes number of symbols as an argument and returns n-first symbols of the sequence

---

Create `.bind` polyfill without using `.call`/`.apply` ( really tricky task, but it gives food for dicussion )

---

Based on list of chars, find the longes polindrome ( string equal in both directions: rtl = ltr ) like ['a', `'b', 'c', 'a', 'b', 'd'] => 'abcba' / 'abdba'`

---

Implement shuffle(list) function which suffle list ( randomize list elements )

---

Create Promise implementation

NB: In fact it was pair programmng session but it could be meditative task, wich takes as much time as you have. It covers a lot of topics - async / flow / thenable-interface / functions / exceptions etc.

---

<!-- prettier-ignore-start -->
```javascript
ar arr = [1,2,42,3];
var brr = [];

for (var i = 0; i < arr.length; i++) {
  if (arr[i] === 42) {
    // fill it as short as possible
    // to get brr equal to [1,2,3]
  }

  brr.push(arr[i]);
}
```
<!-- prettier-ignore-end -->

---

Write a `matchSum(list, targetValue)` function. Which takes list of numbers and target sum and returns pair of elements which gives target sum.

```
<!-- prettier-ignore-end -->
matchSum([4, 7, 1, 8, 9], 11); // [4, 7]
```

<!-- prettier-ignore-end -->

- what if you need return all pairs?
- could you implement linear complexity ?

---

Write your out `trim()` function (obviously - do not use `String.prototype.trim`). Extended: create `trim('zxc')` function which takes list of symbols to trim.

---

Are you familiar with common.js modules? When inside module we are able to use `module` / `exports` ? _( what's the difference in usage `module.exports` / `exports` ?) )_ Please implement your own `require` function with the same functionality, as original.

---

**Light version**: Write a function checking that the given string is valid. We consider a string
to be valid if all the characters of the string have exactly the same frequency.

Examples:

- `aabbcc` is a valid string
- `aabbccc` is an invalid string

**Extended version**: Check if the string is valid as it is (same condition as before) or if **one** character
at one position can be removed from the string so it will become valid.

Examples:

- `aabbcc` -> **true**
- `aabbcccc` -> **false**
- `aabbccf` -> **true**
- `aaabbbcccf` -> **true**
- `aabbccc` -> **true**
- `abcddff` -> **false**
- `abcdefffff` -> **false**
- `aabbccddd` -> **true**

---

Again about brackets.

Easy part:

- '(', '{', '[' are called "openers".
- ')', '}', ']' are called "closers".
  Write an efficient function that tells us whether input string's openers
  and closers are properly nested.

Examples:

```
<!-- prettier-ignore-end -->
"{ [ ] ( ) }" -> true
"{ [ ( ] ) }" -> false
"{ [ }" -> false
"class Example { public do() { return; } }" -> true
"class Example { public do( { return; } }" -> false
```

<!-- prettier-ignore-end -->

Extra: handle also next types of brackes

```
<!-- prettier-ignore-end -->
<>
''
||
```

<!-- prettier-ignore-end -->

There might be multiple ways how to interpret lines `''''` (`'('')'` or `('')('')`) - in my concrete situation we agreed that we're closing bracket everytime we can. It influences to the cases like `'"'||'"'` which we interpret like `'("('(||)')")'`

Tests we agreed during an interview:

<!-- prettier-ignore-start -->
```javascript
test('', true);
test('some', true);
test('(', false);
test('()', true);
test('()[', false);
test('()[]', true);
test(')', false);
test('([)]', false);
test('((', false);
test('())', false);

test('class Example { public do() { return; } }', true);
test('class Example { public do( { return; } }', false);

test("('['", false); 
test("(')'", false);
test('("("[]")")', true);
test("(')'", false);
test("'||'''", true)
```
<!-- prettier-ignore-end -->

---

Your task is to embed a third-party video player library called SimplePlayer
into your application.
Here is an extract from the SimplePlayer API documentation:

```
<!-- prettier-ignore-end -->
CLASS:
   SimplePlayer

CONSTRUCTOR:
   new SimplePlayer(manifestUri)
       where manifestUri is the URI of video stream manifest

METHODS:
   play()
       initiate playback of video stream
   pause()
       pause playback of video stream
   getPlaybackStatus()
       get the playback status of the current video stream, returns a
       one of the following strings: "PLAYING", "STOPPED" or "BUFFERING"
   addPlaybackStatusListener(callback)
       allows a callback to be set that is executed whenever
       the playback status changes. The playback status ("PLAYING", "STOPPED"
       or "BUFFERING") is passed to the callback as the only argument.
```

<!-- prettier-ignore-end -->

QUESTIONS:

1.  Create a basic test application in your chosen programming language that
    performs the following functions:

    a) creates an instance of SimplePlayer

    b) invokes the play command

    c) logs the playback status to the console

2.  Extend the code you have written with a "bufferMonitor" function which prints
    "too much buffering" to the console when the player is buffering continuously
    for more than one minute
3.  If necessary refactor your code so that it is possible to unit test the
    bufferMonitor function (without mocking of setTimeout via testing frameworks and using of fake timers), then write appropriate unit tests.

---

Given a string S consisting of lowercase English characters determine if you can make it a palindrome by removing at most 1 character.

```
<!-- prettier-ignore-end -->
tacocats -> tacocat
racercar -> racecar or racrcar
kbayak -> kayak
acbccba -> abccba
abccbca -> abccba
```

<!-- prettier-ignore-end -->
