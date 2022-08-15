import createCategoryService from "../services/category/createCategory.service";
import deleteCategoryService from "../services/category/deleteCategory.service";
import listCategoriesService from "../services/category/listCategories.servie";
import listCategoryService from "../services/category/listCategory.service";
import updateCategoryService from "../services/category/updateCategory.service";

const createCategoryController = async (req, res) => {
  const { name: category } = req.body;

  try {
    const newCategory = await createCategoryService(category);

    return res.status(201).json(newCategory);
  } catch (err) {
    return res.status(400).json({
      message: err.message,
    });
  }
};

const listCategoryController = async (req, res) => {
  const { id } = req.params;
  try {
    const category = await listCategoryService(id);

    return res.json(category);
  } catch (err) {
    return res.status(400).json({
      message: err.message,
    });
  }
};

const listCategoriesController = async (req, res) => {
  try {
    const categories = await listCategoriesService();

    return res.json(categories);
  } catch (err) {
    return res.status(400).json({
      message: err.message,
    });
  }
};

const updateCategoryController = async (req, res) => {
  const { id } = req.params;
  const { name: category } = req.body;

  try {
    const result = await updateCategoryService(id, category);

    return res.json(result);
  } catch (err) {
    return res.status(400).json({
      message: err.message,
    });
  }
};

const deleteCategoryController = async (req, res) => {
  const { id } = req.params;

  try {
    await deleteCategoryService(id);

    return res.status(204).json();
  } catch (err) {
    return res.status(400).json({
      message: err.message,
    });
  }
};

export {
  createCategoryController,
  listCategoryController,
  listCategoriesController,
  updateCategoryController,
  deleteCategoryController,
};
