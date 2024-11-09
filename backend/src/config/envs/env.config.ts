// import 'dotenv/env'
import {get} from 'env-var'
import dotenv from 'dotenv';
dotenv.config();

export const envs = {
  DB_URI:get("DB_URI").required().asString(),
  PORT:get("PORT").required().asPortNumber(),
  FRONTEND_URL:get("FRONTEND_URL").required().asString(),
}