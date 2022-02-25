//-----meal.model file for Yummy Times App------------
const mongoose = require("mongoose");


const MealSchema = new mongoose.Schema({



    
    day: {
        type: String,
        //required: [true, "The day meal name is a required field!"],
        //minlength: [3, "meal's name must be at least 3 characters long!"],
        
        
    },

    meal: {
        type: String,
        //required: [true, "The meal type is a required field!"],
    },

    breakfast1: {
        type: String,
        required: [true, "The side-dish-1's type is a required field!"],
        minlength: [3, "side-dish's type must be at least 3 characters long!"] 
    },

    breakfast2: {
        type: String,
        //required: [true, "The side-dish-2's type is a required field!"],
        minlength: [3, "side-dish's type must be at least 3 characters long!"]  
        
    },

    lunch1: {
        type: String,
        required: [true, "The side-dish-1's type is a required field!"],
        minlength: [3, "side-dish's type must be at least 3 characters long!"] 
    },

    lunch2: {
        type: String,
        //required: [true, "The side-dish-2's type is a required field!"],
        minlength: [3, "side-dish's type must be at least 3 characters long!"]  
        
    },

    dinner1: {
        type: String,
        required: [true, "The side-dish-1's type is a required field!"],
        minlength: [3, "side-dish's type must be at least 3 characters long!"] 
    },

    dinner2: {
        type: String,
        //required: [true, "The side-dish-2's type is a required field!"],
        minlength: [3, "side-dish's type must be at least 3 characters long!"]  
        
    },


    // side3: {
    //     type: String,
    //     //required: [true, "The side-dish-2's type is a required field!"],
    //     minlength: [3, "side-dish's type must be at least 3 characters long!"]  
        
    // },

    

    // day: {
    //     type: Number,
    //     required: [true, "The day of the month is required to store the meal"],
    //     range: [1,30],
        
    // }
    /*
    skill1: {
        type: String,
        required: false
        
    },
    
    skill2: {
        type: String,
        required: false
        
    },

    skill3: {
        type: String,
        required: false
        
    },
    */


}, {timestamps: true})


const Meals = mongoose.model("Meals", MealSchema);


module.exports = Meals;

//End of -----meal.model file for the Yummy Times App------------
