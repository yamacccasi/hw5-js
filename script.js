function createNewUser() {
  let newUser = {
    firstName: prompt("Введіть ваше ім'я"),
    lastName: prompt("Введіть ваше прізвище"),
    getLogin() {
      return newUser.firstName[0].toLowerCase() + newUser.lastName.toLowerCase();
    },
  };
  return newUser;
}

let result = createNewUser();
console.log(result);
console.log(result.getLogin());
