const mongoose = require("mongoose");

var foodSchema = new mongoose.Schema({
    username : {
        type : String,
        required : "Required"
    },
    food : {
        type : String,
        required : "Required"
    },
    calories : {
        type : String,
        required : "Required"
    },
    date :{
        type : String,
        required : "Required"
    },

}, {collection : 'food'}
);

module.exports =mongoose.model("food", foodSchema)