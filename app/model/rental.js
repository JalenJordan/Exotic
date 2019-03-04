class Rental{
     constructor(id, car_model, dealer, car_year, car_color, car_price, car_hps, car_mileage, car_damages, car_condition, car_seats, car_report){
          this.id = id;
          this.car_model = car_model;
          this.car_dealer = dealer;
          this.car_year = car_year;
          this.car_color = car_color;
          this.car_price = car_price;
          this.car_hps = car_hps;
          this.car_mileage = car_mileage;
          this.car_damages = car_damages;
          this.car_condition = car_condition;
          this.car_seats = car_seats;
          this.car_report = car_report;
     }
}

module.exports = Rental;