import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEllipsis } from '@fortawesome/free-solid-svg-icons'
import { Fragment } from 'react';

export function Posts (props) {

    return(
        <div>
             {
                <Fragment>
                    <div className="flex border-inherit">
                        <div className="w-60 p-2"> 
                            <img className="h-10 w-10 rounded-full" alt="el avatar de triple h" src={props.imgURLUsuario}/>
                        </div>
                        <div className="">
                            <div className="flex">
                                <strong className="pt-2">{props.nombre}</strong>
                                <span className="p-2" >{props.usuario}</span>
                                <span className="pt-2" >{props.fecha}</span>
                                <FontAwesomeIcon icon={faEllipsis} className='pt-2 pl-64 justify-self-end' />
                            </div>
                            <div className="text-justify">
                                {props.parrafo}
                            </div>
                            <div>
                                <img alt="triple h" className='h-12 w-12' src={props.imgURLPublicacion}/>
                            </div>
                        </div>
                    </div>
                </Fragment>
            }
        </div>
    )
}