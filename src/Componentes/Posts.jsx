import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEllipsis } from '@fortawesome/free-solid-svg-icons'
import { Fragment } from 'react';

export function Posts (props) {


    const guion = "-";

    return(
        <div>
             {
                <Fragment>
                    <div className="grid grid-cols-[50px_500px] border-inherit pb-8">
                        <div className="w-60 p-2"> 
                            <img className="h-10 w-10 rounded-full" alt="el avatar de triple h" src={props.imgURLUsuario}/>
                        </div>
                        <div className="grid grid-rows-[1fr_auto_auto]">
                            <div className="grid grid-cols-[auto_1fr_auto_auto_1fr] justify-start">
                                <strong className="pt-2 font-bold">{props.nombre}</strong>
                                <span className="pt-2" >{props.usuario}</span>
                                <span className='pt-2'>{guion}</span>
                                <span className="pt-2" >{props.fecha}</span>
                                <FontAwesomeIcon icon={faEllipsis} className='pt-2 pl-64 justify-self-end' />
                            </div>
                            <div className="text-justify">
                                {props.parrafo}
                            </div>
                            <div>
                                <img alt="triple h" className='' src={props.imgURLPublicacion}/>
                            </div>
                        </div>
                    </div>
                </Fragment>
            }
        </div>
    )
}