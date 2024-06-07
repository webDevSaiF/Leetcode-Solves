const strStr = function (haystack, needle) {
  if (!haystack.includes(needle)) return -1;
  let indexNumber = 0;

  for (let i = 0; i < haystack.length; i++) {
    if (haystack.slice(i, i + needle.length) === needle) return i;
  }
};