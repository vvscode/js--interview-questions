// Original task

//implement missing "Parallel" please
//try to do so with a minimal amount of code
 
var runner = new Parallel({
    paralelJob: 2
});
 
runner.job(step1)
    .job(step2)
    .job(step3)
    .job(step4)
    .done(onDone);
 
function step1(done) {
    console.log('step1');
    setTimeout(done, 100, 'step1');
}
 
function step2(done) {
    console.log('step2');
    setTimeout(done, 10, 'step2');
}
 
function step3(done) {
    console.log('step3');
    setTimeout(done, 150, 'step3');
}
 
function step4(done) {
    console.log('step4');
    setTimeout(done, 50, 'step4');
}
 
function onDone(results) {
    console.assert(Array.isArray(results), 'expect result to be array');
    console.assert(results[0] === 'step1', 'Wrong answer 1');
    console.assert(results[1] === 'step2', 'Wrong answer 2');
    console.assert(results[2] === 'step3', 'Wrong answer 3');
    console.assert(results[3] === 'step4', 'Wrong answer 4');
}
