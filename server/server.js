const express = require('express');
const connections = require('./config/dbconfig');
const UserRoutes = require('./routes/user.Route')
const MenuRoutes = require('./routes/menu.Route')
const PaymentRoutes = require('./routes/payment.Routes')
const app = express();
app.use(express.json());



const port = process.env.PORT || 8080;
app.use('/api/user',UserRoutes)
app.use('/api/menu',MenuRoutes)
app.use('/api/payment',PaymentRoutes)


// deployemnet configuration

const path = require('path');
__dirname=path.resolve();
// render deployment

if(process.env.NODE_ENV === 'production'){
    app.use(express.static(path.join(__dirname,'/client/build')));
    app.get('*', (req,res)=>{
        res.sendFile(path.join(__dirname,'client','build','index.html'));
    });
}





app.listen(port,()=>{
    console.log(`listening on port number ${port}`);
})