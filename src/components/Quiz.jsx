import React, { useState } from 'react'
import Questao from './Questao';
import '../../src/App.css'


const Quiz = () => {

    const [respostasQuiz, setRespostasQuiz] = useState([]);

    const salvarResposta = (r) => {
        setRespostasQuiz([...respostasQuiz, r])
    }

    function corrigirRespostas(){
        let corretas = 0;

        if(respostasQuiz.length < 3){
            alert("Você precisa responder todas as perguntas antes de finalizar!");
            location.reload();
        }else {
            corretas = respostasQuiz[0] === "b" ? corretas+1 : corretas;
            corretas = respostasQuiz[1] === "a" ? corretas+1 : corretas;
            corretas = respostasQuiz[2] === "d" ? corretas+1 : corretas;
            alert(`Você acertou ${corretas}/3`);
            location.reload();
        }
    }

    const q1 = [
        "Parte de um sistema que é oculta para o usuário.", 
        "Parte de um sistema que é visível e interativa ao usuário.", 
        "Parte lógica que recebe as regras de negócio.", 
        "Nenhuma das alternativas anteriores."
    ];

    const q2 = [
        "Uma poderosa biblioteca Javascript.",
        "Uma linguagem de Programação.",
        "Um servidor de Cloud.",
        "Todas as respostas anteriores."
    ];

    const q3 = [
        "Java, golang e python.",
        "AWS, Google Cloud e Azure.",
        "Kotlin, HTML e CSS.",
        "HTML, CSS e JavaScript."
    ]

    return(
        <div className='flex-container'>

            <div id="div1">
                <h1>Quiz de Front-End</h1>
                <Questao pergunta="#1 - O que é Front-End?" respostas={q1} acao={salvarResposta}/>
                <Questao pergunta="#2 - O que é React JS?" respostas={q2} acao={salvarResposta}/>
                <Questao pergunta="#3 - Quais as principais tecnologias do mundo Front-End?" respostas={q3} acao={salvarResposta}/>
            </div>

            <div id="div2">
                <h4>Questões respondidas:</h4>
                {respostasQuiz.map((r, i) => 
                <section key={i}>
                    <p>Questão #{i+1}</p>
                    <p>Escolha: {r}</p>
                </section>)}
            </div>

            <div id="div3">
                <button onClick={corrigirRespostas}>Finalizar Quiz</button>
            </div>
        </div>

    )

}

export default Quiz