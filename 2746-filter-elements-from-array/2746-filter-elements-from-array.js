/**
 * @param {number[]} arr
 * @param {Function} fn
 * @return {number[]}
 */
var filter = function (arr, fn) {
  let value = [];
  for (let i = 0; i < arr.length; i++) {
    if (fn(arr[i], i)) value.push(arr[i]);
  }

  return value;
};