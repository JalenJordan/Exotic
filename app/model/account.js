class Account{
     constructor(id, username,  password, fname, lname, dob, phone, email ) {
          this.id = id;
          this.username = username;
          this.password = password;
          this.fname = fname;
          this.lname = lname;
          this.dob = dob;
          this.phone = phone;
          this.email = email;
     }
}

module.exports = Account;