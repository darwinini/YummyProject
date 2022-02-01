//-----pet.model file for Pet Shelter App------------
const mongoose = require("mongoose");


const PetSchema = new mongoose.Schema({



    
    name: {
        type: String,
        required: [true, "The Pet's name is a required field!"],
        minlength: [3, "Pet's name must be at least 3 characters long!"],
        unique: [true, "This name already exist. Names must be unique"]
        
    },

    type: {
        type: String,
        required: [true, "The Pet's type is a required field!"],
        minlength: [3, "Pet's type must be at least 3 characters long!"] 
    },

    description: {
        type: String,
        required: [true, "The Pet's description is a required field!"],
        minlength: [3, "Pet's description must be at least 3 characters long!"] 
        
    },
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


}, {timestamps: true})


const Pet = mongoose.model("Pet", PetSchema);


// PetSchema.pre('save', (next) =>{
//     let pet = this;
//     Pet.find({name: pet.name}, (err, pet_collection)=>{
//         if(!pet_collection.length){
//             next();
//         } else{
//             console.log(`A Pet named: ${pet.name} already exists`);
//             next(new Error("User already exists!!!"));
//         }
//     });
// });


module.exports = Pet;

//End of -----pet.model file for Pet Shelter App------------
