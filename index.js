const express=require('express');

const  mongoose  = require('mongoose');
const port=8000;
const connectDB=require('./config/db');
const app=express();
const productRoutes = require('./routes/productRoutes');
const authRoutes = require('./routes/authRoutes');

// MongoDB Connection
// mongoose.connect('mongodb+srv://amitshringi0786:YisYJAs0Gqw230AR@product.paehf.mongodb.net/?retryWrites=true&w=majority&appName=Product', { useNewUrlParser: true, useUnifiedTopology: true })
//   .then(() => console.log('MongoDB connected'))
//   .catch(err => console.error('MongoDB connection error:', err));

app.use(express.json());


//set up routes
app.use('/', require('./routes/productRoutes'));
connectDB();

app.listen(port, function(err){
    if(err){
        console.log('Error in starting the server', err);
    }

    console.log("Server is running on port: ", port);
});