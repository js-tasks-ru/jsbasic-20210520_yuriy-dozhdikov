function getMinMax(str) {
  str = str.replace(/[, ]/g, ' ').split(' ');
  let arr = [];

  for (let i = 0; i < str.length; i++) {
    if (!isNaN(+str[i])) {
      arr.push(+str[i]);
    }
  }

  let obj = {
    max: Math.max(...arr),
    min: Math.min(...arr),
  };
  return obj;
}
