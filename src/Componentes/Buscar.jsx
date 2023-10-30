import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'

export function Buscar () {
    return(
        <div className="">
            <FontAwesomeIcon icon={faMagnifyingGlass} className='mx-4 mt-4 absolute'/>
            <input className="bg-slate-200 h-12 rounded-3xl pl-12 w-full" placeholder="Buscar"/>
        </div>
    )
}