import { useState } from "react";
import { calcularResultado, calcularTotalVotos, obterVotos, zerarVotos } from "../services/votacaoService";

const [voto, setVotos]=useState(() => obterVotos());
const resultado = calcularResultado(votos);
const total = calcularTotalVotos (votos);

function Resultado() {
    return (
        <main>
            <div className="barra">
                <div className="barra-preenchida" style={{width: '${p.percentual}%'}}>

                </div>
            </div>
        </main>
    );
}

function handleZerar(){
    if(window.confirm('Apagar todos votos ?')) {
        zerarVotos();
        setVotos({});
    }
}

export default Resultado;