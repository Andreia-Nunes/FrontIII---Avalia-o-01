import React, {useState} from 'react'

const Questao = (props) => {

    const [respondida, setRespondida] = useState(false);

    function handleClick(i){
        if(!respondida){
            props.acao(i);
            setRespondida(true);
        } else{
            alert("Questão já foi respondida");
        }
        
    }
    
    return(
        <div>
            <h2>{props.pergunta}</h2>
            <ol type="a">
                {props.respostas.map((resposta, i) => <li key={i}>{resposta} <button onClick={() => handleClick(String.fromCharCode(97 + i))}>Escolher</button></li> )}
            </ol>
        </div>
    )
 
}

export default Questao;