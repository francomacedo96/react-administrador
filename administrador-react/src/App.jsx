import { useState } from "react"
import Header from "./components/Header"
import Formulario from "./components/Formulario"
import ListadoPacientes from "./components/ListadoPacientes"

function App() {

  const [pacientes, setPacientes] = useState([]);
  const [paciente, setPaciente] = useState({});

  const eliminarPaciente = id => {
    const pacientesActualizados = pacientes.filter( paciente => paciente.id !== id)
    setPacientes(pacientesActualizados)
  }

  return (
    <>
      <div className="container mx-auto">
        <Header />
          <div className="mt-12 md:flex">
            <Formulario
              pacientes={pacientes}
              setPacientes={setPacientes}
              paciente={paciente}
            />
            <ListadoPacientes
              setPaciente={setPaciente}
              pacientes={pacientes}
              eliminarPaciente={eliminarPaciente}
            />
          </div>
      </div>
    </>
  )
}

export default App
