import assert from 'assert'
import proportional_frequency_words from '../../stages/proportional-frequency-words.js'

{
    const proportional_frequency_word = proportional_frequency_words([
        { word: 'artigo', frequency: 2 },
        { word: 'descreve', frequency: 1 },
        { word: 'comparativo', frequency: 1 },
        { word: 'dois', frequency: 5 },
        { word: 'algoritmos', frequency: 1 },
        { word: 'área', frequency: 1 },
        { word: 'mineração', frequency: 7 },
        { word: 'textos', frequency: 1 },
        { word: 'quais', frequency: 2 },
        { word: 'utilizados', frequency: 1 },
        { word: 'tarefa', frequency: 1 },
        { word: 'sumarização', frequency: 3 },
        { word: 'automática', frequency: 1 },
        { word: 'documentos', frequency: 2 }
    ])
    assert.deepStrictEqual(proportional_frequency_word, [
        { word: 'artigo', frequency: 2, peso: 0.2857142857142857 },
        { word: 'descreve', frequency: 1, peso: 0.14285714285714285 },
        { word: 'comparativo', frequency: 1, peso: 0.14285714285714285 },
        { word: 'dois', frequency: 5, peso: 0.7142857142857143 },
        { word: 'algoritmos', frequency: 1, peso: 0.14285714285714285 },
        { word: 'área', frequency: 1, peso: 0.14285714285714285 },
        { word: 'mineração', frequency: 7, peso: 1 },
        { word: 'textos', frequency: 1, peso: 0.14285714285714285 },
        { word: 'quais', frequency: 2, peso: 0.2857142857142857 },
        { word: 'utilizados', frequency: 1, peso: 0.14285714285714285 },
        { word: 'tarefa', frequency: 1, peso: 0.14285714285714285 },
        { word: 'sumarização', frequency: 3, peso: 0.42857142857142855 },
        { word: 'automática', frequency: 1, peso: 0.14285714285714285 },
        { word: 'documentos', frequency: 2, peso: 0.2857142857142857 }
    ])
    console.log('Proportional-frequency-words is OK')
}