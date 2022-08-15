import { Router } from "express";
import {
  createProductController,
  deleteProductController,
  listProductController,
  listProductsCategoryController,
  listProductsController,
  updateProductController,
} from "../controllers/product.controllers";

const productRoutes = Router();

productRoutes.post("", createProductController); //createProduct
productRoutes.get("/category/:category_id", listProductsCategoryController); //listProductsCategory
productRoutes.get("/:id", listProductController); //listProduct
productRoutes.get("", listProductsController); //listProducts
productRoutes.patch("/:id", updateProductController); //updateProduct
productRoutes.delete("/:id", deleteProductController); //deleteProduct

export default productRoutes;
