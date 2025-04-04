"use client"
import Image from "next/image";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";
 
interface propDisco{
    id          :   String;
    banda       :   String;
    album       :   String;
    imagem      :   String;
    categoria   :   String;
    links       :   String;
    lancamento  :   String;
    faixas      :   String;
    descricao   :   String
}
 
const pageDisco =  () =>{
   
    const {id} = useParams();
 
    const [disco,setDisco] = useState<propDisco | null>(null);
 
    const [erro, setErro] = useState< string | null>(null);
 
    useEffect(()=>{
       
        const buscarDisco = async () => {
            try{
                const response = await fetch ('/discos.json')
                if(!response.ok){
                    throw new Error("Erro ao acessar a base de dados");
                }
                const data = await response.json();
               
                const encontrarDisco = data.find((d:{id : String})=>d.id === id);
                {/*D = um apelido de Dados */}
               
                if(!encontrarDisco){
                    throw new Error ("Albúm não encontrado!");
                   
                }
               
                setDisco(encontrarDisco);
               
                setErro(null);
 
            } catch(error){
                setErro(error instanceof Error ? error.message: "Erro desconhecido");
            }
        }
        if(id){
            buscarDisco()
        }
    },[id])
        if (erro){
            return <p>{erro}</p>
        }
        if(!disco){
            return <p>Carregando...</p>
        }
    return(
        <>
            <Image src={`/imagens/${disco?.imagem}.jpg`} alt="" width={100} height={100}/>
            <h1>{disco?.album}</h1>
            <p><b>Banda:</b>{disco?.banda}</p>
            <p><b>Ano:</b>{disco?.lancamento}</p>
            <p><b>Categoria:</b>{disco?.categoria}</p>
            <p><b>Faixas:</b>{disco?.faixas}</p>
            <p><b>Release:</b>{disco?.descricao}</p>
        </>
    )
}
export default pageDisco;
 