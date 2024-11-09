import { CorsOptions } from "cors";
import { envs } from "../envs/env.config";


const whiteList: (string | undefined)[] = [envs.FRONTEND_URL]; // Agrega aquí todas las URLs necesarias


export const corsConfig: CorsOptions = {
  origin: function (origin, callback) {
    console.log(origin);
    console.log(whiteList)
    
    if (process.argv[2] === "--api") {
      whiteList.push(undefined);
    }
    if (!origin || whiteList.includes(origin!)) {
      callback(null, true);
    } else {
      callback(new Error("Error de cors"));
    }
  },
  credentials: true,
}