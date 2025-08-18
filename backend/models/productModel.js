import mongoose from "mongoose";

const productSchema = new mongoose.Schema(
  {
    name: { type: String, required: true, trim: true },
    description: { type: String, required: true, trim: true },
    price: { type: Number, required: true },
    oldPrice: { type: Number, default: null },
    image: { type: [String], default: [] },
    category: { type: String, trim: true },
    subCategory: { type: String, trim: true },
    sizes: { type: [String], default: [] },
    colors: { type: [String], default: [] },
    bestseller: { type: Boolean, default: false },
    date: { type: Number, required: true },
    models: { type: [String], default: [] },
  },
  {
    timestamps: true,
  }
);

const productModel =
  mongoose.models.product || mongoose.model("product", productSchema);

export default productModel;
