export function Usuario () {
    return(
        <article className="grid justify-self-end xl:justify-items-end xl:grid-cols-[auto_auto] bg-white rounded-md">
            <header className="grid xl:grid-cols-[1fr_2fr]">
                <img className="m-2 h-14 w-14 rounded-full" alt="el avatar de triple h" src="https://pbs.twimg.com/profile_images/1645908612458348546/y3FPlRob_400x400.jpg"/>
                <div className="hidden sm:hidden xl:grid my-2 mx-1 w-full text-sm">
                    <strong>Felipe Aravena</strong>
                    <span>@fiap97</span>
                </div>
            </header>
            <aside className="ml-0 mr-4 mt-4 text-sm justify-self-end">
                <button className="hidden sm:hidden xl:grid bg-blue-500 py-1 px-3 text-sky-50 rounded-full">
                    Salir
                </button>
            </aside>
        </article>
    )
}