function checkForSpam(message) {
  let result;
  message = message.toLowerCase();
  if (message.includes('sale')) {
    result = true;
  } else if (message.includes('spam')) {
    result = true;
  } else {
    result = false;
  }
  console.log(result);
  return result;
}
checkForSpam('Get best sale offers now!');
checkForSpam('Amazing SalE, only tonight!');
checkForSpam('[SPAM] How to earn fast money?');
