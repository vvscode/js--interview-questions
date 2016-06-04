// What will be the output?
function foo(x) {
console.log(arguments)
return x
}
foo(1, 2, 3, 4, 5)
// and
function foo(x) {
console.log(arguments)
return x
}(1, 2, 3, 4, 5)

// What will be the output
a = [1,2,3,4]
a[1.5] = 1.5
a // ?
