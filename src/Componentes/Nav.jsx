
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHouse,faMagnifyingGlass,faX,faBell,faEnvelope,faList,faBookmark,faUser,faEllipsis,faPlus } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom'
export function Nav () {
    return(
        <div className="bg-white">
            <ul className="items-center">
                <li className="w-8  text-xl font-serif bg-white hover:bg-slate-200 rounded-xl">
                    <Link>
                    <FontAwesomeIcon icon={faX} className='w-8 h-8 mt-3'/>
                    </Link>
                </li>
                <li className="py-4 xl:py-3 pl-3 xl:pl-0 rounded-3xl xl:rounded-xl w-12 xl:w-24  flex text-xl font-serif bg-white hover:bg-slate-200">
                    <FontAwesomeIcon icon={faHouse} className='pr-4'/>
                    <Link className='hidden xl:flex'>
                        Inicio
                    </Link>
                </li>
                <li className="py-4 xl:py-3 pl-4 xl:pl-0 rounded-3xl xl:rounded-xl w-12 xl:w-32 flex text-xl font-serif bg-white hover:bg-slate-200 ">
                    <FontAwesomeIcon icon={faMagnifyingGlass} className='pr-4'/>
                    <Link className='hidden xl:flex'>
                        Explorar
                    </Link>                
                </li>
                <li className="py-4 xl:py-3 pl-4 xl:pl-0 rounded-3xl xl:rounded-xl w-12 xl:w-44 flex text-xl font-serif bg-white hover:bg-slate-200 ">
                    <FontAwesomeIcon icon={faBell} className='pr-4'/>
                    <Link className='hidden xl:flex'>
                        Notificaciones
                    </Link>
                </li>
                <li className="py-4 xl:py-3 pl-4 xl:pl-0 rounded-3xl xl:rounded-xl w-12 xl:w-32 flex text-xl font-serif bg-white hover:bg-slate-200 ">
                    <FontAwesomeIcon icon={faEnvelope} className='pr-4'/>
                    <Link className='hidden xl:flex'>
                        Mensajes
                    </Link>
                </li>
                <li className="py-4 xl:py-3 pl-4 xl:pl-0 rounded-3xl xl:rounded-xl w-12 xl:w-24 flex text-xl font-serif bg-white hover:bg-slate-200 ">       
                    <FontAwesomeIcon icon={faList} className='pr-4'/>
                    <Link className='hidden xl:flex'>
                        Listas
                    </Link>
                </li>
                <li className="py-4 xl:py-3 pl-4 xl:pl-0 rounded-3xl xl:rounded-xl w-12 xl:w-36 flex text-xl font-serif bg-white hover:bg-slate-200 ">
                    <FontAwesomeIcon icon={faBookmark} className='pr-4'/>
                    <Link className='hidden xl:flex'>
                        Guardados
                    </Link>
                </li>
                <li className="py-4 xl:py-3 pl-4 xl:pl-0 rounded-3xl xl:rounded-xl w-12 xl:w-32 flex text-xl font-serif bg-white hover:bg-slate-200 ">
                    <FontAwesomeIcon icon={faX} className='pr-4' />
                    <Link className='hidden xl:flex'>
                        Premiun
                    </Link>
                </li>
                <li className="py-4 xl:py-3 pl-4 xl:pl-0 rounded-3xl xl:rounded-xl w-12 xl:w-24 flex text-xl font-serif bg-white hover:bg-slate-200 ">
                    <FontAwesomeIcon icon={faUser} className='pr-4' />
                    <Link className='hidden xl:flex'>
                        Perfil
                    </Link>
                </li>
                <li className="py-4 xl:py-3 pl-4 xl:pl-0 rounded-3xl xl:rounded-xl w-12 xl:w-44 flex text-xl font-serif bg-white hover:bg-slate-200 ">
                    <FontAwesomeIcon icon={faEllipsis} className='pr-4' />
                    <Link className='hidden xl:flex'>
                       Mas opciones
                    </Link>
                </li>
                <li className="w-12 pl-4 xl:pl-16 xl:w-48 text-xl my-2 text-center flex text-white font-serif bg-blue-500 hover:bg-blue-600 rounded-3xl">
                    <button className=" items-center place-items-center py-2">
                        <FontAwesomeIcon className='xl:hidden' icon={faPlus} />
                        <label className='hidden sm:hidden xl:flex'>
                            Postear
                        </label>
                    </button>
                </li>
            </ul>
        </div>
    )
}