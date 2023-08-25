 

const Pacientes = ({ paciente, setPaciente, eliminarPaciente}) => {

    const {nombre, propietario, email, fecha, sintomas,id} = paciente


    const handleEliminar =() =>{
        const repsuesta = confirm('Desea elimianr este paciente?')
        if(repsuesta){
            eliminarPaciente(id)
        }
    }

  return (
    <div className="mx-5 mb-10 bg-yellow-50 shadow-lg px-5 py-10 rounded-xl ">
        <p className="font-bold mb-3 text-gray-700 uppercase">Nombre:{' '}
            <span className="font-normal normal-case">{nombre}</span>
        </p>
        <p className="font-bold mb-3 text-gray-700 uppercase">Propietario:{' '}
            <span className="font-normal normal-case">{propietario}</span>
        </p>
        <p className="font-bold mb-3 text-gray-700 uppercase">email:{' '}
            <span className="font-normal normal-case">{email}</span>
        </p>
        <p className="font-bold mb-3 text-gray-700 uppercase">Fecha alta:{' '}
            <span className="font-normal normal-case">{fecha}</span>
        </p>
        <p className="font-bold mb-3 text-gray-700 uppercase">Síntomas:{' '}
            <span className="font-normal normal-case">{sintomas}</span>
        </p>
        <div className="flex justify-between mt-5">
            <button type="button"
                    className="py-2 px-10 bg-indigo-400 hover:bg-indigo-800
                     text-white font-bold uppercase rounded-lg"
                    onClick={()=>setPaciente(paciente)}
                     >Editar</button>
            <button type="button"
            className="py-2 px-10 bg-red-400 hover:bg-red-800
            text-white font-bold uppercase rounded-lg"
                onClick={handleEliminar}
                >Eliminar</button>
        </div>
  </div>
  )
}

export default Pacientes
