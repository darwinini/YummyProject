//We object an object of key-value pairs from our controller.
//Rather than writing the ENTIRE function, we simply access it using GameController.findAllGames 
    //(or whatever key corresponds with the route)
const MealController = require("../controllers/meal.controller");


module.exports = (app) => {
    
    //HTTP verb routes  for CRUD operations

    app.get("/api/meals", MealController.displayAllMeals);

    //will use the specific route day instead
    app.post("/api/meals/", MealController.addNewMeals);

    //adding a route for each day of the week
    //so we can have: api/meals/sunday
    //so we can have: api/meals/monday
    //app.post("/api/meals/:day", MealController.addNewMeals);

    app.get("/api/meals/:id", MealController.mealDetails); 
    
    app.delete("/api/meals/:id", MealController.deleteMeal);

    app.put("/api/meals/:id", MealController.updateMealInformation);


}