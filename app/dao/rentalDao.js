const Rental = require("../model/rental");
const daoCommon = require("./common/daoCommon");

class RentalDao{
     constructor(){
          this.common = new daoCommon();
     }
     findAll(){
          let sqlRequest = "SELECT * FROM cars ORDER BY year ASC";
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
                         row.condition,
                         row.seats,
                         row.report
                    ));
               };
               return rentals;
          });
     }
     findById(id){
          let sqlRequest = "SELECT * FROM cars WHERE id = " + id;
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
                         row.condition,
                         row.seats,
                         row.report
                    ));
               }
               return rentals;
          });
     }
     findByName(model){
          let sqlRequest = "SELECT * FROM cars WHERE model =  '" + model + "'";
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

     deleteById(id){
          let sqlRequest = "DELETE FROM cars WHERE id=$id";
          let sqlParams = {$id: id};
          return this.common.run(sqlRequest, sqlParams);
     }
}

module.exports = RentalDao;