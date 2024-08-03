const express = require('express');
const connectToDb = require('./configs/db');

const app = express();

require('dotenv').config();

const port = process.env.PORT || 8181

const db_url = process.env.MONGO_URI;

app.use(express.json());

app.get('', (req,res)=>{
    res.send('this is home route')
})

// Routes
app.use('/api/auth', require('./routes/authRoutes'));
app.use('/api/countries', require('./routes/countryRoutes'));
app.use('/api/favorites', require('./routes/favoriteRoutes'));
app.use('/api/history', require('./routes/historyRoutes'));

app.listen(port, async()=>{
    try{
        await connectToDb(db_url)
        console.log('connected to the Database')
        console.log(`server is Running at the port ${port}`)
    }
    catch(error){
        console.log(error)
    }
})