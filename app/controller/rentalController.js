const RentalDao = require("../dao/rentalDao");
const ControllerCommon = require("./common/controllerCommon");
const Rental = require("../model/rental");

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
          let car_model = req.params.car_model;
          this.rentalDao.findByName(car_model)
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

     create(req, res){
          let rental = new RentalController();
  
          rental.car_model = req.body.car_model;
          rental.dealer = req.body.dealer;
          rental.year = req.body.year;
          rental.car_color = req.body.car_color;
          rental.car_price = req.body.car_price;
          rental.car_hps = req.body.car_hps;
          rental.car_mileage = req.body.car_mileage;
          rental.car_damages = req.body.car_damages;
          rental.car_condition = req.body.car_condition;
          rental.car_seats = req.body.car_seats;
          rental.car_report = req.body.car_report;
  
          return this.rentalDao.create(rental)
              .then(this.common.editSuccess(res))
              .catch(this.common.serverError(res));
      }

     update(req, res) {
     let rental = new Rental();
     
     rental.id = req.body.id;
     rental.car_model = req.body.car_model;
     rental.dealer = req.body.dealer;
     rental.year = req.body.year;
     rental.car_color = req.body.car_color;
     rental.car_price = req.body.car_price;
     rental.car_hps = req.body.car_hps;
     rental.car_mileage = req.body.car_mileage;
     rental.car_damages = req.body.car_damages;
     rental.car_condition = req.body.car_condition;
     rental.car_seats = req.body.car_seats;
     rental.car_report = req.body.car_report;

     
     return this.rentalDao.update(rental)
          .then(this.common.editSuccess(res))
          .catch(this.common.serverError(res));
     };
}

module.exports = RentalController;