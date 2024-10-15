// server.js

//IF YOU WANT TO RUN THIS SERVER PLEASE INTSALL THIS COMMENTS
//npm intsall
//npm i express cors

const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser')
const app = express();
const PORT = 5000;
const connectToDatabas = require('./config/db')
app.use(cors());
app.use(bodyParser.json());
connectToDatabas();                 //DATA BASE CONNECTION
const User = require('./model/userModel');
const ProductModel = require('./model/productModel');
const products = [
    { id: 1, name: 'Salmon', price: '$10.00', url:'images/salmon.jpg' },
    { id: 2, name: 'Tuna', price: '$12.00' , url:'images/tuna.jpg' },
    { id: 3, name: 'Sardine', price: '$8.00',url:'images/sardine.jpg'},
    { id: 1, name: 'Herring', price: '$10.00' , url:'images/herring.jpg' },
    { id: 2, name: 'Crab', price: '$12.00', url:'images/crab.jpeg'},
    { id: 3, name: 'Prawn', price: '$8.00', url:'images/prawn.jpg'},
    { id: 1, name: 'Salmon', price: '$10.00', url:'images/salmon.jpg' },
    { id: 2, name: 'Tuna', price: '$12.00' , url:'images/tuna.jpg' },
    { id: 3, name: 'Sardine', price: '$8.00',url:'images/sardine.jpg'},
    { id: 1, name: 'Herring', price: '$10.00' , url:'images/herring.jpg' },
    { id: 2, name: 'Crab', price: '$12.00', url:'images/crab.jpeg'},
    { id: 3, name: 'Prawn', price: '$8.00', url:'images/prawn.jpg'},
    { id: 1, name: 'Salmon', price: '$10.00', url:'images/salmon.jpg' },
    { id: 2, name: 'Tuna', price: '$12.00' , url:'images/tuna.jpg' },
    { id: 3, name: 'Sardine', price: '$8.00',url:'images/sardine.jpg'},
    { id: 1, name: 'Herring', price: '$10.00' , url:'images/herring.jpg' },
    { id: 2, name: 'Crab', price: '$12.00', url:'images/crab.jpeg'},
    { id: 3, name: 'Prawn', price: '$8.00', url:'images/prawn.jpg'},
];

app.get('/api/products', (req, res) => {
    res.json(products);
});

app.post('/api/contact', (req, res) => {
    console.log('Contact Form Submission:', req.body);
    res.status(200).send('Message received!');
});

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});

