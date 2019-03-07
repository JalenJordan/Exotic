const RentalDao = require("../dao/rentalDao");
const ControllerCommon = require("./common/controllerCommon");
const Rental = require("../model/rental");
const Account = require("../model/account");
const Report = require("../model/report");

class RentalController{

     constructor(){
          this.rentalDao = new RentalDao();
          this.common = new ControllerCommon();
     }
     findById(req, res){
          let id = req.params.id;
          this.rentalDao.findById(id)
               .then(this.common.findSuccess(res))
               .catch(this.common.findError(res));
          
     }

     deleteById(req, res){
          let id = req.params.id;
          this.rentalDao.deleteById(id)
               .then(this.common.editSuccess(res))
               .catch(this.common.serverError(res));
     };

     findAll(res){
          this.rentalDao.findAll()
               .then(this.common.findSuccess(res))
               .catch(this.common.findError(res));
     }

     findByName(req, res){
          let model = req.params.model;
          this.rentalDao.findByName(model)
               .then(this.common.findSuccess(res))
               .catch(this.common.findError(res));
     }

     findAllColor(req, res){
          let color = req.params.color;
          this.rentalDao.findAllColor(color)
               .then(this.common.findSuccess(res))
               .catch(this.common.findError(res));
     }

     findByPassword(req, res){
          let password = req.params.password;
          this.rentalDao.findByPassword(password)
               .then(this.common.findSuccess(res))
               .catch(this.common.findError(res));
     }

     findByDealer(req, res){
          let dealer = req.params.dealer;
          this.rentalDao.findByDealer(dealer)
               .then(this.common.findSuccess(res))
               .catch(this.common.findError(res));
     }

     findByYear(req, res){
          let year = req.params.year;
          this.rentalDao.findByYear(year)
               .then(this.common.findSuccess(res))
               .catch(this.common.findError(res));
     }

     findByColor(req, res){
          let color = req.params.color;
          this.rentalDao.findByColor(color)
               .then(this.common.findSuccess(res))
               .catch(this.common.findError(res));
     }

     findByPrice(req, res){
          let price = req.params.price;
          this.rentalDao.findByPrice(price)
               .then(this.common.findSuccess(res))
               .catch(this.common.findError(res));
     }

     findByHPS(req, res){
          let hps = req.params.hps;
          this.rentalDao.findByHPS(hps)
               .then(this.common.findSuccess(res))
               .catch(this.common.findError(res));
     }

     findByMileage(req, res){
          let mileage = req.params.mileage;
          this.rentalDao.findByMileage(mileage)
               .then(this.common.findSuccess(res))
               .catch(this.common.findError(res));
     }

     //Account Controllers

     findAllUsers(res){
          this.rentalDao.findAllUsers()
               .then(this.common.findSuccess(res))
               .catch(this.common.findError(res));
     }

     findByUsername(req, res){
          let username = req.params.username;
          this.rentalDao.findByUsername(username)
               .then(this.common.findSuccess(res))
               .catch(this.common.findError(res))
     }

     findByPassword(req, res){
          let password = req.params.password;
          this.rentalDao.findByPassword(password)
               .then(this.common.findSuccess(res))
               .catch(this.common.findError(res));
     }

     findByFname(req, res){
          let fname = req.params.fname;
          this.rentalDao.findByFname(fname)
               .then(this.common.findSuccess(res))
               .catch(this.common.findError(res));
     }

     findByLname(req, res){
          let lname = req.params.lname;
          this.rentalDao.findByLname(lname)
               .then(this.common.findSuccess(res))
               .catch(this.common.findError(res));
     }

     findByDOB(req, res){
          let dob = req.params.dob;
          this.rentalDao.findByDOB(dob)
               .then(this.common.findSuccess(res))
               .catch(this.common.findError(res));
     }

     findByPhone(req, res){
          let phone = req.params.phone;
          this.rentalDao.findByPhone(phone)
               .then(this.common.findSuccess(res))
               .catch(this.common.findError(res));
     }

     findByEmail(req, res){
          let email = req.params.email;
          this.rentalDao.findByEmail(email)
               .then(this.common.findSuccess(res))
               .catch(this.common.findError(res));
     }

     //Report Controllers

     findByDamages(req, res){
          let damages = req.params.damages;
          this.rentalDao.findByDamages(damages)
               .then(this.common.findSuccess(res))
               .catch(this.common.findError(res));
     }
     
     findByCondition(req, res){
          let condition = req.params.condition;
          this.rentalDao.findByCondition(condition)
               .then(this.common.findSuccess(res))
               .catch(this.common.findError(res));
     }

     findByStatus(req, res){
          let status = req.params.status;
          this.rentalDao.findByStatus(status)
               .then(this.common.findSuccess(res))
               .catch(this.common.findError(res));
     }

     //Create and update Cars Data

     create(req, res){
          let rental = new RentalController();
  
          rental.model = req.body.model;
          rental.dealer = req.body.dealer;
          rental.year = req.body.year;
          rental.color = req.body.color;
          rental.price = req.body.price;
          rental.hps = req.body.hps;
          rental.mileage = req.body.mileage;
  
          return this.rentalDao.create(rental)
              .then(this.common.editSuccess(res))
              .catch(this.common.serverError(res));
          };

     update(req, res) {
     let rental = new Rental();
     
     rental.id = req.body.id;
     rental.model = req.body.model;
     rental.dealer = req.body.dealer;
     rental.year = req.body.year;
     rental.color = req.body.color;
     rental.price = req.body.price;
     rental.hps = req.body.hps;
     rental.mileage = req.body.mileage;
     
     return this.rentalDao.update(rental)
          .then(this.common.editSuccess(res))
          .catch(this.common.serverError(res));
     };

     //Creates and update Account data

     create(req, res){
          let account = new RentalController();
          account.username = req.body.username;
          account.password = req.body.password;
          account.fname = req.body.fname;
          account.lname = req.body.lname;
          account.dob = req.body.dob;
          account.phone = req.body.phone;
          account.email = req.body.email;

          return this.rentalDao.create(account)
               .then(this.common.editSuccess(res))
               .catch(this.common.serverError(res));
     };

     update(req, res){
          let account = new Account();
          account.username = req.body.username;
          account.password = req.body.password;
          account.fname = req.body.fname;
          account.lname = req.body.lname;
          account.dob = req.body.dob;
          account.phone = req.body.phone;
          account.email = req.body.email;

          return this.rentalDao.update(account)
               .then(this.common.editSuccess(res))
               .catch(this.common.serverError(res));
     }

     //Create and update report data

     create(req, res){
          let report = new RentalController();

          report.damages = req.body.damages;
          report.condition = req.body.condition;
          report.status = req.body.status;

          return this.rentalDao.create(report)
               .then(this.common.editSuccess(res))
               .catch(this.common.serverError(res));
          };
     
     update(req, res){
          let report = new Report();
          report.damages = req.body.damages;
          report.condition= req.body.condition;
          report.status = req.body.status;

          return this.rentalDao.update(report)
               .then(this.common.editSuccess(res))
               .catch(this.common.serverError(res));
     }
}

module.exports = RentalController;