import { getUsuarios } from "../Servicios/usuarios"
import { UsuariosRecomendados } from "./UsuariosRecomendados";

export function Recomendados() {

    const usuarios = getUsuarios();

    console.log(usuarios.length);

    return(
        <div>
            {
           usuarios.map((usuario) => 
                <UsuariosRecomendados 
                   id={usuario.id}
                   img={usuario.img}
                   nombre={usuario.nombre}
                   usuario={usuario.usuario} 
                />
           )
        }
        </div>
    )
}