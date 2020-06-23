// USER CLASS

class User {
    constructor(id, name, email, password) {
      this.id = id;
      this.name = name;
      this.email = email;
      this.password = password;
    }
}

// CREATE USERS

admin = new User(0, "admin", "admin", "admin");
testUser1 = new User(1, "testname1", "testemail1", "testpassword1");
testUser2 = new User(2, "testname2", "testemail2", "testpassword2");
testUser3 = new User(3, "testname3", "testemail3", "testpassword3");
testUser4 = new User(4, "testname4", "testemail4", "testpassword4");
testUser5 = new User(5, "testname5", "testemail5", "testpassword5");

//POPULATE USER LIST

var userList = [admin, testUser1, testUser2, testUser3, testUser4, testUser5];