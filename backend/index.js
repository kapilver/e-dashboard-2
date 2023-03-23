const express = require('express');
require('./db/config');
const Product = require('./model/Product');
const app = express();
const cors = require('cors');
app.use(cors());
app.use(express.json());

const verifyToken =require('../Backend/middleware/verifyToken');
const loginController = require('./controller/loginController');
const registerController = require('./controller/registerController');
const addProductController = require('./controller/add-productConstroller');
const ProductsController = require('./controller/productsControllrer');
const getProductIdController = require('./controller/get-Product-idController');
const delteProduct = require('./controller/deleteProductController');
const UpdatePorductByID = require('./controller/UpdateProductByIDController');
const searchProduct = require('./controller/searchProduct');





app.post("/register",registerController)

app.post('/login',loginController);

app.post('/add-product', verifyToken, addProductController)

app.get('/products', verifyToken, ProductsController)

app.delete('/product/:id', verifyToken,delteProduct)

app.get('/product/:id', verifyToken, getProductIdController)

app.put('/product/:id', verifyToken,UpdatePorductByID)

app.get('/search/:key', verifyToken,searchProduct )





app.listen(5000);



















