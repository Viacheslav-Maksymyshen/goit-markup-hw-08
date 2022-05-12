// function checkForSpam(message) {
//   let result;
//   message = message.toLowerCase();
//   if (message.includes('sale')) {
//     result = true;
//   } else if (message.includes('spam')) {
//     result = true;
//   } else {
//     result = false;
//   }
//   console.log(result);
//   return result;
// }
// checkForSpam('Get best sale offers now!');
// checkForSpam('Amazing SalE, only tonight!');
// checkForSpam('[SPAM] How to earn fast money?');

function getExtremeElements(array) {
  // Change code below this line
  const firstElement = array[0];
  const LastElement = array[array.length - 1];
  return console.log((array = `[${firstElement}, ${LastElement}]`));
  // Change code above this line
}
getExtremeElements([1, 2, 3, 4, 5]);
