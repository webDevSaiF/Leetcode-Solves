var longestCommonPrefix = function (arr) {
  let num = 0;

  if (arr.length === 0) return "";
  for (let i = 0; i < arr[num].length; i++) {
    const char = arr[num][i];
    for (let j = 1; j < arr.length; j++) {
      if (i === arr[j].length || arr[j][i] !== char) {
        return arr[0].substring(0, i);
      }
    }
  }
  return arr[0];
};
longestCommonPrefix(["flower", "flow", "flight"]);
