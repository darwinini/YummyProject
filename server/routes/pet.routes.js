//We object an object of key-value pairs from our controller.
//Rather than writing the ENTIRE function, we simply access it using GameController.findAllGames 
    //(or whatever key corresponds with the route)
const PetController = require("../controllers/pet.controller");


module.exports = (app) => {
    
    //HTTP verb routes  for CRUD operations

    app.get("/api/pets", PetController.displayAllPets);

    app.post("/api/pets", PetController.addNewPetForAdoption);

    app.get("/api/pets/:id", PetController.petDetails); 
    
    app.delete("/api/pets/:id", PetController.adoptPet);

    app.put("/api/pets/:id", PetController.updatePetInformation);


}