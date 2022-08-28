import frequency_word from "./stages/frequency-words.js";
import preprocessing from "./stages/pre-processing.js";
import proportional_frequency_words from "./stages/proportional-frequency-words.js";
import tokenize from "./stages/tokenize.js";

function init () {
    const text = `Este artigo descreve um comparativo entre dois algoritmos da área
    de mineração de textos. os quais quais são utilizados na tarefa de sumarização
    automática de documentos.`

    const text_pre_processing = preprocessing(text)
    const frequency_words = frequency_word(text_pre_processing)
    const proportional_words = proportional_frequency_words(frequency_words)
    const tokenized = tokenize(text)
    console.log(tokenized)
}

init()