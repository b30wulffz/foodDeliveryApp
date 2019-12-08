const userList = [];

class User {
  constructor(email, password) {
    this.email = email;
    this.password = password;
  }

  static addUser(email, password) {
    let target = User.getUser(email);
    if (!target) {
      userList.push(new User(email, password));
      console.log(userList);
      return true;
    }
    return false;
  }

  static getUser(email) {
    let target = userList.find(user => user.email === email);
    if (target) {
      return target;
    } else {
      return null;
    }
  }

  static verifyUser(email, password) {
    let target = User.getUser(email);
    if (!target) {
      return false;
    } else {
      return target.password === password;
    }
  }
}

export default User;
