import FormularioProducto from "../components/FormularioProducto";
import TablaRegistro from "../components/TablaRegistro";


const Cargar = () => {

  


  return(
    <>
      <div className="w-full h-full grid grid-cols-12 text-xl">

        {/* parte izquierda */}
        <div className="col-span-7 h-full border w-full">
          <TablaRegistro/>

        </div>


        {/* parte derecha */}
        <div className="w-full flex flex-col col-span-5 border">
          <FormularioProducto/>
        </div>
      </div>
    </>
    
  )
}

export default Cargar;