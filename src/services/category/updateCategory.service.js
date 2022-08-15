import database from "../../database";

const updateCategoryService = async (id, category) => {
  try {
    const res = await database.query(
      `
      UPDATE
        categories
      SET
        name = $1
      WHERE
        id = $2
      RETURNING *;
      `,
      [category, id]
    );

    if (res.rowCount === 0) {
      throw new Error("Category not found");
    }

    return {
      message: "Category updated",
      category: res.rows[0],
    };
  } catch (err) {
    throw new Error(err);
  }
};

export default updateCategoryService;
