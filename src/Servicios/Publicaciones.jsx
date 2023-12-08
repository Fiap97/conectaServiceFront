const Publicaciones = [
    {
        id:1,
        imgURLUsuario:"https://pbs.twimg.com/profile_images/1645908612458348546/y3FPlRob_400x400.jpg",
        nombre:"Felipe Aravena",
        usuario:"@Fiap97",
        fechaPublicacion:"Mar 15",
        parrafoPublicacion:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
        imgURLPublicacion:"https://pbs.twimg.com/media/F73u3peWIAAp1Yt?format=jpg&name=small"
    },
    {
        id:2,
        imgURLUsuario:"https://pbs.twimg.com/profile_images/1645908612458348546/y3FPlRob_400x400.jpg",
        nombre:"JPN Aravena",
        usuario:"@JPN",
        fechaPublicacion:"18 marzo",
        parrafoPublicacion:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
        imgURLPublicacion:"https://pbs.twimg.com/media/F73u3peWIAAp1Yt?format=jpg&name=small"
    },
    {
        id:3,
        imgURLUsuario:"https://pbs.twimg.com/profile_images/1645908612458348546/y3FPlRob_400x400.jpg",
        nombre:"Camilo Aravena",
        usuario:"@CAP",
        fechaPublicacion:"11 marzo",
        parrafoPublicacion:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
        imgURLPublicacion:"https://pbs.twimg.com/media/F73u3peWIAAp1Yt?format=jpg&name=small"
    }
]

const getPublicaciones = () => {
    console.log(Publicaciones);
    return Publicaciones;
}

export { getPublicaciones }