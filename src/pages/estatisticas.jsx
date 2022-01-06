import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Recepcao from '../components/Recepcao';
import '../styles/estatisticas.scss'



function EstatisticasPage(){

    var quandoVamosNosVerHora = localStorage.getItem("quandoVamosNosVerHora")
    var quandoVamosNosVerDia = localStorage.getItem("quandoVamosNosVerDia")
    var quandoVamosNosVerMes = localStorage.getItem("quandoVamosNosVerMes")
    console.log(quandoVamosNosVerHora)
    console.log(quandoVamosNosVerDia)
    console.log(quandoVamosNosVerMes)

    const[innerH,setInnerH] = useState()
    const[innerM,setInnerM] = useState()
    const[innerS,setInnerS] = useState()
    const[innerMS,setInnerMS] = useState()


    useEffect(() => {
        const interval = setInterval(() => {
            var data = new Date()
        
            var ms = data.getMilliseconds()
            var segundo = data.getSeconds()
            var minuto = data.getMinutes()
            var hora = data.getHours()
            var dia = data.getDate()
            var mes = data.getMonth() + 1
        
            var contaMes = quandoVamosNosVerMes - mes
            var contaHora = quandoVamosNosVerHora - hora
            var contaDia = quandoVamosNosVerDia - dia
        
        
            var Ehoras = (contaHora + (contaDia * 24) + (contaMes * 24 * 30) - (minuto/60) - (segundo/60/60)).toFixed(2)
            var Eminutos = ((contaHora * 60) + (contaDia * 60 * 24) + (contaMes * 60 * 24 * 30) - minuto - (segundo/60)).toFixed(2)
            var Esegundos = (contaHora * 60 * 60) + (contaDia * 60 * 60 * 24)  + (contaMes * 60 * 60 * 24 * 30) - (minuto * 60) - segundo - (ms/1000)
            var EEsegundos = Esegundos.toFixed(0)
            var Ems = (Esegundos * 1000).toFixed(0)
        
            
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
            <button>
                Voltar
            </button>
        </Link>
        <h1>Faltam exatamente _______ pra gente se ver!!</h1>
        <p className="pStyle"> {innerH} horas </p>
        <p className="ouStyle"> ou </p>
        <p className="pStyle"> {innerM} minutos </p>
        <p className="ouStyle"> ou </p>
        <p className="pStyle"> {innerS} segundos </p>
        <p className="ouStyle"> ou </p>
        <p className="pStyle"> {innerMS} milissegundos </p>
        <Recepcao style={{display: "none"}}/>
    </>
    )
}

export default EstatisticasPage