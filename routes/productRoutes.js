import express, { Router } from "express";
import {
    getProduct,
    getProductById,
    saveProduct,
    updateProduct,
    deleteProduct
}from"../controller/productController.js";

router.get('/products', getProduct);
router.get('/products/:id', getProductById);
router.post('/products', saveProduct);
router.patch('/products/:id', updateProduct);
router.delete('/products/:id', deleteProduct);

const router = express.Router();
export default Router;