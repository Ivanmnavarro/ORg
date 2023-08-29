import { useState } from "react"
import { v4 as uuid } from 'uuid';
import "./Formulario.css"
import CampoTexto from "../CampoTexto"
import ListaOpciones from "../ListaOpciones"
import Boton from "../Boton"

const Formulario = (props) => {
    const [nombre, actualizarNombre] = useState("")
    const [puesto, actualizarPuesto] = useState("")
    const [foto, actualizarFoto] = useState("")
    const [equipo, actualizarEquipo] = useState("")
    const [titulo, actulizarTitulo] = useState("")
    const [color, actualizarColor] = useState("")

    const { registrarColaborador, crearEquipo } = props

    const manejarEnvio = (e) => {
        e.preventDefault()
        console.log("Manejar el envio")
        let datosAEnviar = {
            nombre,
            puesto,
            foto,
            equipo,
            id: uuid()

        }
        registrarColaborador(datosAEnviar)
    }

    const manujarNuevoEquipo = (e) => {
        e.preventDefault()
        crearEquipo({ titulo, colorPrimario: color })
    }

    return <section className="formulario">
        <form onSubmit={manejarEnvio}>
            <h2>Rellena el formulario para crear el colaborador.</h2>
            <CampoTexto
                titulo="Nombre"
                placeholder="Ingresar nombre"
                required
                valor={nombre}
                actualizarValor={actualizarNombre}
            />
            <CampoTexto
                titulo="Puesto"
                placeholder="Ingresar puesto"
                required
                valor={puesto}
                actualizarValor={actualizarPuesto}

            />
            <CampoTexto
                titulo="Foto"
                placeholder="Ingresar enlace de foto"
                required
                valor={foto}
                actualizarValor={actualizarFoto}
            />
            <ListaOpciones
                valor={equipo}
                actualizarEquipo={actualizarEquipo}
                equipos={props.equipos}
            />
            <Boton texto="Crear" />

        </form>

        {/* formulario creacion equipos */}

        <form onSubmit={manujarNuevoEquipo}>
            <h2>Rellena el formulario para crear el equipo</h2>
            <CampoTexto
                titulo="Titulo"
                placeholder="Ingresar Titulo"
                required
                valor={titulo}
                actualizarValor={actulizarTitulo}
            />
            <CampoTexto
                titulo="Color"
                placeholder="Ingresar Color Hex"
                required
                valor={color}
                actualizarValor={actualizarColor}

            />
            <Boton texto="Registrar equipo" />
        </form>

    </section>
}

export default Formulario