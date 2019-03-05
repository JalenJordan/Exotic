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
          let model = req.params.model;
          this.rentalDao.findByName(model)
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
      }

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
}

module.exports = RentalController;