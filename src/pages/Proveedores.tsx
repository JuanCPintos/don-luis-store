import TablaProveedores from "../components/TablaProveedores";
import FormularioProveedores from "../components/FormularioProveedores";

const Proveedores = () => {
  return(
    <div className="w-full h-full grid grid-cols-12 text-xl">

      {/* parte izquierda */}
      <div className="col-span-7 h-full border w-full">
        <TablaProveedores/>
      </div>


      {/* parte derecha */}
      <div className="w-full flex flex-col col-span-5 border">
        <FormularioProveedores/>
      </div>
    </div>
  )
};

export default Proveedores;