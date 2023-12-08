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
            <div className="relative grid grid-cols-[1fr_2fr_2fr] grid-rows-[auto_auto_auto] gap-2 xl:gap-8 xl:ml-20">
                <div className="grid grid-rows-2">
                    <div className="fixed grid gap-24">
                        <div className="justify-self-center">
                            <Nav/>
                        </div>
                        <div className="justify-self-end">
                            <Usuario/>
                        </div>
                    </div>
                </div>
                <div className="pl-20 md:pl-0">
                    <div className="grid grid-rows-2 sticky top-0 z-10 backdrop-blur-md font-thin">
                        <div className="pt-6 pl-2 text-xl border-slate-800 h-16 hover:bg-slate-200 font-bold">
                            Inicio
                        </div>
                        <div className="grid grid-cols-[1fr_1fr] border-inherit">
                            <div className="pt-6 text-center h-16 hover:bg-slate-200 font-bold">
                                Para ti
                            </div>
                            <div className="pt-6 text-center h-16 hover:bg-slate-200 font-bold">
                                Siguiendo
                            </div>
                        </div>
                    </div>
                    <Publicaciones/>
                </div>
                <div className="hidden sm:hidden md:hidden lg:grid lg:grid-rows-[auto_auto_auto] lg:w-3/4">
                    <div className="grid grid-rows-[auto_auto_auto] sticky top-0">
                        <div className="">
                            <div className="bg-white grid fixed p-2 z-10 w-full">
                                <Buscar/>
                            </div>
                            <div  className="bg-slate-200 mt-16 rounded-b-lg rounded-t-lg my-2">
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
                </div>
            </div>
        </Fragment>
    )

}