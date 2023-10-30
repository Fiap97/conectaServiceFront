export function Usuario () {
    return(
        <article className="flex w-64 bg-white rounded-md">
            <header className=" flex">
                <img className="m-2 h-14 w-14 rounded-full" alt="el avatar de triple h" src="https://pbs.twimg.com/profile_images/1645908612458348546/y3FPlRob_400x400.jpg"/>
                <div className="hidden sm:hidden xl:block my-2 mx-1 w-full text-sm">
                    <strong>Felipe Aravena</strong>
                    <br/>
                    <span>@fiap97</span>
                </div>
            </header>
            <aside className="ml-0 mr-4 mt-4 text-sm">
                <button className="hidden sm:hidden xl:flex bg-blue-500 py-1 px-3 text-sky-50 rounded-full">
                    Salir
                </button>
            </aside>
        </article>
    )
}