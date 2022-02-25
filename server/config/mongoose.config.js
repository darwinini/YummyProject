//-----mongoose.config.js file for the Yummy Times App------------

//invoke mongoose
const mongoose = require("mongoose");

//name of database for Yummy Times App
const dbName = "dbMeals";


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

//-----End of ------ mongoose.config.js file for Yummy Times App------------