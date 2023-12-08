import { Fragment } from "react"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEllipsis } from '@fortawesome/free-solid-svg-icons'
import { Posts } from "./Posts"
import { getPublicaciones } from "../Servicios/Publicaciones"

export function Publicaciones () {

    const publicaciones = getPublicaciones();


    return(

        <Fragment>
            <div className="">
                <div className="">
                    {
                        publicaciones.map((publicacion) =>
                            <Posts
                                id={publicacion.id}
                                imgURLUsuario={publicacion.imgURLUsuario} 
                                nombre={publicacion.nombre}
                                usuario={publicacion.usuario}
                                fecha={publicacion.fechaPublicacion}
                                parrafo={publicacion.parrafoPublicacion}
                                imgURLPublicacion={publicacion.imgURLPublicacion}
                            />
                        )
                    }
                </div>
            </div>
        </Fragment>
    )
}