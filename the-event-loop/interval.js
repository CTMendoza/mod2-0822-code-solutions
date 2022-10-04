var currentCount = 3;

var timer = setInterval(() => {
  if (currentCount > 0) {
    console.log('current count is: ', currentCount);
    currentCount--;
  } else if (currentCount === 0) {
    console.log('Blast off!');
    clearInterval(timer);
  }
}, 1000);
