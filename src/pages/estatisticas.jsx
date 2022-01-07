import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Recepcao from '../components/Recepcao';
import '../styles/estatisticas.scss'



function EstatisticasPage(){

    var quandoVamosNosVerMinuto = localStorage.getItem("quandoVamosNosVerMinuto")
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
            var contaDia = quandoVamosNosVerDia - dia
            var contaHora = quandoVamosNosVerHora - hora
            var contaMinuto = quandoVamosNosVerMinuto - minuto
        
            const mesesVSdias = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31]

            var contaMesVSDias = 0
            for(let i = 0; i < contaMes; i++){
                contaMesVSDias = contaMesVSDias + mesesVSdias[i]
            }

        
            var Ehoras = (contaHora + (contaDia * 24) + (contaMesVSDias * 24 * 30) - (contaMinuto/60) - (segundo/60/60)).toFixed(2)
            var Eminutos = ((contaHora * 60) + (contaDia * 60 * 24) + (contaMesVSDias * 60 * 24 * 30) - contaMinuto - (segundo/60)).toFixed(2)
            var Esegundos = (contaHora * 60 * 60) + (contaDia * 60 * 60 * 24)  + (contaMesVSDias * 60 * 60 * 24 * 30) - (contaMinuto * 60) - segundo - (ms/1000)
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