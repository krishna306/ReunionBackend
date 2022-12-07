const mongoose = require("mongoose");
const dateOptions = {
  weekday: "long",
  year: "numeric",
  month: "long",
  day: "numeric",
};
const propertySchema = new mongoose.Schema({
  propertytype: {
    type: "string",
  },
  location: {
    type: "string",
  },
  imageurl: {
    type: "string",
  },

  title: {
    type: "string",
  },
  rent: {
    type: "number",
  },
  address: {
    type: "string",
  },
  bed: {
    type: "number",
  },
  bathrooms: {
    type: "number",
  },
  arealength: {
    type: "string",
  },
  areabreadth: {
    type: "string",
  },
  availability: {
    type: "date",
  },
});
const Property = mongoose.model("Property", propertySchema);
module.exports = Property;
