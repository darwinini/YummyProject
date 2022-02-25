//-----meal.controller file for the Yummy Times App------------

//Each CRUD requirement is implemented below

const Meals = require('../models/meal.model');


module.exports = {


    //CRUD: Display all of the foods currently available for the Yummy Times Meal Plan.
    // This controls logic will also sort the list of pets 
    displayAllMeals: (req, res) =>{
    
        Meals.find({})
            .then((allMeals)=>{
                console.log(allMeals);
                res.json(allMeals);
            })
            .catch((err)=>{
                console.log("Displaying All Meals has FAILED");
                res.json({message: "Something went wrong with displayAllMeals", error: err})
            })
    },

    //CRUD: Users can add pets to be put up for adoption (user can create pets)
    addNewMeals: (req, res)=>{
        Meals.create(req.body)
            .then((newMeal)=>{
                console.log(newMeal);
                res.json(newMeal)
            })
            .catch((err)=>{
                console.log("Something went wrong with adding new meals");
                
                res.status(400).json(err);
            })
    },

    //CRUD: A pet details page exists that displays information about that pet
    mealDetails: (req, res)=>{
        Meals.findOne({_id: req.params.id}) 
            .then((detailMeal)=>{
                console.log(detailMeal);
                res.json(detailMeal)
            })
            .catch((err)=>{
                console.log("Find One Meal failed");
                res.json({message: "Something went wrong loading MealDetails", error: err})
            })
    },


    //CRUD: Users can delete which will remove it from the database 
    deleteMeal: (req, res)=>{
        Meals.deleteOne({_id: req.params.id})
            .then((deleted)=>{
                console.log(deleted);
                res.json(deleted)
            })
            .catch((err)=>{
                console.log(`We are sorry, but the deletion of ${deleted} Meal did not go through`);
                res.json({message: "The deletion of the Meal did NOT take place", error: err})
            })
    },
    
    //CRUD: Users can update the information about a meal 
    updateMealInformation: (req, res)=>{
        Meals.findOneAndUpdate({_id: req.params.id},
            req.body,
            //These options return a new doc and allow schema valids to run on PUT req
            {new: true, runValidators: true} 
            )
            .then((updatedMeal)=>{
                console.log(updatedMeal);
                res.json(updatedMeal)
            })
            .catch((err)=>{
                console.log("Something went wrong with updateMealInformation");
                res.status(400).json(err); 
            })
    }

}

//-----meal.controller file for Yummy Times App------------
