export function UsuariosRecomendados(props) {
    return(
        <article className="grid grid-cols-[auto_auto] xl:grid-cols-[2fr_1fr] items-center">
            <header className="grid grid-cols-[1fr_2fr] ">
                <img className="h-10 w-10 rounded-full justify-self-center " alt="el avatar de triple h" src={props.img} />
                <div className="my-2 mx-1 w-28 lg:w-28 xl:36">
                    <strong className="">{props.nombre}</strong>
                    <br/>
                    <span className="text-slate-400">{props.usuario}</span>
                </div>
            </header>
            <aside>
                <button className="bg-blue-500  py-1 px-3 mr-4 ml-0 lg:ml-0 xl:ml-20 text-sky-50 rounded-full">
                    Seguir
                </button>
            </aside>
        </article>
    )
}