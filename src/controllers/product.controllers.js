import createProductService from "../services/product/createProduct.service";
import deleteProductService from "../services/product/deleteProduct.service";
import listProductService from "../services/product/listProduct.service";
import listProductsService from "../services/product/listProducts.service";
import listProductsCategoryService from "../services/product/listProductsCategory.service";
import updateProductService from "../services/product/updateProduct.service";

const createProductController = async (req, res) => {
  const product = req.body;

  try {
    const newProduct = await createProductService(product);

    return res.status(201).json(newProduct);
  } catch (err) {
    return res.status(400).json({
      message: err.message,
    });
  }
};

const listProductsCategoryController = async (req, res) => {
  const { category_id } = req.params;
  try {
    const products = await listProductsCategoryService(category_id);

    return res.json(products);
  } catch (err) {
    return res.status(400).json({
      message: err.message,
    });
  }
};

const listProductController = async (req, res) => {
  const { id } = req.params;
  try {
    const product = await listProductService(id);

    return res.json(product);
  } catch (err) {
    return res.status(400).json({
      message: err.message,
    });
  }
};

const listProductsController = async (req, res) => {
  try {
    const products = await listProductsService();

    return res.json(products);
  } catch (err) {
    return res.status(400).json({
      message: err.message,
    });
  }
};

const updateProductController = async (req, res) => {
  const { id } = req.params;
  const product = req.body;

  try {
    const result = await updateProductService(id, product);

    return res.json(result);
  } catch (err) {
    return res.status(400).json({
      message: err.message,
    });
  }
};

const deleteProductController = async (req, res) => {
  const { id } = req.params;

  try {
    await deleteProductService(id);

    return res.status(204).json();
  } catch (err) {
    return res.status(400).json({
      message: err.message,
    });
  }
};

export {
  createProductController,
  listProductsCategoryController,
  listProductController,
  listProductsController,
  updateProductController,
  deleteProductController,
};
