import { Router } from "express";
import { ProductController } from "../controllers/Product.controller";
import { ProductService } from "../services/Product.service";
import { ProductRepository } from "../repositories/Product.repository";

const productRepository = new ProductRepository()
const productService = new ProductService(productRepository)
const productController = new ProductController(productService)

const routes = Router()

routes.get("/api/product", productController.getProducts)
routes.post("/api/product", productController.createProduct)


export default routes