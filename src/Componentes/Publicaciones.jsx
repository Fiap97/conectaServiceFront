import { Fragment } from "react"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEllipsis } from '@fortawesome/free-solid-svg-icons'
import { Posts } from "./Posts"
import { getPublicaciones } from "../Servicios/Publicaciones"

export function Publicaciones () {

    const publicaciones = getPublicaciones();


    return(

        <Fragment>
            <div className="fixed backdrop-blur-md font-thin w-3/4 sm:w-3/4 lg:w-3/5 xl:w-2/5">
                <div className="pt-6 pl-2 text-xl border-slate-800 h-16 hover:bg-slate-200 font-bold">
                    Inicio
                </div>
                <div className="flex border-inherit">
                    <div className="pt-6 text-center h-16 w-1/2 hover:bg-slate-200 font-bold">
                        Para ti
                    </div>
                    <div className="pt-6 text-center h-16 w-1/2 hover:bg-slate-200 font-bold">
                        Siguiendo
                    </div>
                </div>
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