import api from '../services/api'
import React, { useState, useEffect } from "react"
import '../styles/recepcao.scss'


function Recepcao(props){

    const [minuto, setMinuto] = useState()
    const [hora, setHora] = useState()
    const [dia, setDia] = useState()
    const [mes, setMes] = useState()


    useEffect(() => {
      api
        .get("/configTime/Get/61d68526acf88b6cb8f9f42c")
        .then((response) => {
            setMinuto(response.data.config.minuto)
            setHora(response.data.config.hora)
            setDia(response.data.config.dia)
            setMes(response.data.config.mes)
          console.log(response.data.config.minuto)
          console.log(response.data.config.hora)
          console.log(response.data.config.dia)
          console.log(response.data.config.mes)
          localStorage.setItem("quandoVamosNosVerMinuto", response.data.config.minuto)
          localStorage.setItem("quandoVamosNosVerHora", response.data.config.hora)
          localStorage.setItem("quandoVamosNosVerDia", response.data.config.dia)
          localStorage.setItem("quandoVamosNosVerMes", response.data.config.mes)
        })
        .catch((err) => {
          console.error("ops! ocorreu um erro" + err);
        });
    }, []);



      return(
        <div className="table" style={props.style}>
          <p className="datas" style={props.style}>Minuto: {minuto}</p>
          <p className="datas" style={props.style}>Hora: {hora}</p>
          <p className="datas" style={props.style}>Dia: {dia}</p>
          <p className="datas" style={props.style}>Mês: {mes}</p>
        </div>
      )
    
}
export default Recepcao