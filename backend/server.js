const express = require('express');
const app = express();
const db = require('./config/db');
const adminrouter = require('./router/adminRouter')
const userrouter = require('./router/userRouter')
const port = 5000;


db(()=>{
    try{
        console.log("Database successfully Connected");
    }catch (error) {
        console.log("Database Not Connected :",error);
    }
});

app.use(express.json({limit: '50mb'}));
app.use('/user',userrouter);
app.use('/admin',adminrouter);

app.listen(port,()=>{
    console.log('server started ❤❤❤❤');
})