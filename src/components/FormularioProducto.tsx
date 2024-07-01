const FormularioProducto = () => {

    return (
        <>
            <div className="p-2">
                <p className="text-2xl">Nuevo Producto</p>
            </div>
            <form>
                <div className="mb-2 flex flex-col px-2">
                    <label htmlFor="nombre" className="form-label text-lg">Nombre</label>
                    <input type="text" placeholder="Nombre del producto" className="bg-slate-100 text-inherit p-1 pb-2 px-2 rounded-xl" id="nombre" />
                </div>
                <div className="mb-2 flex flex-col px-2">
                    <label htmlFor="marca" className="form-label text-lg">Marca</label>
                    <input type="text" placeholder="Marca del producto" className="bg-slate-100 text-inherit p-1 pb-2 px-2 rounded-xl" id="marca" />
                </div>
                <div className="mb-2 flex flex-col px-2">
                    <label htmlFor="rubro" className="form-label text-lg">Rubro</label>
                    <input type="text" placeholder="Rubro relacionados" className="bg-slate-100 text-inherit p-1 pb-2 px-2 rounded-xl" id="rubro" />
                </div>
                <div className="mb-2 flex flex-col px-2">
                    <label htmlFor="costo" className="form-label text-lg">Costo</label>
                    <input type="number" placeholder="Costo del producto" className="bg-slate-100 text-inherit p-1 pb-2 px-2 rounded-xl" id="costo" />
                </div>
                <div className="mb-2 flex flex-col px-2">
                    <label htmlFor="porcentaje" className="form-label text-lg">Porcentaje</label>
                    <input type="number" placeholder="Porcentaje de aumento" className="bg-slate-100 text-inherit p-1 pb-2 px-2 rounded-xl" id="porcentaje" />
                </div>
                {/* <div className="mb-3">
                    <label htmlFor="descripcion" className="form-label">Descripción</label>
                    <textarea placeholder="Descripcion del producto..." className="form-control" id="descripcion"></textarea>
                </div> */}
                <div className="mb-2 flex flex-col px-2">
                    <label htmlFor="pVenta" className="form-label text-lg">Precio de venta</label>
                    <input type="text" placeholder="XX.XX" className="bg-slate-100 text-inherit p-1 pb-2 px-2 rounded-xl" id="pVenta" />
                </div>
                <div className="flex px-2">
                    <button type="submit" className="p-1 px-3 border rounded-xl">Guardar</button>

                </div>
            </form>
        </>
    )
};

export default FormularioProducto;