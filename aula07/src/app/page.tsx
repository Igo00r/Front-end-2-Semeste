'use client';
import { useState } from "react";

export default function Home(){

  const [valor,setValor] = useState(0)
  const[dados,setDados] = useState("")
  const[nome, setNome] = useState("")
  const[conteudo, setConteudo] = useState("")
  const[frase, setFrase] = useState("Clique no botão para mudar a mensagem")
  const[fraseMod,setFrasemod] = useState("Mensagem alterada")


  const handleChange = (event : React.ChangeEvent<HTMLInputElement>) => {
    setDados(event.target.value)
  }
  const nomeDigitado = (event : React.ChangeEvent<HTMLInputElement>) => {
    setNome(event.target.value)
  }
  const exibirConteudo = () =>{
    setConteudo(nome);
    setNome("");
  }
  const mudaFrase = () =>{
    setFrasemod(frase)
    setFrase(fraseMod)
  }

  return (
    
        <>
        <h1>Trabalhando com useState</h1>

        <h2>Exemplo 01</h2>

        <button onClick={ ()=> {setValor( valor + 1 )}}>Incrementar</button>
        <button onClick={ ()=> {setValor( valor - 1 )}} disabled={valor == 0}>Decrementar</button>
        <button onClick={ ()=> setValor(0)}>Zerar</button>
        <p>Novo valor: {valor }</p>


        <h2>Exemplo 02</h2>
        Dados: <input value={dados} onChange={handleChange} />
        <p>Valor digitado:{dados}</p>
        

        <h2>Exemplo 03</h2>
        <form onSubmit={ (e)=>{e. preventDefault()}}>
          Nome: <input value={nome} onChange={nomeDigitado}/>
          <button type="button" onClick={ exibirConteudo }>Enviar</button>
          <p>Nome digitado:{ conteudo }</p>
        </form>


        <h2>Exercício 01</h2>
        <form onSubmit={(e) => {e.preventDefault() }}>
        <p>Mensagem: {frase}</p>
        <button type="button" onClick={()=>{mudaFrase()}}>Mudar texto</button>

        </form>

        </>
      )
}