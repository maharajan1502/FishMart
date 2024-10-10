// server.js
const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser')
const app = express();
const PORT = 5000;
import './db';
app.use(cors());
app.use(bodyParser.json());

const products = [
    { id: 1, name: 'Salmon', price: '$10.00' },
    { id: 2, name: 'Tuna', price: '$12.00' },
    { id: 3, name: 'Trout', price: '$8.00' },
    { id: 1, name: 'Salmon', price: '$10.00' },
    { id: 2, name: 'Tuna', price: '$12.00' },
    { id: 3, name: 'Trout', price: '$8.00' },
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
