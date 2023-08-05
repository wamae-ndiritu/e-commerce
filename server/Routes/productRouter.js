const express = require("express");
const asyncHandler = require("express-async-handler");
const { protect, admin } = require("../Middlewares/authMiddleware");
const { Product } = require("../Models/productModel");

const productRouter = express.Router();

// CREATE PRODUCT
productRouter.post(
  "/",
  protect,
  asyncHandler(async (req, res) => {
    const product = req.body;
    console.log(product);
    const productName = product.productName;
    const price = product.price;
    const productImages = product.productImages;
    const description = product.description;
    const categories = product.categories;
    const brands = product.brands;
    const suppliers = product.suppliers;
    const quantities = product.quantities;
    const variation = product.variation;

    const productExist = await Product.findOne({ productName });
    if (productExist) {
      res
        .status(400)
        .json({ message: "Product with the title already exists" });
    } else {
      const newproduct = new Product({
        productName,
        price,
        productImages,
        description,
        categories,
        brands,
        suppliers,
        quantities,
        variation,
        user: req.user._id,
      });
      if (newproduct) {
        const createdproduct = await newproduct.save();
        res.status(201).json(createdproduct);
      } else {
        res.status(400).json({ message: "Invalid product data" });
      }
    }
  })
);

// GET ALL PRODUCT
productRouter.get(
  "/",
  asyncHandler(async (req, res) => {
    const pageSize = 24;
    const page = Number(req.query.pageNumber) || 1;
    const keyword = req.query.keyword
      ? {
          productName: {
            $regex: req.query.keyword,
            $options: "i",
          },
        }
      : {};
    // const minPrice = Number(req.query.minPrice) || 1;
    // const maxPrice = Number(req.query.maxPrice) || 10000;

    const count = await Product.countDocuments({
      ...keyword,
    });

    const products = await Product.find({
      ...keyword,
    })
      .limit(pageSize)
      .skip(pageSize * (page - 1))
      .sort({ _id: -1 });
    res.json({ products, page, pages: Math.ceil(count / pageSize) });
  })
);

// GET SINGLE PRODUCT
productRouter.get(
  "/:id",
  asyncHandler(async (req, res) => {
    const id = req.params.id;
    if (id !== " ") {
      const product = await Product.findById(req.params.id);
      if (product) {
        res.json(product);
      } else {
        res.status(404).json({ message: "Product not found!" });
      }
    }
  })
);

// GET SIMILAR PRODUCTS
productRouter.get("/similar/:id", async (req, res) => {
  const pageSize = 12;
  const product = await Product.findById(req.params.id);

  if (product) {
    const catArray = product.categories;
    const similarProducts = await Product.find({
      categories: { $in: catArray },
    })
      .limit(pageSize)
      .sort({ _id: -1 });
    res.json(similarProducts);
  }
});

productRouter.post("/name", (req, res) => {
  res.json({ name: "Wamae" });
});

// DELETE PRODUCTS
productRouter.delete("/delete", async (req, res) => {
  const products = await Product.deleteMany({});
  if (products) {
    res.status(200).json({ message: "product deleted" });
  }
});

// ADMIN GET ALL PRODUCT WITHOUT SEARCH AND PEGINATION
productRouter.get(
  "/all/products",
  protect,
  admin,
  asyncHandler(async (req, res) => {
    const products = await Product.find({}).sort({ _id: -1 });
    res.json(products);
  })
);

// ADMIN GET SINGLE PRODUCT
productRouter.get("/admin/products/:id", protect, admin, async (req, res) => {
  const id = req.params.id;

  const product = await Product.findById(id);
  if (product) {
    res.status(200).json(product);
  }
});

module.exports = { productRouter };
