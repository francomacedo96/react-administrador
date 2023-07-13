import Paciente from "./Paciente"

const ListadoPacientes = ({ pacientes, setPaciente }) => {

    return (
        <div className="md:w-1/2 lg:w-3/5">

            {pacientes && pacientes.length ? (

            <>
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
                        setPaciente={setPaciente}
                    />
                    
                ))}
            </div>
            </>
        ) : (
            <>
                <h2 className="font-black text-3xl text-center">No hay Pacientes</h2>
                <p className="text-xl mt-5 mb-10 text-center">
                    Comineza agregando {""}
                    <span className="text-indigo-600 font-bold">pacientes</span>
                </p>
            </>
        )}
            
        </div>
    )
}

export default ListadoPacientes