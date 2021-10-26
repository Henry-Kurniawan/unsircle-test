// npm run dev => to start with NODE_ENV = development
if (process.env.NODE_ENV === 'development') {
    require('dotenv').config();
}

const express = require('express');
const app = express();
const router = require('./routes');
const cors = require('cors');


app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get('/', (req, res) => {
    res.send('Connected !');
});

app.use(router);

module.exports = app;

/*
sequelize model:generate --name Inventory --attributes name:string,type:string,stock:integer,price:integer,status:string,OwnerId:integer
*/