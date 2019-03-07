const express = require("express");
const router = express.Router();

//controller here
const RentalController = require("../../controller/rentalController");
const rentalController = new RentalController();

//Cars Database routes
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

router.get("/color", function(req, res){
     rentalController.findAllColor(res);
});

//Users Database Routes

router.get("/account", function(req, res){
     rentalController.findAllUsers(res);
});

router.get("/username/:username", function(req, res){
     rentalController.findByUsername(req, res);
});

router.get("/password/:password", function(req, res){
     rentalController.findByPassword(req, res);
});

router.get("/fname/:fname", function(req, res){
     rentalController.findByFname(req, res);
});

router.get("/dob/:dob", function(req, res){
     rentalController.findByDOB(req, res);
});

router.get("/phone/:phone", function(req, res){
     rentalController.findByPhone(req, res);
});

router.get("/email/:email", function(req, res){
     rentalController.findByEmail(req, res);
});

//Report Database Routes

router.get("/damages/:damages", function(req, res){
     rentalController.findByDamages(req, res);
});

router.get("/condition/:condition", function(req, res){
     rentalController.findByCondition(req, res);
});

router.get("/status/:status", function(req, res){
     rentalController.findByStatus(req, res);
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