import { useState } from "react";
import { Producto } from "../types/Productos";


const TablaProduco = () =>{

  const [productos] = useState<Producto[]>([
    { id: 1, nombre: "Leche", rubro: "Lácteos", precio: 120.00 },
    { id: 2, nombre: "Pan", rubro: "Panadería", precio: 80.00 },
    { id: 3, nombre: "Manzana", rubro: "Frutas", precio: 50.00 },
    { id: 4, nombre: "Arroz", rubro: "Cereales", precio: 100.00 },
    { id: 5, nombre: "Pollo", rubro: "Carnes", precio: 350.00 },
    { id: 6, nombre: "Yogur", rubro: "Lácteos", precio: 90.00 },
    { id: 7, nombre: "Tomate", rubro: "Verduras", precio: 60.00 },
    { id: 8, nombre: "Queso", rubro: "Lácteos", precio: 250.00 },
    { id: 9, nombre: "Huevos", rubro: "Huevos y Derivados", precio: 150.00 },
    { id: 10, nombre: "Jabón", rubro: "Limpieza", precio: 130.00 },
    { id: 11, nombre: "Aceite", rubro: "Aceites", precio: 200.00 },
    { id: 12, nombre: "Azúcar", rubro: "Especias", precio: 70.00 },
    { id: 13, nombre: "Sal", rubro: "Especias", precio: 30.00 },
    { id: 14, nombre: "Manteca", rubro: "Lácteos", precio: 180.00 },
    { id: 15, nombre: "Fideos", rubro: "Pastas", precio: 90.00 },
    { id: 16, nombre: "Banana", rubro: "Frutas", precio: 80.00 },
    { id: 17, nombre: "Cerveza", rubro: "Bebidas", precio: 150.00 },
    { id: 18, nombre: "Galletas", rubro: "Snacks", precio: 60.00 },
    { id: 19, nombre: "Café", rubro: "Bebidas", precio: 250.00 },
    { id: 20, nombre: "Té", rubro: "Bebidas", precio: 70.00 },
    { id: 21, nombre: "Zanahoria", rubro: "Verduras", precio: 40.00 },
    { id: 22, nombre: "Papas", rubro: "Verduras", precio: 50.00 },
    { id: 23, nombre: "Cebolla", rubro: "Verduras", precio: 35.00 },
    { id: 24, nombre: "Carne de Res", rubro: "Carnes", precio: 400.00 },
    { id: 25, nombre: "Detergente", rubro: "Limpieza", precio: 110.00 },
    { id: 26, nombre: "Papel Higiénico", rubro: "Higiene", precio: 90.00 },
    { id: 27, nombre: "Shampoo", rubro: "Higiene", precio: 180.00 },
    { id: 28, nombre: "Jugo", rubro: "Bebidas", precio: 70.00 },
    { id: 29, nombre: "Gaseosa", rubro: "Bebidas", precio: 100.00 },
    { id: 30, nombre: "Helado", rubro: "Postres", precio: 250.00 }
]);

  return (
    <div className="w-full h-full flex flex-col">
      <div className="p-2">
        <p className="text-2xl">Productos</p>
      </div>
      <div className="w-full mb-1 h-[48px]">
        <form action="" method="get" className="w-full">
          <input type="text" placeholder="Buscar" className="w-full pl-3 pb-3 pt-2 text-inherit bg-slate-200 rounded-2xl focus:border-cyan-400"/>
        </form>
      </div>
      <div className="w-full flex-1 overflow-y-auto">
        <div className="max-h-[460px] overflow-y-auto">
          <table className="w-full">
            <thead className="sticky top-0 bg-slate-50">
              <tr>
                <th className="text-left pl-3 p-1">Nombre</th>
                <th className="text-left pl-3 p-1">Rubro</th>
                <th className="text-left pl-3 p-1">Precio</th>
              </tr>
            </thead>
              <tbody className="">
                  {
                    productos.map((producto) => (
                      <tr key={producto.id} className="border">
                        <td className="pl-3 p-1">{producto.nombre}</td>
                        <td className="border-x pl-3 p-1">{producto.rubro}</td>
                        <td className="pl-3 p-1">{producto.precio}</td>
                      </tr>
                    ))
                  }
              </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}

export default TablaProduco;