// What is the output?
console.log(1);
setTimeout(function() {
  console.log(2);
}, 1000);
setTimeout(function() {
  console.log(3);
}, 0);
console.log(4);

// What is the output?
function say(a) {
  alert(a);
}
say(1);
setTimeout(say(2), 5000);
setTimeout(function() {
  say(3);
}, 1000);
setTimeout(say, 2000, 4);

// What's wrong? How fix?
var done = false;
$.ajax(url, function() { done = true });
while(!done) {
  someWaitingStuff();
}
