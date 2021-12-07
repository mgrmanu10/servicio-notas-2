const mongoose = require("mongoose");

//const url = "mongodb://localhost/NotasDatabase";
const url = "mongodb://mongo/NotasDatabase";
mongoose.connect(url ,{ 
    useNewUrlParser: true,
    useUnifiedTopology: true
})

const db = mongoose.connection;

db.once("open", ( ) => {
  console.log("Database connected:", url);
});

db.on("error", ( ) => {
  console.error("connection error");
});

module.exports =  mongoose;
