import { CreateProduct } from "../models/Product.model"
import { ProductRepository } from "../repositories/Product.repository"

export class ProductService {
  private readonly productRepository: ProductRepository
  constructor(productRepository: ProductRepository) {
    this.productRepository = productRepository
  }

  async create(product: CreateProduct) {
    try {
      const newProduct = await this.productRepository.create(product)
      return {
        status: "success",
        payload: newProduct
      }
    } catch (error) {
      throw error
    }
  }

  async getById() { }

  async getAll(query:string='') {
    try {
      const response = await this.productRepository.getAll(query)
      return {
        status: "success",
        payload: response
      }
    } catch (error) {
      throw error
    }
  }
  async update() { }
  async delete() { }



}