import Product, { CreateProduct, IProduct } from "../models/Product.model";

export class ProductRepository {
  constructor(private readonly ProductModel = Product) { }

  async create(product: CreateProduct) {
    try {
      const newProduct = await this.ProductModel.create(product)
      return newProduct
    } catch (error) {
      throw error
    }
  }
  async getById(id: string): Promise<IProduct | null> {
    try {
      const product = await this.ProductModel.findById<IProduct>(id)
      return product
    } catch (error) {
      throw error
    }
  }
  async getAll(query: string): Promise<IProduct[]> {
    try {
      if (query) {
        const products: IProduct[] = await this.ProductModel.find<IProduct>({
          name: new RegExp(query, 'i')
        })
        return products
      }
      const products: IProduct[] = await this.ProductModel.find<IProduct>({})

      return products
    } catch (error) {
      throw error
    }
  }

  async update() {

  }
  async delete() {

  }

}