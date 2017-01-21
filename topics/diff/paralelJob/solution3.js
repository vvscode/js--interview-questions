// https://github.com/u-can-miracle/paralel
// Feedback is unknown

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
	console.log('results: ', results);
	console.assert(Array.isArray(results), 'expect result to be array');
	console.assert(results[0] === 'step1', 'Wrong answer 1');
	console.assert(results[1] === 'step2', 'Wrong answer 2');
	console.assert(results[2] === 'step3', 'Wrong answer 3');
	console.assert(results[3] === 'step4', 'Wrong answer 4');
}

function Parallel(options){
	var self = this;
	var defaultOptions = {
		paralelJob: 1
	};
	var options = options || defaultOptions;

	this.results = [];
	this.asyncInProccess= 0;
};

Parallel.prototype.job = function(fn){
	var self = this;
	var fnName = fn.name;
	var completeBindWrapper = self.complete.bind(self);

	this.results.push(fnName);
	self.asyncInProccess++;
	fn.apply(self, [completeBindWrapper]);

	return self;
};

Parallel.prototype.complete = function(){
	var self = this;

	self.asyncInProccess--;
	// self.results.push(arguments[0]);
};

Parallel.prototype.done = function(fn){
	var self = this;
	var timerId = setInterval(function(){
		if(self.asyncInProccess === 0){
			fn.apply(self, [self.results]);
			clearInterval(timerId);
		}
	}, 10);
};

var runner = new Parallel({
	paralelJob: 2 
});

runner.job(step1)
	.job(step2)
	.job(step3)
	.job(step4)
	.done(onDone);
