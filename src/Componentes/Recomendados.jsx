export function Recomendados() {
    return(
        <article className="flex items-center">
            <header className="flex">
                <img className="m-2 h-10 w-10 rounded-full" alt="el avatar de triple h" src="https://pbs.twimg.com/profile_images/1645908612458348546/y3FPlRob_400x400.jpg"/>
                <div className="my-2 mx-1 w-28 lg:w-28 xl:36">
                    <strong className="">Felipe Aravena</strong>
                    <br/>
                    <span className="text-slate-400">@fiap97</span>
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