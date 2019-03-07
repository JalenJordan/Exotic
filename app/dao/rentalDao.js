const Rental = require("../model/rental");
const daoCommon = require("./common/daoCommon");
const Account = require("../model/account");
const Report = require("../model/report");

class RentalDao{
     constructor(){
          this.common = new daoCommon();
     }

     //Car Database Daos
     
     findAll(){
          let sqlRequest = "SELECT * FROM cars ORDER BY price ASC";
          return this.common.findAll(sqlRequest).then(rows => {
               let rentals = [];
               console.log(rows);
               for (const row of rows){
                    rentals.push(new Rental(
                         row.id,
                         row.model,
                         row.dealer,
                         row.year,
                         row.color,
                         row.price,
                         row.hps,
                         row.mileage,
                    ));
               };
               return rentals;
          });
     }

     findById(id){
          let sqlRequest = "SELECT * FROM cars  WHERE id = " + id;
          return this.common.findAll(sqlRequest).then(rows => {
               let rentals = [];
               for (const row of rows){
                    rentals.push(new Rental(
                         row.id,
                         row.model,
                         row.dealer,
                         row.year,
                         row.color,
                         row.price,
                         row.hps,
                         row.mileage,
                    ));
               }
               return rentals;
          });
     }

     findByName(model){
          let sqlRequest = "SELECT * FROM cars WHERE model =  '" + model + "'";
          return this.common.findAll(sqlRequest).then(rows => {
               let rentals = [];
               for (const row in rows){
                    rentals.push(new Rental(
                         row.id,
                         row.model,
                         row.dealer,
                         row.year,
                         row.color,
                         row.price,
                         row.hps,
                         row.mileage,
                    ));
               }
               return rentals;
          });
     }


     findByDealer(dealer){
          let sqlRequest = "SELECT * FROM cars WHERE dealer ='" + dealer + "' ";
          console.log(sqlRequest);
          
          return this.common.findAll(sqlRequest).then(rows => {
               let rentals = [];
               for (const row of rows){
                    rentals.push(new Rental(
                         row.id,
                         row.model,
                         row.dealer,
                         row.year,
                         row.color,
                         row.price,
                         row.hps,
                         row.mileage,
                    ));
               }               
               return rentals;
          });
     }

     findByYear(year){
          let sqlRequest = "SELECT * FROM cars WHERE year= " + year;
          return this.common.findAll(sqlRequest).then(rows => {
               let rentals = [];
               for(const row of rows){
                    rentals.push(new Rental(
                         row.id,
                         row.model,
                         row.dealer,
                         row.year,
                         row.color,
                         row.price,
                         row.hps,
                         row.mileage,
                    ));
               }
               return rentals;
          });
     }

     findByColor(color){
          let sqlRequest = "SELECT * FROM cars WHERE color= '" + color + "' ";
          return this.common.findAll(sqlRequest).then(rows => {
               let rentals = [];
               for(const row of rows){
                    rentals.push(new Rental(
                         row.id,
                         row.model,
                         row.dealer,
                         row.year,
                         row.color,
                         row.price,
                         row.hps,
                         row.mileage,
                    ));
               }
               return rentals;
          });
     }

     findByPrice(price){
          let sqlRequest = "SELECT * FROM cars WHERE price= " + price;
          return this.common.findAll(sqlRequest).then(rows => {
               let rentals = [];
               for(const row of rows){
                    rentals.push(new Rental(
                         row.id,
                         row.model,
                         row.dealer,
                         row.year,
                         row.color,
                         row.price,
                         row.hps,
                         row.mileage,
                    ));
               }
               return rentals;
          });
     }

     findByHPS(hps){
          let sqlRequest = "SELECT * FROM cars WHERE hps= " + hps;
          return this.common.findAll(sqlRequest).then(rows => {
               let rentals = [];
               for(const row of rows){
                    rentals.push(new Rental(
                         row.id,
                         row.model,
                         row.dealer,
                         row.year,
                         row.color,
                         row.price,
                         row.hps,
                         row.mileage,
                    ));
               }
               return rentals;
          });
     }
     
     findByMileage(mileage){
          let sqlRequest = "SELECT * FROM cars WHERE mileage= " + mileage;
          return this.common.findAll(sqlRequest).then(rows => {
               let rentals = [];
               for(const row of rows){
                    rentals.push(new Rental(
                         row.id,
                         row.model,
                         row.dealer,
                         row.year,
                         row.color,
                         row.price,
                         row.hps,
                         row.mileage,
                    ));
               }
               return rentals;
          });
     }


     //Users Database Daos

     findAllUsers(){
          let sqlRequest = "SELECT * FROM users ORDER BY id ASC";
          console.log("came here");
          return this.common.findAll(sqlRequest).then(rows =>{
               let accounts = []
               for(const row of rows){
                    accounts.push(new Account(
                         row.id,
                         row.username,
                         row.password,
                         row.fname,
                         row.lname,
                         row.dob,
                         row.phone,
                         row.email,
                    ));
               }
               return accounts;
          });
     }

