import express from 'express'
import { listProducts, addProduct, removeProduct, singleProduct } from '../controllers/productController.js'
import upload from '../middleware/multer.js'
import adminAuth from '../middleware/adminAuth.js'

const productRouter = express.Router()

// Add a product (admin only, with image uploads)
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
)

// Remove a product (admin only)
productRouter.post('/remove', adminAuth, removeProduct)

// Get single product info (public)
productRouter.post('/single', singleProduct)

// List all products (public)
productRouter.get('/list', listProducts)

export default productRouter
