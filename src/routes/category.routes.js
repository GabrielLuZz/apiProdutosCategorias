import { Router } from "express";
import {
  createCategoryController,
  deleteCategoryController,
  listCategoriesController,
  listCategoryController,
  updateCategoryController,
} from "../controllers/category.controllers";

const categoryRoutes = Router();

categoryRoutes.post("", createCategoryController); //createCategory
categoryRoutes.get("/:id", listCategoryController); //listCategory
categoryRoutes.get("", listCategoriesController); //listCategories
categoryRoutes.patch("/:id", updateCategoryController); //updateCategory
categoryRoutes.delete("/:id", deleteCategoryController); //deleteCategory

export default categoryRoutes;
