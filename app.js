const express = require('express');
const dotenv = require('dotenv');
const cors =  require('cors')
const morgan = require('morgan')

const CategoriesRouter = require('./routes/categories');

//running function 
dotenv.config();
const app = express();

// middleware
app.use(express.json());
app.use(morgan('dev'));
app.use(cors());
// app.use((req,res,next) => {
//     req.requestTime = new Date().toISOString()
//     next()
// })

const PORT = process.env.PORT
const api = process.env.API_URL

// route
app.use(`${api}/categories`, CategoriesRouter);

// server
app.listen(PORT, ()=> {
    console.log(`Server Running At Port ${PORT}`);
});