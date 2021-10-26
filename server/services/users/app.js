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
sequelize model:generate --name User --attributes email:string,password:string,name:string
sequelize model:generate --name Permission --attributes type:string,status:string
sequelize model:generate --name UserPermission --attributes UserID:integer,PermissionId:integer,status:string
*/