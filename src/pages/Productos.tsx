// import { useState } from "react";
import { useState } from "react";
import TablaProductos from "../components/TablaProductos";
import { Producto } from "../types/Productos";




const Productos = () => {
  const[data] = useState<Producto[]>([{ id: 19, nombre: "Café", rubro: "Bebidas", precio: 250.00 },
    { id: 20, nombre: "Té", rubro: "Bebidas", precio: 70.00 },
    { id: 21, nombre: "Zanahoria", rubro: "Verduras", precio: 40.00 }])

  return(
    <div className="w-full h-full grid grid-cols-12 text-xl">
      <div className="col-span-7 h-full border w-full">
        <TablaProductos/>
      </div>
      <div className="w-full col-span-5 border">
        <div className="w-full p-2 flex justify-between">
          <p className="text-2xl">Carrito</p>
          <p className="content-center">Icono</p>
        </div>
        <div className="w-full">
          <table className="w-full">
            <thead className="sticky top-0 bg-slate-50">
              <tr>
                <th className="text-left pl-3 p-1">Producto</th>
                <th className="text-left pl-3 p-1">Cantidad</th>
                <th className="text-left pl-3 p-1">Precio</th>
              </tr>
            </thead>
            <tbody>
              {data.map((producto)=>(
                <tr key={producto.id} className="border">
                  <td className="pl-3 p-1 ">{producto.nombre}</td>
                  <td className="border-x pl-3 p-1">{producto.rubro}</td>
                  <td className="pl-3 p-1">{producto.precio}</td>
                </tr>
              ))}

            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
};

export default Productos;