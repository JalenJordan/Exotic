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
                         row.car_model,
                         row.dealer,
                         row.year,
                         row.car_color,
                         row.car_price,
                         row.car_hps,
                         row.car_mileage,
                         row.car_condition,
                         row.car_seats,
                         row.car_report
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
                         row.car_model,
                         row.dealer,
                         row.year,
                         row.car_color,
                         row.car_price,
                         row.car_hps,
                         row.car_mileage,
                         row.car_condition,
                         row.car_seats,
                         row.car_report
                    ));
               }
               return rentals;
          });
     }
     findByName(car_model){
          let sqlRequest = "SELECT * FROM cars WHERE car_model =  '" + car_model + "'";
          return this.common.findAll(sqlRequest).then(rows => {
               let rentals = [];
               for (const row of rows){
                    rentals.push(new Rental(
                         row.id,
                         row.car_model,
                         row.dealer,
                         row.year,
                         row.car_color,
                         row.car_price,
                         row.car_hps,
                         row.car_mileage,
                         row.car_condition,
                         row.car_seats,
                         row.car_report
                    ));
               }
               return rentals;
          });
     }


     findByDealer(dealer){
          let sqlRequest = "SELECT * FROM cars WHERE dealer = " + dealer + "'";
          return this.common.findAll(sqlRequest).then(rows => {
               let rentals = [];
               for (const row of rows){
                    rentals.push(new Rental(
                         row.id,
                         row.car_model,
                         row.dealer,
                         row.year,
                         row.car_color,
                         row.car_price,
                         row.car_hps,
                         row.car_mileage,
                         row.car_condition,
                         row.car_seats,
                         row.car_report 
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
                         row.car_model,
                         row.dealer,
                         row.year,
                         row.car_color,
                         row.car_price,
                         row.car_hps,
                         row.car_mileage,
                         row.car_condition,
                         row.car_seats,
                         row.car_report
                    ));
               }
               return rentals;
          });
     }

     create(Rental){
          let sqlRequest = "INSERT into cars (car_model, dealer, year,  car_color, car_price, car_hps, car_mileage, car_damages, car_condition, car_seats, car_report) "  +  " VALUES ($car_model, $dealer, $year, $car_price, $car_hps, $car_mileage, $car_damages, $car_condition, $car_seats, $car_report)";
  
          let sqlParams = {
              $car_model: Rental.car_model,
              $dealer: Rental.dealer,
              $year: Rental.year,
              $car_color: Rental.car_color,
              $car_price: Rental.car_price,
              $car_hps: Rental.car_hps,
              $car_mileage: Rental.car_mileage,
              $car_damages: Rental.car_damages,
              $car_condition: Rental.car_condition,
              $car_seats: Rental.car_seats,
              $car_report: Rental.car_report
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