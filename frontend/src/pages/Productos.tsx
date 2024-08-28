// import { useState } from "react";
import TablaProductos from "../components/TablaProductos";
// import { Producto } from "../types/Productos";
import TablaCarrito from "../components/TablaCarrito";




const Productos = () => {
  

  return(
    <div className="w-full h-full grid grid-cols-12 text-xl">

      {/* parte izquierda */}
      <div className="col-span-7 h-full border w-full">
        <TablaProductos/>
      </div>


      {/* parte derecha */}
      <div className="w-full flex flex-col col-span-5 border">
        <TablaCarrito/>
      </div>
    </div>
  )
};

export default Productos;