import "./ParticipanteCard.css";


function ParticipanteCard({participante, onVotar}) {
    const { nome, foto, naRoca} = participante;
    return (
        <main>
            <article className={naRoca ? 'card card-roca' : 'card'}>
                {naRoca && <span className="selo-roca"> Na roça </span>}
                <img src={foto} alt={nome} className="card-foto"/>
            </article>
            {onVotar && (
                <button type="button" onClick={() => onVotar(participante)}>
                    Votar para eliminar
                </button>
            )}
        </main>
    );
}

export default ParticipanteCard;