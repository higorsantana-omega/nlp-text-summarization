import frequency_word from "./stages/frequency-words.js";
import preprocessing from "./stages/pre-processing.js";

function init () {
    const text = `Este artigo descreve um comparativo entre dois algoritmos da área
    de mineração de textos, os quais são utilizados na tarefa de sumarização
    automática de documentos. Foram comparados nos experimentos o algoritmo
    clássico de Luhn e o algoritmo GistSumm, sendo realizadas dois tipos de
    avaliação, ambas utilizando o Português do Brasil como idioma alvo. A
    primeira consistiu em gerar um resumo de um texto fonte com cada
    algoritmo,e a avaliação foi conduzida utilizando avaliadores humanos que
    indicaram a coerência nos resumos de cada um. Por outro lado, a segunda foi
    conduzida por meio de uma avaliação baseada no resumo, no qual os
    avaliadores responderam perguntas sobre o texto original possuindo como
    fonte de consulta somente o resumo gerado pelos algoritmos. Após as análises,
    foi demonstrado que o algoritmo GistSumm`

    const text_pre_processing = preprocessing(text)
    const frequency_words = frequency_word(text_pre_processing)
}

init()