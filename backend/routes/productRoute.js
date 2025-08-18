import express from 'express';
import { listProducts, addProduct, removeProduct, singleProduct, updateProduct, searchProducts } from '../controllers/productController.js';
import upload from '../middleware/multer.js';
import adminAuth from '../middleware/adminAuth.js';

const productRouter = express.Router();

// Add product
productRouter.post(
  '/add',
  adminAuth,
  upload.fields([
    { name: 'image1', maxCount: 1 },
    { name: 'image2', maxCount: 1 },
    { name: 'image3', maxCount: 1 },
    { name: 'image4', maxCount: 1 },
  ]),
  addProduct
);

// Update product
productRouter.post(
  '/update',
  adminAuth,
  upload.fields([
    { name: 'image1', maxCount: 1 },
    { name: 'image2', maxCount: 1 },
    { name: 'image3', maxCount: 1 },
    { name: 'image4', maxCount: 1 },
  ]),
  updateProduct
);

// Remove product
productRouter.post('/remove', adminAuth, removeProduct);

// Single product
productRouter.post('/single', singleProduct);

// List products
productRouter.get('/list', listProducts);

// Search products
productRouter.get('/search', searchProducts);

export default productRouter;
