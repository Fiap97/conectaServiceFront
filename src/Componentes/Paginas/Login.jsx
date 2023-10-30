import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faX } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom'


export function Login() {
    return(
        <div className="bg-black grid place-items-center">
            <div className="bg-white w-2/5 grid justify-center border-2 border-slate-500 rounded-3xl my-20">
                <div className='items-center pl-24 pt-5'>
                    <FontAwesomeIcon icon={faX} className='w-10 h-10'/>
                </div>
                <h1 className='font-bold text-3xl pt-5'>Iniciar sesion en X</h1>
                <div className='py-4'>
                        <button className='bg-white rounded-3xl h-9 w-64 text-center border-2 border-slate-300  hover:bg-slate-300'>Registrarse con Google</button>
                    </div>
                    <div className=''>
                        <button className='bg-white rounded-3xl h-9 w-64 text-center border-2 border-slate-300  hover:bg-slate-300'>Registrarse con Apple</button>
                    </div>
                    <div className='flex items-center h-8'>
                        <div className='w-28 h-0.5 bg-slate-300'>

                        </div>
                        <div className='p-1'>
                            o
                        </div>
                        <div className='w-28 h-0.5 bg-slate-300'>

                        </div>
                    </div>
                    <div>
                        <input className='pl-5 w-64 h-12 border-2 border-slate-300v rounded-lg' placeholder='Telefono, correo electronico o nombre de usuario'/>
                    </div>
                    <div className=''>
                        <button className='bg-black text-white font-bold text-center w-64 h-9 my-5 rounded-3xl'>Siguiente</button>
                    </div>
                    <div className=''>
                        <button className='bg-white rounded-3xl h-9 w-64 text-center border-2 border-slate-300  hover:bg-slate-300'>¿Olvidaste tu contraseña</button>
                    </div>
                    <div className='my-20'>
                        ¿No tienes cuenta?
                        <Link to={'/register'} className='text-blue-500 hover:underline'>Registrate</Link>
                    </div>
            </div>
        </div>
    )
}