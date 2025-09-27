const mongoose = require("mongoose");
const initData = require("./data.js");
const Listing = require("../models/listing.js");

main().then(()=>{
    console.log("connected to DB");
}).catch((err)=>{
    console.log(err);
});

async function main(){
await mongoose.connect('mongodb://127.0.0.1:27017/wonderlust');
};
const initDB = async()=>{
     await Listing.deleteMany({});
     initData.data = initData.data.map((obj) =>({...obj,
        owner: "68d4f8b99c69775df39c29b0",
     }))
     await Listing.insertMany(initData.data);
     console.log("data was initialized");
};

initDB();