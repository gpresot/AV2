import "./Votacao.css";
import { listarForaDaRoca } from "../services/votacaoService";
import { listarNaRoca } from "../services/votacaoService";
import { registrarVoto } from "../services/votacaoService";
import { useState } from "react";

const [ultimoVoto, setUltimoVoto] = useState(null);
const [votosNaSessao, setVotosNaSessao] = useState(0);

function handleVotar(Participante){
    registrarVoto(participante.id)
    {naRoca.map((p) => (
        <ParticipanteCard 
        key={p.id} 
        participante={p} 
        onVotar={handleVotar}/>
    ))}
}

export default handleVotar;