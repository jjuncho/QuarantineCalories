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
    Calories : {
        type : String,
        required : "Required"
    },
    Date :{
        type : Date,
        required : "Required"
    },
    Meal :{
        type: Number,
        required: "Required"
    }
}, {collection : 'food'}
);

mongoose.model("food", foodSchema)