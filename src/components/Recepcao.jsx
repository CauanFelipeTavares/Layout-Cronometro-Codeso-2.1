import api from '../services/api'
import React, { useState, useEffect } from "react"


function Recepcao(){

    const [hora, setHora] = useState()
    const [dia, setDia] = useState()
    const [mes, setMes] = useState()

    const divStyle = {
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
    }

    const pStyle = {
      margin: "5px",
      border: "1px solid white",
      margin: "0",
      padding: "4px",
      maxWidth: "4em",
      minWidth: "4em"
    }

    useEffect(() => {
      api
        .get("/configTime/Get/61ca7e9666a93f9f47646679")
        .then((response) => {
            setHora(response.data.config.hora)
            setDia(response.data.config.dia)
            setMes(response.data.config.mes)
          console.log(response.data.config.hora)
          console.log(response.data.config.dia)
          console.log(response.data.config.mes)
          localStorage.setItem("quandoVamosNosVerHora", response.data.config.hora)
          localStorage.setItem("quandoVamosNosVerDia", response.data.config.dia)
          localStorage.setItem("quandoVamosNosVerMes", response.data.config.mes)
        })
        .catch((err) => {
          console.error("ops! ocorreu um erro" + err);
        });
    }, []);



      return(
        <div style={divStyle}>
          <p style={pStyle}>Hora: {hora}</p>
          <p style={pStyle}>Dia: {dia}</p>
          <p style={pStyle}>Mês: {mes}</p>
        </div>
      )
    
}
export default Recepcao