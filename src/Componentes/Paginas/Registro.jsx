import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faX } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom'

export function Registro() {
    return(
    
        <div className='block'>
            <div className='flex'>
                <div className="hidden xs:hidden sm:hidden p-2 lg:block w-2/5 bg-white lg:px-24 lg:py-44">
                    <FontAwesomeIcon icon={faX} className='lg:w-64 lg:h-64 xl:w-96 xl:h-96 '/>
                </div>
                <div className="w-full ml-20 lg:ml-0 xs:w-full sm:full lg:w-3/5 flex flex-col bg-white justify-start">
                    <div className="lg:hidden w-2/5 bg-white justify-center">
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
                        <button className='bg-blue-500 w-64 h-9 rounded-3xl text-white font-bold'>Crear cuenta</button>
                        <p className='text-xs font-light text-slate-300 mb-5'>Al registrarse acepta los terminos y condiciones.</p>
                    </div>
                    <div className=''>
                        <h3 className='font-bold text-lg my-5'>¿Ya tienes una cuenta?</h3>
                        <div className='text-blue-500 font-bold text-center bg-white w-64 h-9 rounded-3xl border-2 border-slate-300  hover:bg-slate-300'>
                            <Link to={'/login'} className=''>Iniciar sesion</Link>
                        </div>
                    </div>
                </div>
            </div>
            <div className='text-sm text-slate-500 text-center space-x-3'>
                <a className='hover:underline' href='#'>Information</a>
                <a className='hover:underline' href='#'>Descarga la app</a>
                <a className='hover:underline' href='#'>Centro de ayuda</a>
                <a className='hover:underline' href='#'>Condiciones del servicio</a>
                <a className='hover:underline' href='#'>Politicas de seguridad</a>
                <a className='hover:underline' href='#'>Accesibilidad</a>
                <a className='hover:underline' href='#'>Publicidad</a>
            </div>
        </div>
        
    )
}