const Usuarios = [
    {
        id:1,
        img:"https://pbs.twimg.com/profile_images/1645908612458348546/y3FPlRob_400x400.jpg",
        nombre:"Camilo Perez",
        usuario:"@CPerez",
    },
    {
        id:2,
        img:"https://pbs.twimg.com/profile_images/1645908612458348546/y3FPlRob_400x400.jpg",
        nombre:"Bastian Araos",
        usuario:"@BAraos",
    },
    {
        id:3,
        img:"https://pbs.twimg.com/profile_images/1645908612458348546/y3FPlRob_400x400.jpg",
        nombre:"Gustavo Cabrera",
        usuario:"@GCabrera",
    },
    {
        id:4,
        img:"https://pbs.twimg.com/profile_images/1645908612458348546/y3FPlRob_400x400.jpg",
        nombre:"Moises Ponce",
        usuario:"@MPonce",
    }
]

const getUsuarios = () => {
    return Usuarios;
}

export {getUsuarios}