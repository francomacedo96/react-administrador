
function Formulario() {
  return (
    <div className="md:w-1/2 lg:w-2/5">
      <h2 className="font-black text-3xl text-center">Seguimiento de pacientes</h2>
      <p className="mb-10 text-lg mt-5 text-center">Añade pacientes y {""} <span className="text-indigo-600 font-bold text-lg">administralos</span></p>
    
      <form action="" className="bg-white shadow-md rounded-lg py-10 px-5">

        <div className="mb-5">
          <label htmlFor="mascota" className="block text-gray-700 uppercase font-bold">
            Nombre Mascota
          </label>

          <input 
            id="mascota"
            className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
            type="text" 
            placeholder="Nombre de la mascota"
          />

        </div>

        <div className="mb-5">
          <label htmlFor="mascota" className="block text-gray-700 uppercase font-bold">
            Nombre Propietario
          </label>

          <input 
            id="mascota"
            className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
            type="text" 
            placeholder="Nombre del propietario"
          />

        </div>

      </form>

    </div>
  )
}

export default Formulario