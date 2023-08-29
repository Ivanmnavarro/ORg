import { useState } from 'react';
import './App.css';
import Header from './components/Header';
import Formulario from './components/Formulario';
import MiOrg from './components/MiOrg';
import Equipo from './components/Equipo';
import Footer from './components/Footer';
import Colaborador from './components/Colaborador/index';

function App() {

  const [mostrarFormulario, actualizarMostrar] = useState(false)
  const [colaboradores, acualizarColaboradores] = useState([])
  const [equipos, actualizarEquipos] = useState([
    {
      titulo: "Programación",
      colorPrimario: "#57C278",
      colorSecundario: "#D9F7E9"
    },
    {
      titulo: "Front End",
      colorPrimario: "#82CFFA",
      colorSecundario: "#E8F8FF"
    },
    {
      titulo: "Data Science",
      colorPrimario: "#A6D157",
      colorSecundario: "#F0F8E2"
    },
    {
      titulo: "Devops",
      colorPrimario: "#E06B69",
      colorSecundario: "#FDE7E8"
    },
    {
      titulo: "Ux y Diseño",
      colorPrimario: "#DB6EBF",
      colorSecundario: "#FAE9F5"
    },
    {
      titulo: "Movil",
      colorPrimario: "#FFBA05",
      colorSecundario: "#FFF5D9"
    },
    {
      titulo: "Innovación y Gestión",
      colorPrimario: "#FF8A29",
      colorSecundario: "#FFEEDF"
    }

  ])

  const cambiarMostrar = () => {
    actualizarMostrar(!mostrarFormulario)
  }
  //resgistrar colaborador

  const registrarColaborador = (colaborador) => {
    console.log("Nuevo colaborador", colaborador)

    //Spread operator
    acualizarColaboradores([...colaboradores, colaborador])
  }

  //eliminar colaborador

  const eliminarColaborador = () => {
    console.log("Eliminar colaborador")
  }

  //actualizar color de equipo

  const actualizarColor = (color, titulo) => {
    console.log("Actualizar: ", color, titulo)
    const equiposActualizados = equipos.map((equipo) => {
      if (equipo.titulo === titulo){
        equipo.colorPrimario = color
      }
      return equipo
    })

    actualizarEquipos(equiposActualizados)
  }

  return (
    <div className="App">
      <Header />
      {
        mostrarFormulario && <Formulario
          equipos={equipos.map((equipo) => equipo.titulo)}
          registrarColaborador={registrarColaborador}
        />
      }

      <MiOrg cambiarMostrar={cambiarMostrar} />

      {
        equipos.map((equipo) => <Equipo
          datos={equipo}
          key={equipo.titulo}
          colaboradores={colaboradores.filter(colaborador => colaborador.equipo === equipo.titulo)}
          eliminarColaborador={eliminarColaborador}
          actualizarColor={actualizarColor}
        />)
      }

      <Footer />
    </div>
  );
}

export default App;
