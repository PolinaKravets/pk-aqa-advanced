function handleNum(number, callback1, callback2) {
  return number % 2 === 0 ? callback1() : callback2();
}

function handleEven() {
  console.log('number is even');
}

function handleOdd() {
  console.log('number is odd');
}
handleNum(7, handleEven, handleOdd);
handleNum(8, handleEven, handleOdd);
