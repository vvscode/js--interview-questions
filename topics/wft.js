// The file about strange questions. But it still be usefull to discover logic 

// From https://habrahabr.ru/post/322568/ "Хитрые задачки на собеседовании JavaScript"

// what is g value?
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

// what is g value?
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

// what will be the output?
function b(b) {
  return this.b && b(b)
}
b(b.bind(b))

// what will be the output?
c = (c) => {
  return this.c && c(c)
}
c(c.bind(c))

// output? ( just remember about prefix / postfix increment )
var g = 0;
g = 1 && g++;
console.log(g);

// which one is correct ? ( about IIFE trick )
!function(){}()
function(){}()
true && function(){}()
(function(){})()
function(){}
!function(){}

// what will expression return?
var a = b = true, c = (a) => a;
(function a(a = c(b).a = c = () => a) { return a(); })()

// result?
var a = true;
(a = function () { return a })()

// what will be the output?
var v = 0;
try {
  throw v = (function(c) { throw v = function(a){ return v; } })();
} catch (e) {
  console.log (e()());
}