     findByUsername(username){
          let sqlRequest = "SELECT * FROM users WHERE username= '" + username + "' ";
          return this.common.findAll(sqlRequest).then(rows => {
               let accounts = [];
               for(const row of rows){
                    accounts.push(new Account(
                         row.username,
                         row.password,
                         row.fname,
                         row.lname,
                         row.dob,
                         row.phone,
                         row.email,
                    ));
               }
               return accounts;
          });
     }

     findByPassword(password){
          let sqlRequest = "SELECT * FROM users WHERE password= " + password;
          return this.common.findAll(sqlRequest).then(rows => {
               let accounts = [];
               for(const row of rows){
                    accounts.push(new Account(
                         row.username,
                         row.password,
                         row.fname,
                         row.lname,
                         row.dob,
                         row.phone,
                         row.email,
                    ));
               }
               return accounts;
          });
     }

     findByFname(fname){
          let sqlRequest = "SELECT * FROM users WHERE fname= '" + fname + "' ";
          return this.common.findAll(sqlRequest).then(rows =>{
               let accounts = []
               for(const row of rows){
                    accounts.push(new Account(
                         row.username,
                         row.password,
                         row.fname,
                         row.lname,
                         row.dob,
                         row.phone,
                         row.email,
                    ));
               }
               return accounts;
          });
     }

     findByLname(lname){
          let sqlRequest = "SELECT * FROM users WHERE lname= '" + lname + "' ";
          return this.common.findAll(sqlRequest).then(rows =>{
               let accounts = []
               for(const row of rows){
                    accounts.push(new Account(
                         row.username,
                         row.password,
                         row.fname,
                         row.lname,
                         row.dob,
                         row.phone,
                         row.email,
                    ));
               }
               return accounts;
          });
     }

     findByDOB(dob){
          let sqlRequest = "SELECT * FROM users WHERE dob= " + dob;
          return this.common.findAll(sqlRequest).then(rows =>{
               let accounts = []
               for(const row of rows){
                    accounts.push(new Account(
                         row.username,
                         row.password,
                         row.fname,
                         row.lname,
                         row.dob,
                         row.phone,
                         row.email,
                    ));
               }
               return accounts;
          });
     }

     findByPhone(phone){
          let sqlRequest = "SELECT * FROM users WHERE phone= " + phone;
          return this.common.findAll(sqlRequest).then(rows =>{
               let accounts = []
               for(const row of rows){
                    accounts.push(new Account(
                         row.username,
                         row.password,
                         row.fname,
                         row.lname,
                         row.dob,
                         row.phone,
                         row.email,
                    ));
               }
               return accounts;
          });
     }

     findByEmail(email){
          let sqlRequest = "SELECT * FROM users WHERE email= '" + email + "' ";
          return this.common.findAll(sqlRequest).then(rows =>{
               let accounts = []
               for(const row of rows){
                    accounts.push(new Account(
                         row.username,
                         row.password,
                         row.fname,
                         row.lname,
                         row.dob,
                         row.phone,
                         row.email,
                    ));
               }
               return accounts;
          });
     }

     //Report Database Daos

     findByDamages(damages){
          let sqlRequest = "SELECT * FROM report WHERE damages= '" + damages + "' ";
          return this.common.findAll(sqlRequest).then(rows =>{
               let reports = []
               for(const row of rows){
                    reports.push(new Report(
                         row.damages,
                         row.condition,
                         row.status,
                    ));
               }
               return reports;
          });
     }

     findByCondition(condition){
          let sqlRequest = "SELECT * FROM report WHERE condition= '" + condition + "' ";
          return this.common.findAll(sqlRequest).then(rows =>{
               let reports = []
               for(const row of rows){
                    reports.push(new Report(
                         row.damages,
                         row.condition,
                         row.status,
                    ));
               }
               return reports;
          });
     }

     
     create(Rental){
          let sqlRequest = "INSERT into cars (model, dealer, year,  color, price, hps, mileage) "  +  " VALUES ($model, $dealer, $year, $price, $hps, $mileage)";
  
          let sqlParams = {
              $model: Rental.model,
              $dealer: Rental.dealer,
              $year: Rental.year,
              $color: Rental.color,
              $price: Rental.price,
              $hps: Rental.hps,
              $mileage: Rental.mileage,
          };
          return this.common.run(sqlRequest, sqlParams);
     };
     
     create(Account){
          let sqlRequest = "INSERT into users (username, password, fname, lname, dob, phone, email) " + " VALUES ($username, $password, $fname, $lname, $dob, $phone, $email";

          let sqlParams = {
               $username: Account.username,
               $password: Account.password,
               $fname: Account.fname,
               $lname: Account.lname,
               $dob: Account.dob,
               $phone: Account.phone,
               $email: Account.email,
          };
          return this.common.run(sqlRequest, sqlParams);
     };

     create(Report){
          let sqlRequest = "INSERT into reports (damages, condition, status) " + " VALUES ($damages, $condition, $status";

          let sqlParams = {
               $damages: Report.damages,
               $condition: Report.condition,
               $status: Report.status,
          };
          return this.common.run(sqlRequest, sqlParams);
     };

     deleteById(id){
          let sqlRequest = "DELETE FROM cars WHERE id=$id";
          let sqlParams = {$id: id};
          return this.common.run(sqlRequest, sqlParams);
     }
}

module.exports = RentalDao;