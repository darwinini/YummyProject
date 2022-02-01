//-----mongoose.config.js file for Pet Shelter App------------

//invoke mongoose
const mongoose = require("mongoose");

//name of database for Pet Shelter App
const dbName = "dbPetShelter";


mongoose.connect(`mongodb://localhost/${dbName}`, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
    .then(()=>{
        
        console.log(`You have successfully connected to database: ${dbName}`)
    })
    .catch((err)=>{
        console.log(`Connection to the ${dbName} FAILED! ERROR:`, err)
    })

//-----End of ------ mongoose.config.js file for Pet Shelter App------------