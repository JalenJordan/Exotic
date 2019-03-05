const express = require("express");
const router = express.Router();

//controller here
const RentalController = require("../../controller/rentalController");
const rentalController = new RentalController();

//student routes
router.get("/", function (req, res){
     rentalController.findAll(res);
     //res.send([{hello:"world"}]);;
     // to pass in a paramater add a colon
});

router.get("/name/:model", function(req, res){
     rentalController.findByName(req, res);
});

router.get("/:id", function(req, res){
     rentalController.findById(req, res);
     console.log(req.params.id);
});

router.get("/dealer/:dealer", function(req, res){
     rentalController.findByDealer(req, res);
});

router.get("/year/:year", function(req, res){
     rentalController.findByYear(req,res);
});

router.get("/color/:color", function(req, res){
     rentalController.findByColor(req, res);
});

router.get("/price/:price", function(req, res){
     rentalController.findByPrice(req, res);
});

router.get("/hps/:hps", function(req, res){
     rentalController.findByHPS(req, res);
});

router.get("/mileage/:mileage", function(req, res){
     rentalController.findByMileage(req, res);
});

router.post('/create', function (req, res){
     rentalController.create(req, res);
});

router.put("/edit/:id", function(req, res){
     rentalController.update(req, res);
})

module.exports = router;



router.delete('/:id', function (req, res){
     rentalController.deleteById(req, res);
});