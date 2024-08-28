import { useState } from "react";
import { Producto } from "../types/Productos";

const TablaRegistro = () => {

  const[data] = useState<Producto[]>([{ id: 19, nombre: "Café", rubro: "Bebidas", precio: 250.00 },
    { id: 20, nombre: "Té", rubro: "Bebidas", precio: 70.00 },
    { id: 21, nombre: "Zanahoria", rubro: "Verduras", precio: 40.00 }
  ])

  return(
    <>
          {/* escabezado */}
          <div className="p-2">
            <p className="text-2xl">Productos</p>
          </div>
          {/* buscador */}
          <div className="w-full px-2 mb-2 h-[48px]">
            <form action="" method="get" className="w-full">
              <input type="text" placeholder="Buscar" className="w-full pl-4 pb-3 pt-2 text-inherit bg-slate-200 rounded-3xl focus:border-cyan-400"/>
            </form>
          </div>

          {/* tabla */}
          <div className="w-full flex-1 max-h-[460px] overflow-y-auto">
            <table className="w-full">
              <thead className="sticky top-0 bg-slate-50">
                <tr>
                  <th className="text-left pl-3 p-1">Producto</th>
                  <th className="text-left pl-3 p-1">Marca</th>
                  <th className="text-left pl-3 p-1">Rubro</th>
                  <th className="text-left pl-3 p-1">Costo</th>
                  <th className="text-left pl-3 p-1">Precio Final</th>
                  <th className="text-left pl-3 p-1">Porcentaje</th>
                </tr>
              </thead>
              <tbody>
                {data.map((producto)=>(
                  <tr key={producto.id} className="border">
                    <td className="pl-3 p-1 ">{producto.nombre}</td>
                    <td className="border-x pl-3 p-1">{producto.rubro}</td>
                    <td className="border-x pl-3 p-1">{producto.rubro}</td>
                    <td className="border-x pl-3 p-1">{producto.rubro}</td>
                    <td className="border-x pl-3 p-1">{producto.rubro}</td>
                    <td className="pl-3 p-1">{producto.precio}</td>
                  </tr>
                ))}

              </tbody>
            </table>
          </div>
          
        </>
  )
};

export default TablaRegistro;