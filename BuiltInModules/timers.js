//Timers: The module is used to schedule code execution at a particular time or interval. Example of this is to to set a timeout forT

// Using setTimeout()
console.log('Starting...');
setTimeout(() => {
  console.log('Timing elapsed');
}, 2000);
// Using setInterval()
let counter = 0;
const intervalId = setInterval(() => {
  console.log(`Counting: ${counter}`);
  counter++;
  if (counter >= 10) {
    clearInterval(intervalId);
    console.log('Interval cleared');
  }
}, 1000);
