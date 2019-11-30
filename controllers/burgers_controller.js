//assignment dependencies
const express=require(`express`);
const router = express.Router();

//creating global variable using let to be used inside routes
const db = require(`../models`);

//Creating the routes the controller handles and directs
router.get("/", (req, res) =>{
    db.Burger.findAll((dbInfo) =>{
        let objectForHandlebars= {
            burgers: dbInfo
        };
        console.log("Below is the object for Handlbaras");
        console.log(objectForHandlebars);
        res.render(`index`, objectForHandlebars);
    });
});

router.post("/api/newburger", function(req, res) {
  console.log(`This is req.body.data:`, req.body.data);
  console.log(`This is req.body.data.burger_name:`, req.body.data.burger_name);

  db.Burger.create([
    "burger_name"], [req.body.data.burger_name], function(result) {
    
    // Send back the ID of the new quote
    console.log("Result is below");
    console.log(result)

    res.json({ id: result.insertId });
    // res.redirect("/");
  });
});


router.put("/api/burger/devour/:id", function(req, res) {
  console.log('req:');
  console.log(req);
  var condition = "id = " + req.params.id;

  db.Burger.update({
    devoured: req.body.devoured
  }, condition, function(result) {
    if (result.changedRows == 0) {
      // If no rows were changed, then the ID must not exist, so 404
      return res.status(404).end();
    } else {
      res.status(200).end();
    }
    // res.redirect("/");
  });
});

// Export routes for server.js to use.


module.exports = router;