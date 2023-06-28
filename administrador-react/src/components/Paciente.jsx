
const Paciente = () => {
    return (
        <div className="m-3 bg-white shadow-md px-5 py-10 rounded-xl "> 
            <p className="font-bold mb-3 text-gray-700 uppercase">Nombre: {""}
              <span className="font-normal normal-case">Hook</span>
            </p>

            <p className="font-bold mb-3 text-gray-700 uppercase">Propietario: {""}
              <span className="font-normal normal-case">Franco</span>
            </p>

            <p className="font-bold mb-3 text-gray-700 uppercase">Email: {""}
              <span className="font-normal normal-case">franco@franco</span>
            </p>

            <p className="font-bold mb-3 text-gray-700 uppercase">Fecha alta: {""}
              <span className="font-normal normal-case">10 de mayo de 2023</span>
            </p>

            <p className="font-bold mb-3 text-gray-700 uppercase">Sintomas: {""}
              <span className="font-normal normal-case">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nemo voluptatibus laboriosam perspiciatis assumenda placeat quod atque nostrum odio illo quas voluptate voluptates repellat eius tempore adipisci voluptatum ipsam, minima nihil?</span>
            </p>

          
      </div>
    );
}

export default Paciente;