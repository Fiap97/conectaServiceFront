import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faX } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom'
import { useState } from 'react'
import { Feet } from '../feet'
import { Fragment } from 'react'

export function Login() {

    const [username,setUsername] = useState('')

    const [password,setPassword] = useState('')

    const [ventana,setVentana] = useState(true)
 
    const [modal,setModal] = useState('static')

    const [fondo,setFondo] = useState('bg-zinc-400')

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

    const handleSubmit = (event) => {

        event.preventDefault()

        console.log('Subimiitt');

        console.log(username);
        console.log(password);
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
                    <form onSubmit={handleSubmit}>
                        <div className= {`${modal} rounded-xl fixed bg-white inset-0 w-2/5 mx-auto my-12 border-slate-300 border-2`}>  
                            <Link to={'/register'} className='w-12 text-3xl pl-2'>x</Link>
                            <div className='flex flex-col px-24 items-center'>
                                <FontAwesomeIcon icon={faX} className='w-10 h-10'/>
                                <h1 className='font-bold text-3xl py-5'>Iniciar sesion en X</h1>
                                <div className='py-4'>
                                    <button className='bg-white rounded-3xl h-9 w-64 text-center border-2 border-slate-300  hover:bg-slate-300'>Registrarse con Google</button>
                                </div>
                                <div className=''>
                                    <button className='bg-white rounded-3xl h-9 w-64 text-center border-2 border-slate-300  hover:bg-slate-300'>Registrarse con Apple</button>
                                </div>
                                <div className='flex items-center h-8'>
                                    <div className='w-28 h-0.5 bg-slate-300'>

                                    </div>
                                    <div className='p-1 py-3'>
                                        o
                                    </div>
                                    <div className='w-28 h-0.5 bg-slate-300'>

                                    </div>
                                </div>
                                <div className='py-4'>
                                    <input className='pl-5 w-64 h-12 py-4 border-2 border-slate-300v rounded-lg' value={username} name='Username' placeholder='Telefono, correo electronico o nombre de usuario' onChange={({target}) => setUsername(target.value)}/>
                                </div>
                                <div className='pb-4'>
                                    <input className='pl-5 w-64 h-12 py-4 border-2 border-slate-300v rounded-lg' value={password} type='password' name='Password' placeholder='Contraseña' onChange={({target}) => setPassword(target.value)}/>
                                </div>
                                <div className='pb-4'>
                                    <button className='bg-black text-white font-bold text-center w-64 h-9 my-5 rounded-3xl' >Iniciar Sesión</button>
                                </div>
                                <div className='pb-4'>
                                    <button className='bg-white rounded-3xl h-9 w-64 text-center border-2 font-bold border-slate-300  hover:bg-slate-300'>¿Olvidaste tu contraseña</button>
                                </div>
                                <div className='my-8'>
                                    ¿No tienes cuenta?
                                    <Link to={'/register'} className='text-blue-500 hover:underline'>Registrate</Link>
                                </div>
                            </div>
                        </div>
                    </form>
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