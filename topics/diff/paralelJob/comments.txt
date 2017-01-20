Task was recieved from http://vironit.com/

Notes:

0) Promises are async (just to remember for reviewers )
```
Promise.resolve().then(() => console.log(1));
console.log(2);
```
1) js is single-trait language. 
So either we create async version ( check solutions examples )
 either we should use webworkers;

2) If we use webworkers - there are a list of limitations for jobs ( such as DOM / returning data types / etc)
Also while using webworkers we need create new webworker on each job. And in the most of cases it's a huge overhead.

If we have more details -- we can create a number of workers and pass functions as strings ( via serializing ),
but it makes us avoid usage such features as clojures, referenced calls of functions , etc.