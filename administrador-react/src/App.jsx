import { useState } from "react"
import Header from "./components/Header"
import Formulario from "./components/Formulario"
import ListadoPacientes from "./components/ListadoPacientes"

function App() {

  const [pacientes, setPacientes] = useState([]);
  const [paciente, setPaciente] = useState({});

  return (
    <>
      <div className="container mx-auto">
        <Header />
          <div className="mt-12 md:flex">
            <Formulario
              pacientes={pacientes}
              setPacientes={setPacientes}
            />
            <ListadoPacientes
              setPaciente={setPaciente}
              pacientes={pacientes}
            />
          </div>
      </div>
    </>
  )
}

export default App
