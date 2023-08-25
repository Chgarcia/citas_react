 

import Pacientes from "./Pacientes"

const ListadoPacientes = ({pacientes, setPaciente, eliminarPaciente}) => {

  return (
    <div className="md:w-1/2 lg:3/5 md:h-screen overflow-y-scroll">
    {pacientes && pacientes.length ? (
      <>
     
        <h2 className="font-black text-3xl text-center">
          LIstado de Pacientes</h2>
        <p className="text-xl mt-5 mb-5 text-center">
            Administra tus {' '}
            <span className="text-indigo-400 font-bold">Pacientes</span>
        </p>
        { pacientes.map( (paciente) =>{
          return(
            <Pacientes
                key={paciente.id}
                paciente={paciente} 
                setPaciente={setPaciente}
                eliminarPaciente={eliminarPaciente}
                />
          )
        })}
      </>
    ) : (
      <>
      <h2 className="font-black text-3xl text-center">
          No hay Pacientes</h2>
        <p className="text-xl mt-5 mb-5 text-center">
            Comienza agregando {' '}
            <span className="text-indigo-400 font-bold">Pacientes</span>
        </p>
      </>

    )}
    </div>
  )
}

export default ListadoPacientes
