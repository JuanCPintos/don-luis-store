import mongoose, { Document, Schema, Types } from "mongoose"

export type CreateProduct = Pick<IProduct, "name" | "brand" | "sector" | "cost" | "percentageIncrease">;

export interface IProduct extends Document {
  id: Types.ObjectId
  name: string
  brand: string
  sector: string
  cost: number
  percentageIncrease: number
}

const ProductSchema: Schema = new Schema({
  name: {
    type: String,
    required: true
  },
  brand: {
    type: String,
    default: null
  },
  sector: {
    type: String,
    default: null
  },
  cost: {
    type: Number,
    required: true
  },
  percentageIncrease: {
    type: Number,
    required: true
  }
})

const Product = mongoose.model<IProduct>("Product", ProductSchema)

export default Product