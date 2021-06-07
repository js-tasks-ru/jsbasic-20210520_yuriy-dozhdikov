function showSalary(users, age) {
  let arr = [];
  for (let i = 0; i < users.length; i++) {
    if (users[i].age <= age) {
      arr.push(users[i]);
    }
  }

  let str = '';
  for (let i = 0; i <= arr.length; i++) {
    if (users[i].age <= age) {
      str += `${users[i].name}, ${users[i].balance}\n`;
    }
  }
  return str.trim();
}
