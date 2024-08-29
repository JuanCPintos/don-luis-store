import { Router } from "express";
import { ProductController } from "../controllers/Product.controller";
import { ProductService } from "../services/Product.service";
import { ProductRepository } from "../repositories/Product.repository";

const productController = new ProductController(new ProductService(new ProductRepository))

const routes = Router()

routes.post("/api/product", productController.createProduct)

export default routes