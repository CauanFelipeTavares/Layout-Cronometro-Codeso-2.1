import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';




function EstatisticasPage(){

    var quandoVamosNosVerHora = localStorage.getItem("quandoVamosNosVerHora")
    var quandoVamosNosVerDia = localStorage.getItem("quandoVamosNosVerDia")

    const[innerH,setInnerH] = useState()
    const[innerM,setInnerM] = useState()
    const[innerS,setInnerS] = useState()
    const[innerMS,setInnerMS] = useState()

    const buttonStyle = {
        margin: "1vw",
        fontSize: "1.2em",
        cursor: "pointer"
    }

    const h1Style = {
        textAlign: "center",
        fontSize: "4vw",
        marginBottom: "15vh"
    }

    const pStyle = {
        margin: "3vh 1vw",
        textAlign: "center"
    }

    const ouStyle = {
        textAlign: "center"
    }


    useEffect(() => {
        const interval = setInterval(() => {
            var data = new Date()
        
            var ms = data.getMilliseconds()
            var segundo = data.getSeconds()
            var minuto = data.getMinutes()
            var hora = data.getHours()
            var dia = data.getDate()
            var mes = data.getMonth() + 1
        
            var contaHora = quandoVamosNosVerHora - hora
            var contaDia = quandoVamosNosVerDia - dia
        
        
            var Ehoras = (contaHora + (contaDia * 24) - (minuto/60) - (segundo/60/60)).toFixed(2)
            var Eminutos = ((contaHora * 60) + (contaDia * 60 * 24) - minuto - (segundo/60)).toFixed(2)
            var Esegundos = (contaHora * 60 * 60) + (contaDia * 60 * 60 * 24) - (minuto * 60) - segundo - (ms/1000)
            var EEsegundos = Esegundos.toFixed(0)
            var Ems = Esegundos * 1000
        
            
            setInnerH(Ehoras)
            setInnerM(Eminutos)
            setInnerS(EEsegundos)
            setInnerMS(Ems)      
        }, 1)
        return () => clearInterval(interval);
      }, [])


   


    return(
    <>
        <Link to='/'>
            <button style={buttonStyle}>
                Voltar
            </button>
        </Link>
        <h1 style={h1Style}>Faltam exatamente _______ pra gente se ver!!</h1>
        <p style={pStyle}> {innerH} horas </p>
        <p style={ouStyle}> ou </p>
        <p style={pStyle}> {innerM} minutos </p>
        <p style={ouStyle}> ou </p>
        <p style={pStyle}> {innerS} segundos </p>
        <p style={ouStyle}> ou </p>
        <p style={pStyle}> {innerMS} milissegundos </p>
    </>
    )
}

export default EstatisticasPage