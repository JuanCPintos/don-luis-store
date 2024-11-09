import { Request, Response } from "express"
import { ProductService } from "../services/Product.service"

export class ProductController {
  private readonly productService: ProductService

  constructor(productService: ProductService) {
    this.productService = productService
  }

  createProduct = async (req: Request, res: Response) => {
    let { name, brand, sector, cost, percentageIncrease } = req.body

    console.log(req.body)

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

  getProducts = async (req: Request, res: Response) => {
    try {
      // console.log('la query es: ', req.query)
      const { query } = req.query as { query: string }
      const result = await this.productService.getAll(query)


      res.send(result)
    } catch (error) {
      throw error
    }
  }

  async updateProduct(req: Request, res: Response) {

  }
  async deleteProduct(req: Request, res: Response) {

  }

}