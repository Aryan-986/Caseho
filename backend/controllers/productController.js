import { v2 as cloudinary } from "cloudinary";
import productModel from "../models/productModel.js";

// Upload images to Cloudinary
const uploadImages = async (files) => {
  const uploadedUrls = [];
  for (let i = 1; i <= 4; i++) {
    const key = `image${i}`;
    if (files[key]) {
      const result = await cloudinary.uploader.upload(files[key][0].path, { resource_type: "image" });
      uploadedUrls.push(result.secure_url);
    }
  }
  return uploadedUrls;
};

// Add product
export const addProduct = async (req, res) => {
  try {
    const {
      name,
      description,
      price,
      oldPrice,
      category,
      subCategory,
      sizes,
      bestseller,
      models,
      colors,
    } = req.body;

    const images = await uploadImages(req.files);

    const product = new productModel({
      name,
      description,
      category,
      subCategory,
      price: Number(price),
      oldPrice: oldPrice ? Number(oldPrice) : null,
      bestseller: bestseller === "true",
      sizes: sizes ? JSON.parse(sizes) : [],
      models: models ? JSON.parse(models) : [],
      colors: colors ? JSON.parse(colors) : [],
      image: images,
      date: Date.now(),
    });

    await product.save();
    res.json({ success: true, message: "Product Added", product });
  } catch (error) {
    console.error(error);
    res.status(500).json({ success: false, message: error.message });
  }
};

// Update product
export const updateProduct = async (req, res) => {
  try {
    const { productId, name, description, price, oldPrice, category, subCategory, sizes, bestseller, models, colors } = req.body;

    const product = await productModel.findById(productId);
    if (!product) return res.status(404).json({ success: false, message: "Product not found" });

    if (name) product.name = name;
    if (description) product.description = description;
    if (price) product.price = Number(price);
    if (oldPrice) product.oldPrice = Number(oldPrice);
    if (category) product.category = category;
    if (subCategory) product.subCategory = subCategory;
    if (sizes) product.sizes = JSON.parse(sizes);
    if (models) product.models = JSON.parse(models);
    if (colors) product.colors = JSON.parse(colors);
    if (typeof bestseller !== "undefined") product.bestseller = bestseller === "true";

    // Handle images
    const uploadedImages = await uploadImages(req.files);
    if (uploadedImages.length > 0) {
      const oldImages = product.image || [];
      for (let i = 0; i < 4; i++) {
        product.image[i] = uploadedImages[i] || oldImages[i];
      }
    }

    await product.save();
    res.json({ success: true, message: "Product updated successfully", product });
  } catch (error) {
    console.error(error);
    res.status(500).json({ success: false, message: error.message });
  }
};

// List products
export const listProducts = async (req, res) => {
  try {
    const products = await productModel.find({});
    res.json({ success: true, products });
  } catch (error) {
    console.error(error);
    res.status(500).json({ success: false, message: error.message });
  }
};

// Remove product
export const removeProduct = async (req, res) => {
  try {
    const { id } = req.body;
    await productModel.findByIdAndDelete(id);
    res.json({ success: true, message: "Product Removed" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ success: false, message: error.message });
  }
};

// Single product
export const singleProduct = async (req, res) => {
  try {
    const { productId } = req.body;
    const product = await productModel.findById(productId);
    res.json({ success: true, product });
  } catch (error) {
    console.error(error);
    res.status(500).json({ success: false, message: error.message });
  }
};

// Search products
export const searchProducts = async (req, res) => {
  try {
    const { query } = req.query;
    if (!query) return res.status(400).json({ success: false, message: "No search query provided" });

    const products = await productModel.find({
      $or: [
        { name: { $regex: query, $options: "i" } },
        { models: { $regex: query, $options: "i" } },
      ],
    });

    res.json({ success: true, products });
  } catch (error) {
    console.error(error);
    res.status(500).json({ success: false, message: error.message });
  }
};

// Get product by category
export const getProductByCategory = async (req, res) => {
  try {
    const { category } = req.params;
    const products = await productModel.find({ category });
    res.json({ success: true, products });
  } catch (error) {
    console.error(error);
    res.status(500).json({ success: false, message: error.message });
  }
};
