import { useState, useEffect } from "react"

function Formulario() {

  const [nombre, setNombre] = useState("");
  const [propietario, setPropietario] = useState("");
  const [email, setEmail] = useState("");
  const [fecha, setFecha] = useState("");
  const [sintomas, setSintomas] = useState("");
  const [error, setError] = useState(false);



  const handleSubmit = (e) => {
    e.preventDefault();

    //Validacion

    if([nombre,propietario,email,fecha,sintomas].includes("")) {
      console.log("Hay algun parametro vacio")
      setError(true)
      return;
    } 
    setError(false)

  }

  
  return (  
    <div className="md:w-1/2 lg:w-2/5">
      <h2 className="font-black text-3xl text-center">Seguimiento de pacientes</h2>
      <p className="mb-10 text-lg mt-5 text-center">Añade pacientes y {""} <span className="text-indigo-600 font-bold text-lg">administralos</span></p>
    
      <form action="" onSubmit={handleSubmit} className="bg-white mb-10 mx-5 shadow-md rounded-lg py-10 px-5">
        <div className="mb-5">
          <label htmlFor="mascota" className="block text-gray-700 uppercase font-bold">
            Nombre de Mascota
          </label>

          <input 
            id="mascota"
            className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
            type="text" 
            placeholder="Nombre de la mascota"
            value={nombre}
            onChange={ (e) => setNombre(e.target.value)}
          />

        </div>

        <div className="mb-5">
          <label htmlFor="propietario" className="block text-gray-700 uppercase font-bold">
            Nombre de Propietario
          </label>

          <input 
            id="propietario"
            className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
            type="text" 
            placeholder="Nombre del propietario"
            value={propietario}
            onChange={ (e) => setPropietario(e.target.value)}
          />

        </div>

        <div className="mb-5">
          <label htmlFor="email" className="block text-gray-700 uppercase font-bold">
            Email
          </label>

          <input 
            id="email"
            className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
            type="email" 
            placeholder="Email de contacto"
            value={email}
            onChange={ (e) => setEmail(e.target.value)}
          />

        </div>

        <div className="mb-5">
          <label htmlFor="fecha" className="block text-gray-700 uppercase font-bold">
            Fecha
          </label>

          <input 
            id="fecha"
            className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
            type="date" 
            value={fecha}
            onChange={ (e) => setFecha(e.target.value)}
          />

        </div>

        <div className="mb-5">
          <label htmlFor="sintomas" className="block text-gray-700 uppercase font-bold">
            Sintomas
          </label>

          <textarea 
            id="sintomas"
            className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
            placeholder="Describe los sintomas"
            value={sintomas}
            onChange={ (e) => setSintomas(e.target.value)}
          />

        </div>

        <input value="agregar paciente" type="submit" className="bg-indigo-600 w-full rounded-lg p-3 text-white font-bold uppercase hover:bg-indigo-700 cursor-pointer transition-all"/>
        {error && <div className="bg-red-500 uppercase font-bold mt-3 rounded-lg text-white p-2 text-center"><p>Todos los campos son obligatorios</p></div>}


      </form>

    </div>
  )
}

export default Formulario