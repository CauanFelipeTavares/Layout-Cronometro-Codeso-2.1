import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Recepcao from '../components/Recepcao';
import "../styles/principal.scss"

//idOficial:  61ca7e9666a93f9f47646679
//idTeste:  61d68526acf88b6cb8f9f42c

function PrincipalPage(){

    const [ms, setMs] = useState();
    const [seconds, setSeconds] = useState();
    const [minutes, setMinutes] = useState();
    const [houers, setHouers] = useState();
    const [days, setDays] = useState();

    useEffect(() => {
        const interval = setInterval(() => {
            var data = new Date()

            var ms = data.getMilliseconds()
            var segundo = data.getSeconds()
            var minuto = data.getMinutes()
            var hora = data.getHours()
            var dia = data.getDate()
            var mes = data.getMonth() + 1

            var quandoVamosNosVerMinuto = localStorage.getItem("quandoVamosNosVerMinuto")
            var quandoVamosNosVerHora = localStorage.getItem("quandoVamosNosVerHora")
            var quandoVamosNosVerDia = localStorage.getItem("quandoVamosNosVerDia")
            var quandoVamosNosVerMes = localStorage.getItem("quandoVamosNosVerMes")

            //vars

            var contaDia = quandoVamosNosVerDia - dia
            var contaHora = quandoVamosNosVerHora - hora
            var contaMinuto = quandoVamosNosVerMinuto - minuto
            var contaSegundo = 60 - 1 - segundo
            var contaMs = 1000 - 1 - ms

            //ms

            if(contaMs < 100){
                setMs('0' + contaMs)
            }else if(contaMs <10){
                setMs('00' + contaMs)
            }
            else{
                setMs(contaMs)
            }

            //segundos

            if(contaSegundo < 10){
                setSeconds('0' + contaSegundo)
            }else{
                setSeconds(contaSegundo)
            }

            //minutos

            if(contaMinuto < 0){
                contaHora--
                contaMinuto = contaMinuto + 60
                setMinutes(contaMinuto)
                if(contaHora < 10){
                    setHouers('0' + contaHora)
                }else{
                    setHouers(contaHora)
                }if(contaMinuto < 10){
                    setMinutes('0' + contaMinuto)
                }else{
                    setMinutes(contaMinuto)
                }
            }else if(contaMinuto < 10){
                setMinutes('0' + contaMinuto)
            }else{
                setMinutes(contaMinuto)
            }

            //horas

            if(contaHora < 0){
                contaHora = contaHora + 24
                contaDia--
                setDays(contaDia)
                if(contaHora <10){
                    setHouers('0:' + contaHora)
                }else{
                    setHouers(contaHora)
                }
            }else if(contaHora < 10){
                setHouers('0' + contaHora)
            }else{
                setHouers(contaHora)
            }

            //dias

            if(contaDia < 10){
                setDays('0' + contaDia)
            }else{
                setDays(contaDia)
            }

            //mes

            if(quandoVamosNosVerMes > mes){
                contaDia = quandoVamosNosVerDia - dia + (quandoVamosNosVerMes - mes) * 30
                setDays(contaDia)
            }

            //pluralidade

            if(contaDia === 1){
                document.getElementById('diaPluralidade').innerHTML = "dia:"
            }else{
                document.getElementById('diaPluralidade').innerHTML = "dias:"
            }   

            //Cronometro zerado

            if(contaDia < 0){
                document.getElementById("tabela").style.display = "none"
                document.getElementById("vazio").innerHTML = "FINALMENTE VI MI AMORE <3"
                document.getElementById("estatistic1").style.display = "none"
                document.getElementById("estatistic2").style.display = "none"
            }

        }, 1)
        return () => clearInterval(interval);
      }, [])

    return(
        <>
            <main>
                Quanto tempo falta pra eu ver o meu amor?
            </main>
            
            <table>
                <tr id="vazio" className="tdStyle"></tr>
                <tr id="tabela">
                    <td className="numbertdStyle"> {days} </td>
                    <td id="diaPluralidade" className="tdStyle">dias: </td>
                    <td className="numbertdStyle"> {houers} </td>
                    <td className="tdStyle">hrs:</td>
                    <td className="numbertdStyle"> {minutes} </td>
                    <td className="tdStyle">m:</td>
                    <td className="numbertdStyle"> {seconds} </td>
                    <td className="tdStyle">s:</td>  
                    <td className="msStyle"> {ms} </td>
                    <td className="tdStyle">ms</td>
                </tr>
            </table>

            <div className="buttons">
            <Link id="estatistic1" to="/estatisticas">
                <button id="estatistic2">
                    Estatísticas
                </button>
            </Link>
            <Link to="/configuracoes">
                <button>
                    Configurações
                </button>
            </Link>
            </div>
            <Recepcao style={{display: "none"}}/>
        </>
    )
}

export default PrincipalPage