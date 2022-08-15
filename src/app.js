import express from "express";
import "dotenv/config";
import categoryRoutes from "./routes/category.routes";
import productRoutes from "./routes/product.routes";
import { startDatabase } from "./database";

const app = express();

app.use(express.json());

app.use("/categories", categoryRoutes);
app.use("/products", productRoutes);

export default app.listen(process.env.PORT || 3333, () => {
  console.log("Server running");
  startDatabase();
});
