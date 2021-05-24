function sumSalary(salaries) {
  let res = 0;
  for (let key in salaries) {
    if (salaries[key] > 0 && salaries[key] !== Infinity) {
      res += salaries[key];
    }
  }
  return res;
}
