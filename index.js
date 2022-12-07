const express = require("express");
const app = express();
const cors = require("cors");
const bodyParser = require("body-parser");
const propertyRoutes = require("./routes/propertyRoutes");
const Property = require("./models/Property");
require("./connection");
const dotenv = require("dotenv");
dotenv.config();
// var cityName = [
//   "Mumbai",
//   "Kolkata",
//   "Jaipur",
//   "Delhi",
//   "Pune",
//   "Chennai",
//   "Bengaluru",
//   "Hyderabad",
//   "Ahmedabad",
//   "Surat",
//   "Vadodara",
//   "Nagpur",
//   "Kochi",
// ];
// const states ={"Mumbai":"Maharastra",
// "Kolkata":"West Bangal",
// "Jaipur":"Rajasthan",
// "Delhi":"Delhi",
// "Pune":"Maharastra",
// "Chennai":"Tamil Nadu",
// "Bengaluru":"Karnataka",
// "Hyderabad":"Telangana",
// "Ahmedabad":"Gujarat",
// "Surat":"Gujarat",
// "Vadodara":"Gujarat",
// "Nagpur":"Maharastra",
// "Kochi":"Kerala"}

// var HouseName =
//   "Gloustmiw Haitme Fullermann Ainslu Moonling Winnon Dawborne Harmas Ourki Dairva Hamilcher Eaccors Zoussaws Morebard Stoobbor Ribsoch Clayham Whitdall Fishbeard Duson Itlaip Brernsaiph Crawless Jooppiw Shurding Downstein Enthu Robinson Rothster Haindell Shanway Broltoot Lawsend Ostuns Joombuwl Confield Lindnard Darkledge Farnrow Dreanni Nomma Doobsuch Pooyte Autumnless Mordel Farnborne Yeatledge Virnsoum Peterrough Gallowater Aidwiy Glornsuy Trilweeph Hopver Edgor Darkman Gluwde Icceach Cottonmond Brewster Grendwell Meakett Sudlu Bouddas Whitcher Webless Graistme Smallbow Pluppap Goldborne Solosend Stoneledge Bellsmith Lamburg Oonsliph Hopham Woodward Phailsta Fullermere Cobmore Dawbeard Yeatledge Tetchoo Howsley Stonefield Eaggows Crawmond Dairva Maystone Spenmas Bronzebeard Eccoogg Plenthains Lochledge Applebow Eppoungs Fishbeard Ardnaw Ramder";
// HouseName = HouseName.split(" ");

// function randomDate(start, end) {
//   return new Date(
//     start.getTime() + Math.random() * (end.getTime() - start.getTime())
//   );
// }
// var urls = [
//   "https://images.pexels.com/photos/106399/pexels-photo-106399.jpeg",
//   "https://psgroup.in/blog/wp-content/uploads/2021/02/photo-1564013799919-ab600027ffc6.jpeg",
//   "https://assets.architecturaldigest.in/photos/62d66f2df8e893c06cec9970/",
//   "https://play-lh.googleusercontent.com/5rS-un965hkZuqUNA65RwkeqmGko91DVQHlAMCQ9lJlNguvXkCQzjl6OgAMOPZ2cCk4",
//   "https://assets.architecturaldigest.in/photos/60083e76274aca243711c3a4/",
//   "https://hgtvhome.sndimg.com/content/dam/images/hgtv/fullset/2019/9/16/0/IO_Tongue-and-Groove_Beech-Street_3.jpg.rend.hgtvcom.616.411.suffix/1568648112267.jpeg",
//   "https://robertelliotthomes.com/wp-content/uploads/2020/11/Luxury-homes-in-Dallas.jpg",
//   "https://2.bp.blogspot.com/-i_3cBb2iHDE/WNtTgJqRGDI/AAAAAAABAs4/xnj-akHm798mfNBdOkN9jkp4yAY-2jaYACLcB/s0/contemporary-home-bangalore.jpg",
// ];
// function generateRandom(min, max) {
//   let difference = max - min;
//   let rand = Math.random();
//   rand = Math.floor(rand * difference);
//   rand = rand + min;
//   return rand;
// }
// var propertyType = [
//   "villa",
//   "bungalow",
//   "craftsman",
//   "house",
//   "home",
//   "cottage",
//   "farmhouse",
//   "villa",
//   "apartments",
//   "townhomes",
// ];

// async function generateData() {
//   let property = {};
//   property.imageurl = urls[Math.floor(Math.random() * urls.length)];
//   property.location = cityName[Math.floor(Math.random() * cityName.length)];
//   property.rent = generateRandom(500, 20000);
//   property.propertytype =
//     propertyType[Math.floor(Math.random() * propertyType.length)];
//   property.title = HouseName[Math.floor(Math.random() * HouseName.length)];
//   property.availability = randomDate(new Date(), new Date(2022, 12, 10));
//   property.arealength = generateRandom(10, 50);
//   property.areabreadth = generateRandom(10, 50);
//   property.bathrooms = generateRandom(2, 20);
//   property.bed = generateRandom(2, 20);
//   property.address =
//     `Street:  ${generateRandom(2,20)}, Saddam Apts, Naya Nagar, Mira Road,${property.location}, ${states[property.location]},PIN ${generateRandom(100001,999999)}`;
//   const res = await Property.create(property);
// }

// for(let i = 0 ;i<2000;i++){
//   generateData();
// }

app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.json({ extended: true }));
app.use("/property", propertyRoutes);

const port = process.env.PORT || 8000;

app.listen(port, function () {
  console.log(`Server Running on Port ${port}`);
});
