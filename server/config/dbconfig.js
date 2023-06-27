const mongoose = require('mongoose');
const dotenv = require("dotenv");
dotenv.config();
mongoose.connect(process.env.MONGO_URL);

const connections= mongoose.connection;

connections.on('connected',()=>{
    console.log('Database connected successfull')
})

connections.on('error',(err)=>{
    console.log(`Database connected successfull ${err}`)
})

module.exports=connections;