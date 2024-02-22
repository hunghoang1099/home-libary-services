class User {
    constructor(id, login, password, version, createdAt, updatedAt) {
      this.id = id;
      this.login = login;
      this.password = password;
      this.version = version;
      this.createdAt = createdAt;
      this.updatedAt = updatedAt;
    }
  }
  
  module.exports = User;  