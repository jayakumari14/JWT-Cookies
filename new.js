const User = function (userName, userCode) {
  this.userName = userName;
  this.userCode = userCode;
  this.getUser = function () {
    console.log(`welcome ${this.userName} your code is ${this.userCode}`);
  };
};

const hitesh = new User("jaya", 12);
console.log(hitesh);
