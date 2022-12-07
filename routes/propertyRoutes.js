const router = require("express").Router();
const Property = require("../models/Property");
router.post("/add", async (req, res) => {
  try {
    const property = await Property.create(req.body);
    res.status(201).json(property);
  } catch (e) {
    res.status(400).json(e.message);
  }
});
router.post("/fetch", async (req, res) => {
  const { rent, availability, propertytype, location } = req.body;
  var [from, to] = rent.split("-");
  console.log(req.body.rent);
  try {
    const conditions = {};
    if(rent!==""){
      conditions.rent = { $gt: from, $lt: to };
    }
    if(availability!==""){
      conditions.availability ={$lt:availability};
    }
    if(propertytype!==""){
      conditions.propertytype = propertytype;
    }
    if(location!==""){
      conditions.location = location;
    }
    const properties = await Property.find(conditions);
    // console.log(properties)
    res.json(properties);
  } catch (error) {
    res.status(400).json(error.message);
  }
});

module.exports = router;
