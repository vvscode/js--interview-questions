// https://github.com/burymm/test-parallel
function Parallel(options) {
    var jobs = [],
        jobsCount = 0,
        doneCallback,
        index = 0,
        results = [];

    function registerJob(callback) {
        jobs.push({
            callBack: callback,
            name: callback.name
        });
    }

    function runJob () {
        if (jobs.length > index && jobsCount < options.paralelJob) {
            jobs[index].callBack(jobDone);
            index += 1;
            jobsCount += 1;
        }
    }

    function registerDone (callBack) {
        doneCallback = callBack;
    }

    function jobDone (arg) {
        results[getJobIndex(arg)] = arg;
        jobsCount -= 1;
        if (jobs.length === index && jobsCount === 0) {
            doneCallback(results);
        } else {
            runJob();
        }
    }

    function getJobIndex (name) {
        return jobs.map(function (item) {
            return item.name;
        }).indexOf(name);
    }

    function job (callback) {
        registerJob(callback);
        runJob();
        return this;
    }

    function done (callBack) {
        registerDone(callBack);
    }

    return {
        job: job,
        done: done
    }
}

function testParallel() {
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
}

testParallel();