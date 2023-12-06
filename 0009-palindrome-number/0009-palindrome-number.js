var isPalindrome = function (x) {
  const convertedXtoArray = x.toString().split("");
  const reverseCheck = parseInt(convertedXtoArray.reverse().join(""));
  return x === reverseCheck ? true : false;
};