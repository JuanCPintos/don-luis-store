import mongoose, { Document, Schema, Types } from "mongoose"

export interface IProducto extends Document{
  id: Types.ObjectId
  name: string
  brand: string
  sector: string
  cost: number
  percentageIncrease: number
}

const ProductoSchema: Schema = new Schema({
  name: {
    type: String,
    required: true
  },
  brand: {
    type: String,
    default: null
  },
  sector:{
    type:String,
    default: null
  },
  cost:{
    type: Number,
    required: true
  },
  percentageIncrease:{
    type: Number,
    required:true
  }
})

const Product = mongoose.model<IProducto>("Product", ProductoSchema)

export default Product