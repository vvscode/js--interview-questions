// Spiral output for array
var m = [
  [0,  1,  2,  3,  4],
  [5,  6,  7,  8,  9],
  [10, 11, 12, 13, 14],
  [15, 16, 17, 18, 19]
];

var spiral = function (m) {
 // Put your code here
}; // Should be [0, 1, 2, 3, 4, 9, 14, 19, 18, 17, 16, 15, 10, 5, 6, 7, 8, 13, 12, 11]


// Sort array with semver-rules
var arr = [ "1.0.5", "2.5.0", "0.12.0", "1", "1.23.45", "1.4.50", "1.2.3.4.5.6.7"];

function semverSor() {
  // put your code here
}

semverSor(arr); // Like [ "0.12", "1.0.5", "1.2.3.4.5.6.7", "1.23.45", "1.4.50", "2.5.0" ]

// Implement deepClone ( withour recursive links and functions
// simpliest , suppose is JSON.parse(JSON.stringify(m)) but we need real code =)

// Implement bind(func, context). Make polyfill .bind(context)

// Check if string is anagramm ( start-to-end is the same as end-to-start)
// Like 'ololo'. 
// Variant -- the same without spaces like 'olo lo'
// Variant - the same in functional style

// We have next stub
// Fill blank methods to describe algorithms for servicing multistory building with your elevator
// You have only low-leve intarface (HardwareElevator) with three states - stoppes, move up, move down
// Every floor has two buttons up/down
// Inside cabin there are only buttons with numbers
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

// Implement chain map-method which can work with async functions ( promises-based )
// Like: Chain([link1,link2,link3]).mapAsync(link => get(link)).mampAsync(page => printPage)

// Write code which will output itself into console/document

//We want to write calculations using functions and get the results. Let's have a look at some examples:
// seven(times(five())); // must return 35
// four(plus(nine())); // must return 13
// eight(minus(three())); // must return 5
// six(dividedBy(two())); // must return 3
//Requirements:
//There must be a function for each number from 0 ("zero") to 9 ("nine")
//There must be a function for each of the following mathematical operations: plus, minus, times, dividedBy (divided_by in Ruby)
//Each calculation consist of exactly one operation and two numbers
//The most outer function represents the left operand, the most inner function represents the right operand

// Написать функцию котороя будет разворачивать буквы в словах предложения, но только лишь буквы
// цифры и специальные символы должны остаться на месте
// s1tar3t 2 hellow  ->  t1rat3s 2 wolleh
// s1ta$%r3t 2 hel^low  ->  t1ra$%t3s 2 wol^leh
// s1tar3t 2   low5  ->  t1rat3s 2   wol5


// Реализовать фукнционал, допускающий следующий код
// (3).add(5).multiply(2) // 16
// Нужно реализовать следующие методы
// add
// subtract
// multiply
// divide
// square
// После должна появится возможность выстраивать команды в цепочку ( см пример выше )


// implement simple module system with injection system like in angular
// function($moduleName, $anotherModuleName){} should get objects from
// module('moduleName') / module(anotherModuleName)

// Output?
var f = (function f(){ return "1"; }, function g(){ return 2; })();
typeof f;

// Output?
var text = 'outside';
function logIt(){
    console.log(text);
    var text = 'inside';
};
logIt();
