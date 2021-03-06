import axios from "axios"
import Recepcao from "../components/Recepcao"
import { useState } from "react"
import { Link } from "react-router-dom"
import '../styles/configuracoes.scss'


function ConfiguracoesPage(){

    const[input0, setInput0] = useState()
    const[input1, setInput1] = useState()
    const[input2, setInput2] = useState()
    const[input3, setInput3] = useState()


    async function put(){
        if(isNaN(input0) || isNaN(input1) || isNaN(input2) || isNaN(input3)){
            alert("Há inputs vazios")
        }else if(input0 < 0){
            alert("O minuto não pode ser menor que 0")
        }else if(input1 > 59){
            alert("O minuto não pode ser maior que 23")
        }else if(input1 < 0){
            alert("A hora não pode ser menor que 0")
        }else if(input1 > 23){
            alert("A hora não pode ser maior que 23")
        }else if(input2 < 1){
            alert("O dia não pode ser menor que 1")
        }else if(input2 > 31){
            alert("O dia não pode ser maior que 31")
        }else if(input3 < 1){
            alert("O mês não pode ser menor que 1")
        }else if(input3 > 12){
            alert("O mês não pode ser maior que 12")
        }else{
            var article = {
                minuto: input0,
                hora: input1,
                dia: input2,
                mes: input3
            }
            const response = await axios.put('https://cronometro-codeso-2-calires.herokuapp.com/configTime/put/61d68526acf88b6cb8f9f42c', article)
            console.log(response.data)
            document.location.reload(true)
            alert("Atualizado com sucesso")
        }
    }


    function SubmitFunc(e) {
        e.preventDefault()
        console.log('Você clicou em enviar.')
        put()
    }

    function updateInputValue0(evt0) {
        setInput0(parseInt(evt0.target.value));
    }

    function updateInputValue1(evt1) {
        setInput1(parseInt(evt1.target.value));
    }

    function updateInputValue2(evt2) {
        setInput2(parseInt(evt2.target.value));
    }

    function updateInputValue3(evt3) {
        setInput3(parseInt(evt3.target.value));
    }


    return(
        <>
            <Link to="/">
                <button >
                    Voltar
                </button>
            </Link>

            <form onSubmit={SubmitFunc} >
                <label>
                    Escolha o minuto que vamos nos encontrar:
                </label>
                <input type="number" onChange={updateInputValue0} />
 
                <label>
                    Escolha a hora que vamos nos encontrar:
                </label>
                <input type="number" onChange={updateInputValue1} />
                
                <label>
                    Escolha o dia que vamos nos encontrar:
                </label>
                <input type="number" onChange={updateInputValue2} />
                
                <label>
                Escolha o mês que vamos nos encontrar:
                </label>
                <input type="number" onChange={updateInputValue3} />
                
                <button type="submit" >
                    Salvar Configurações
                </button>
            </form>
            <br></br>

            <p >
                Configurações Atuais:
            </p>
            <Recepcao/>
        </>
    )
}

export default ConfiguracoesPage