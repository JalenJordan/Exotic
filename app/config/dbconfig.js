let sqlite3 = require("sqlite3").verbose();
let db = new sqlite3.Database("./db/cars.db");

let init = function(){

     db.run("CREATE TABLE if not exists cars (" + 
     "car_id INTEGER," +
     "car_model TEXT," +
     "car_dealer TEXT," +
     "car_year INTEGER," +
     "car_color TEXT," +
     "car_price INTEGER,"+
     "car_hps INTEGER," +
     "car_mileage INTEGER," +
     "car_damages TEXT," +
     "car_condition TEXT," +
     "car_report TEXT"+
     ")");
};

module.exports = {
     init: init,
     db: db
};