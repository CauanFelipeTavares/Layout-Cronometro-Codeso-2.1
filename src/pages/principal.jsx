import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';


function PrincipalPage(){

    const mainStyle = {
        textAlign: "center",
        margin: "5vh 2vw",
        fontSize: "6vw"
    }

    const tableStyle = {
        margin: "10vh auto",
        maxWidth: "90%",
        padding: "1rem",
        border: "1px solid white",
        borderRadius: "10px"
    }

    const tdStyle = {
        fontSize: "4.5vw"
    }

    const numbertdStyle = {
        fontSize: "4.5vw",
        minWidth: "4.5vw",
        maxWidth: "4.5vw"
    }

    const msStyle = {
        fontSize: "4.5vw",
        minWidth: "6.75vw",
        maxWidth: "6.75vw"
    }

    const aStyle = {
        textDecoration: "none"
    }

    const buttonStyle = {
        display: "block",
        margin: "0 auto 0 auto",
        cursor: "pointer",
        fontSize: "2vw",
        border: "1px solid white",
        padding: "3px 10px",
        color: "white",
        backgroundColor: "black"
    }

    const divStyle = {
        display: "flex",
        justifyContent: "space-evenly"
    }

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

            var quandoVamosNosVerHora = localStorage.getItem("quandoVamosNosVerHora")
            var quandoVamosNosVerDia = localStorage.getItem("quandoVamosNosVerDia")
            var quandoVamosNosVerMes = localStorage.getItem("quandoVamosNosVerMes")

            var contaDia = quandoVamosNosVerDia - dia
            if(quandoVamosNosVerMes > mes){
                contaDia = quandoVamosNosVerDia - dia + (quandoVamosNosVerMes - mes) * 30
            }
            

            var contaHora = quandoVamosNosVerHora - 1 - hora
            if(contaHora < 0){
                contaHora = contaHora + 24
                contaDia--
                setDays(contaDia)
                if(contaHora <10){
                    setHouers('0' + contaHora)
                }else{
                    setHouers(contaHora)
                }
            }else if(contaHora < 10){
                setHouers('0' + contaHora)
            }else{
                setHouers(contaHora)
            }


            if(contaDia < 10){
                setDays('0' + contaDia)
            }else{
                setDays(contaDia)
            }

            if(contaDia === 1){
                document.getElementById('diaPluralidade').innerHTML = "dia:"
            }else{
                document.getElementById('diaPluralidade').innerHTML = "dias:"
            }




            var contaMinuto = 60 - 1 - minuto
            if(contaMinuto < 10){
                setMinutes('0' + contaMinuto)
            }else{
                setMinutes(contaMinuto)
            }

            var contaSegundo = 60 - 1 - segundo
            if(contaSegundo < 10){
                setSeconds('0' + contaSegundo)
            }else{
                setSeconds(contaSegundo)
            }

            var contaMs = 1000 - 1 - ms
            if(contaMs < 100){
                setMs('0' + contaMs)
            }else if(contaMs <10){
                setMs('00' + contaMs)
            }
            else{
                setMs(contaMs)
            }


            if(contaDia < 0){
                document.getElementById("tabela").style.display = "none"
                document.getElementById("vazio").innerHTML = "Vi mi amore, até o proximo encontro s2"
                document.getElementById("estatistic1").style.display = "none"
                document.getElementById("estatistic2").style.display = "none"
            }

        }, 1)
        return () => clearInterval(interval);
      }, [])

    return(
        <>
            <main style={mainStyle}>
                Quanto tempo falta pra eu ver o meu amor?
            </main>
            
            <table style={tableStyle}>
                <tr id="vazio" style={tdStyle}></tr>
                <tr id="tabela">
                    <td style={numbertdStyle}> {days} </td>
                    <td id="diaPluralidade" style={tdStyle}>dias: </td>
                    <td style={numbertdStyle}> {houers} </td>
                    <td style={tdStyle}>hrs:</td>
                    <td style={numbertdStyle}> {minutes} </td>
                    <td style={tdStyle}>m:</td>
                    <td style={numbertdStyle}> {seconds} </td>
                    <td style={tdStyle}>s:</td>  
                    <td style={msStyle}> {ms} </td>
                    <td style={tdStyle}>ms</td>
                </tr>
            </table>

            <div style={divStyle}>
            <Link id="estatistic1" to="/estatisticas" style={aStyle}>
                <button id="estatistic2" style={buttonStyle}>
                    Estatísticas
                </button>
            </Link>
            <Link to="/configuracoes" style={aStyle}>
                <button style={buttonStyle}>
                    Configurações
                </button>
            </Link>
            </div>
        </>
    )
}

export default PrincipalPage