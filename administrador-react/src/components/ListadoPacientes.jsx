import Paciente from "./Paciente"

const ListadoPacientes = ({ pacientes }) => {


    return (
        <div className="md:w-1/2 lg:w-3/5">

            <h2 className="font-black text-3xl text-center">Listado de Pacientes</h2>
            <p className="text-xl mt-5 mb-10 text-center">
                Administra tus {""}
                <span className="text-indigo-600 font-bold">citas</span>
            </p>

            <div className=" md:h-4/5 overflow-y-scroll">

            {pacientes.map((paciente) => (
                    <Paciente 
                        key={paciente.id}
                        paciente={paciente}
                    />
                    
                ))}
            </div>

            

            
        </div>
    )
}

export default ListadoPacientes