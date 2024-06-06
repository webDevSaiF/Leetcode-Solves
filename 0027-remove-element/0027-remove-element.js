const removeElement = function (nums, val) {
  let current = 0;
  nums.forEach((num, index) => {
    if (num !== val) {
      nums[current] = nums[index];
      current++;
    }
  });
  return current;
};