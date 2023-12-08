import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEllipsis } from '@fortawesome/free-solid-svg-icons'

export function Tendencias (){
    return(
        <div className="grid grid-cols-[3fr_1fr] items-center">
            <div className='pl-2 py-2'>
                <div className="text-sm text-slate-400">
                    <h4>Tendencias en chile</h4>
                </div>
                <div className='font-bold'>
                    <h2>Santiago</h2>
                </div>
                <div className='text-sm text-slate-400'>
                    <h4>1.343 Post</h4>
                </div>
            </div>
            <div className='lg:pl-16 xl:pl-32'>
                <button>
                    <FontAwesomeIcon icon={faEllipsis} className='px-6' />
                </button>
            </div>
        </div>
    )
}