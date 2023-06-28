import Paciente from "./Paciente"

const ListadoPacientes = () => {
    return (
        <div className="md:w-1/2 lg:w-3/5">

            <h2 className="font-black text-3xl text-center">ListadoPacientes</h2>
            <p className="text-xl mt-5 mb-10 text-center">
                Aministra tus {""}
                <span className="text-indigo-600 font-bold">Pacientes y citas</span>
            </p>

            <div className=" md:h-4/5 overflow-y-scroll">

                <Paciente />
                <Paciente />
                <Paciente />
            </div>
        </div>
    )
}

export default ListadoPacientes