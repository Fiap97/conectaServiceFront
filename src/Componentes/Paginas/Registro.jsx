import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faX } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom'
import { Fragment, useState } from 'react'
import { Feet } from '../feet'

export function Registro() {

    const [ventana,setVentana] = useState(false)
 
    const [modal,setModal] = useState('hidden')

    const [fondo,setFondo] = useState('bg-white')

    const cambioDeClases = () => {
        console.log(ventana);
        console.log(fondo);
        console.log(modal);
        setVentana(true)
        setFondo('bg-zinc-400')
        setModal('static')
    }

    const regresoClases = () => {
        setVentana(false)
        setFondo('bg-white')
        setModal('hidden')
    }



    return(
    
        <div className={`block`}>
            <div className='flex relative'>
                <div className={`${fondo} hidden xs:hidden sm:hidden p-2 lg:block w-2/5 lg:px-24 lg:py-44`}>
                    <FontAwesomeIcon icon={faX} className='lg:w-64 lg:h-64 xl:w-96 xl:h-96 '/>
                </div>
                <div className= {`w-full ml-20 lg:ml-0 xs:w-full sm:full lg:w-3/5 flex flex-col ${fondo} justify-start`}>
                    <div className={`lg:hidden  ${fondo} w-2/5  justify-center`}>
                        <FontAwesomeIcon icon={faX} className='w-16 h-16 '/>
                    </div>
                    <h1 className='text-7xl font-bold my-14'>Lo que esta pasando ahora</h1>
                    <h2 className='text-3xl font-bold mb-7'>Unete Hoy</h2>
                    <div className='py-4'>
                        <button className='bg-white rounded-3xl h-9 w-64 text-center border-2 border-slate-300  hover:bg-slate-300'>Registrarse con Google</button>
                    </div>
                    <div className=''>
                        <button className='bg-white rounded-3xl h-9 w-64 text-center border-2 border-slate-300  hover:bg-slate-300'>Registrarse con Apple</button>
                    </div>
                    <div className='flex items-center h-8'>
                        <div className='w-28 h-0.5 bg-slate-300'>

                        </div>
                        <div className='text-slate-300 p-1'>
                            o
                        </div>
                        <div className='w-28 h-0.5 bg-slate-300'>

                        </div>
                    </div>
                    <div>
                        <button className='bg-blue-500 w-64 h-9 rounded-3xl text-white font-bold' onClick={cambioDeClases}>Crear cuenta</button>
                        <p className='text-xs font-light text-slate-500 mb-5'>Al registrarse acepta los terminos y condiciones.</p>
                    </div>
                    <div className=''>
                        <h3 className='font-bold text-lg my-5'>¿Ya tienes una cuenta?</h3>
                        <div className='text-blue-500 font-bold text-center bg-white w-64 h-9 rounded-3xl border-2 border-slate-300  hover:bg-slate-300'>
                            <Link to={'/login'} className=''>Iniciar sesion</Link>
                        </div>
                    </div>
                </div>
                <div className='absolute'>
                    <div className= {`${modal} rounded-xl overflow-auto fixed bg-white inset-0 w-2/5  mx-auto my-12 border-slate-300 border-2`}>  
                        <button className='w-12 text-3xl' onClick={regresoClases}>x</button>
                        <div className='block px-24'>
                            <h1 className='font-bold text-3xl py-12'>Crea tu cuenta</h1>
                            <input className='pl-6 mb-6 w-full h-12 rounded-sm border-slate-300 border-2' placeholder='Nombre' />
                            <br/>
                            <input className='pl-6 mb-6 w-full h-12 rounded-sm border-slate-300 border-2' placeholder='Correo electrónico'/>
                            <input className='pl-6 mb-6 w-full h-12 rounded-sm border-slate-300 border-2' placeholder='Contraseña' type='password'/>
                            <h2 className='font-bold text-lg'>Fecha de nacimiento</h2>
                            <p className='font-light text-slate-400'>Esta información no será pública. Confirma tu propia edad, incluso si esta cuenta es para una empresa, una mascota u otra cosa.</p>
                            <div className='flex'>
                                <input className='w-48 h-16 my-6 border-slate-400 border-2 rounded-md' type='date'/>
                            </div>
                            <button className='w-full h-12 mt-6 bg-slate-400 justify-self-center rounded-3xl' disabled="true" >Siguiente</button>
                        </div>
                    </div>
                </div>
            </div>
            <div>
                {
                    ventana === false
                    ? 
                    <Feet/>
                    :
                    <Fragment>
                        <div className={`${fondo} text-sm text-slate-500 h-12 text-center space-x-3 pt-36 xl:pt-0`}> 
                        </div>
                    </Fragment>
                }
            </div>
        </div>
        
    )
}