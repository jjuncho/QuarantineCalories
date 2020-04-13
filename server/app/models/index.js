
const dbConfig = require("../config/db.config.js");

const mongoose = require("mongoose");
mongoose.Promise = global.Promise;

const db = {};
db.mongoose = mongoose;
db.url = dbConfig.url;
// example on how to import schemas from db
db.example = require("./tutorial.model.js")(mongoose);

module.exports = db;