class Rental{
     constructor(id, model, dealer, year,color,price,hps, mileage){
          this.id = id;
          this.model = model;
          this.dealer = dealer;
          this.year = year;
          this.color = color;
          this.price = price;
          this.hps = hps;
          this.mileage = mileage;
     }
}

module.exports = Rental;