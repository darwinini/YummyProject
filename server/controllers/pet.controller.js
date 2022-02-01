//-----pet.controller file for Pet Shelter App------------

//Each CRUD requirement is implemented below

const Pet = require('../models/pet.model');


module.exports = {


    //CRUD: Display all of the pets currently available to be adopted.
    // This controls logic will also sort the list of pets 
    displayAllPets: (req, res) =>{
    
        Pet.find({}).collation({locale:'en', strength: 2}).sort({name:1})
            .then((allPets)=>{
                console.log(allPets);
                res.json(allPets);
            })
            .catch((err)=>{
                console.log("Displaying All Pets has FAILED");
                res.json({message: "Something went wrong with displayAllPets", error: err})
            })
    },

    //CRUD: Users can add pets to be put up for adoption (user can create pets)
    addNewPetForAdoption: (req, res)=>{
        Pet.create(req.body)
            .then((newPet)=>{
                console.log(newPet);
                res.json(newPet)
            })
            .catch((err)=>{
                console.log("Something went wrong with putNewPetForAdoption");
                
                res.status(400).json(err);
            })
    },

    //CRUD: A pet details page exists that displays information about that pet
    petDetails: (req, res)=>{
        Pet.findOne({_id: req.params.id}) 
            .then((detailPet)=>{
                console.log(detailPet);
                res.json(detailPet)
            })
            .catch((err)=>{
                console.log("Find One Game failed");
                res.json({message: "Something went wrong loading petDetails", error: err})
            })
    },


    //CRUD: Users can adopt a pet which will remove it from the database 
    adoptPet: (req, res)=>{
        Pet.deleteOne({_id: req.params.id})
            .then((adopted)=>{
                console.log(adopted);
                res.json(adopted)
            })
            .catch((err)=>{
                console.log(`We are sorry, but the adoption of ${adopted} Pet did not go through`);
                res.json({message: "The adoption of the Pet did NOT take place", error: err})
            })
    },
    
    //CRUD: Users can update the information about a pet 
    updatePetInformation: (req, res)=>{
        Pet.findOneAndUpdate({_id: req.params.id},
            req.body,
            //These options return a new doc and allow schema valids to run on PUT req
            {new: true, runValidators: true} 
            )
            .then((updatedPet)=>{
                console.log(updatedPet);
                res.json(updatedPet)
            })
            .catch((err)=>{
                console.log("Something went wrong with updatePetInformation");
                res.status(400).json(err); 
            })
    }

}

//-----pet.controller file for Pet Shelter App------------
