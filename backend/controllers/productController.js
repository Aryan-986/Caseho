import { v2 as cloudinary } from "cloudinary";
import productModel from "../models/productModel.js";

// Add product
const addProduct = async (req, res) => {
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

    // Collect images from multer upload
    const image1 = req.files.image1?.[0];
    const image2 = req.files.image2?.[0];
    const image3 = req.files.image3?.[0];
    const image4 = req.files.image4?.[0];

    const images = [image1, image2, image3, image4].filter(Boolean);

    // Upload images to Cloudinary
    const imagesUrl = await Promise.all(
      images.map(async (file) => {
        const result = await cloudinary.uploader.upload(file.path, { resource_type: "image" });
        return result.secure_url;
      })
    );

    // Prepare product data
    const productData = {
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
      image: imagesUrl,
      date: Date.now(),
    };

    const product = new productModel(productData);
    await product.save();

    res.json({ success: true, message: "Product Added" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ success: false, message: error.message });
  }
};

// Update product
const updateProduct = async (req, res) => {
  try {
    const {
      productId,
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

    const product = await productModel.findById(productId);
    if (!product) {
      return res.json({ success: false, message: "Product not found" });
    }

    // Update basic fields
    if (name) product.name = name;
    if (description) product.description = description;
    if (price) product.price = Number(price);
    if (oldPrice) product.oldPrice = Number(oldPrice);
    if (category) product.category = category;
    if (subCategory) product.subCategory = subCategory;
    if (sizes) product.sizes = JSON.parse(sizes);
    if (models) product.models = JSON.parse(models);
    if(colors) product.colors = JSON.parse(colors);
    if (typeof bestseller !== "undefined") {
      product.bestseller = bestseller === "true";
    }

    // Handle images correctly
    const uploadedImages = [];
    const oldImages = product.image || [];

    for (let i = 1; i <= 4; i++) {
      const key = `image${i}`;
      if (req.files[key]) {
        const result = await cloudinary.uploader.upload(req.files[key][0].path, { resource_type: "image" });
        uploadedImages.push(result.secure_url);
      } else if (oldImages[i - 1]) {
        uploadedImages.push(oldImages[i - 1]); // keep existing image only if it exists
      }
    }

    // Assign only actual images
    product.image = uploadedImages.filter(Boolean);

    await product.save();

    res.json({ success: true, message: "Product updated successfully" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ success: false, message: error.message });
  }
};

// List products
const listProducts = async (req, res) => {
  try {
    const products = await productModel.find({});
    res.json({ success: true, products });
  } catch (error) {
    console.error(error);
    res.status(500).json({ success: false, message: error.message });
  }
};

// Remove product
const removeProduct = async (req, res) => {
  try {
    await productModel.findByIdAndDelete(req.body.id);
    res.json({ success: true, message: "Product Removed" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ success: false, message: error.message });
  }
};

// Single product info
const singleProduct = async (req, res) => {
  try {
    const { productId } = req.body;
    const product = await productModel.findById(productId);
    res.json({ success: true, product });
  } catch (error) {
    console.error(error);
    res.status(500).json({ success: false, message: error.message });
  }
};

export { listProducts, addProduct, updateProduct, removeProduct, singleProduct };
