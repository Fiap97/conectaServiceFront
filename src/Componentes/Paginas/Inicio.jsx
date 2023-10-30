import { Fragment } from "react";
import { Nav } from "../Nav";
import { Recomendados } from "../Recomendados";
import { Publicaciones } from "../Publicaciones";
import { Tendencias } from "../Tendencias";
import { Usuario } from "../Usuario";
import { Buscar } from "../Buscar";

export function Inicio () {
    return(
        <Fragment>
            <div className="flex h-full">
                <div className="grid w-1/6 sm:w-1/6 xl:w-1/4">
                    <div className="fixed justify-self-center">
                        <Nav/>
                    </div>
                    <div className="fixed justify-self-end mt-96 pt-72">
                        <Usuario/>
                    </div>
                </div>
                <div className="w-3/4 sm:w-3/4 xl:w-2/5">
                    <Publicaciones/>
                </div>
                <div className="hidden sm:hidden md:hidden w-1/3 lg:flex lg:flex-col h-full px-10">
                    <div className="bg-white w-full xl:w-full">
                        <Buscar/>
                    </div>
                    <div  className="bg-slate-200 rounded-b-lg rounded-t-lg my-2">
                        <div className="p-2 font-bold text-2xl">
                            <h2>Tendencias para ti</h2>
                        </div>
                        <Tendencias/>
                        <Tendencias/>
                        <div className="p-3 text-blue-400">
                            <a href="#">Mostrar mas</a>
                        </div>
                    </div>
                    <div className="bg-slate-200 rounded-b-lg rounded-t-lg my-2">
                        <div className="text-2xl p-2 font-bold">
                            <h2>A quien seguir</h2>
                        </div>
                        <Recomendados/>
                        <div className="p-3 text-blue-400">
                            <a href="#">Mostrar mas</a>
                        </div>
                    </div>
                </div>
            </div>
        </Fragment>
    )

}