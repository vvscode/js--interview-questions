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

// Next code print '0,1,2,3,4,4,3,2,1,0'
// Modify only functions ( not loops ) to get output as '4,3,2,1,0,0,1,2,3,4'
var a = function(i) { console.log(i); };
var b = function(i) { console.log(i); };
for(var i = 0; i < 5; i++) {  a(i); }
for(var i = 4; i>=0; i--) { b(i); }
