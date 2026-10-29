import "./ParticipanteCard.css";


function ParticipanteCard({Participante, onVotar}) {
    const {NamedNodeMap, foto, naRoca} = Participante;
    return (
        <main>
            <article className={naRoca ? 'card card-roca' : 'card'}>
                {naRoca && <span className="selo-roca"> Na roça </span>}
                <img src="{foto}" alt="{nome}" className="card-foto"/>
            </article>
            {onVotar && (
                <button type="button" onClick={() => onVotar(Participante)}>
                    Votar para eliminar
                </button>
            )}
        </main>
    );
}

export default ParticipanteCard;