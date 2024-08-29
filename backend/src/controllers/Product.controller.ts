import { Request, Response } from "express"
import { ProductService } from "../services/Product.service"

export class ProductController {
  private readonly productService: ProductService
  
  constructor(productService: ProductService) {
    this.productService = productService
  }

  async createProduct(req: Request, res: Response) {
    let { name, brand, sector, cost, percentageIncrease } = req.body
    try {
      const newProduct = await this.productService.create(
        {
          name,
          brand,
          sector,
          cost,
          percentageIncrease
        }
      )
      res.send(newProduct)
    } catch (error) {
      throw error
    }
  }
  async getProducts(req: Request, res: Response) {

  }
  async updateProduct(req: Request, res: Response) {

  }
  async deleteProduct(req: Request, res: Response) {

  }

}