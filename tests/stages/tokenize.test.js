import assert from 'assert'
import proportional_frequency_words from '../../stages/proportional-frequency-words.js'
import tokenize from '../../stages/tokenize.js'

{
    const text = `Este artigo descreve um comparativo entre dois algoritmos da área
    de mineração de textos. os quais quais são utilizados na tarefa de sumarização
    automática de documentos.`

    const tokenized = tokenize(text)
    assert.deepStrictEqual(tokenized, [
    'Este artigo descreve um comparativo entre dois algoritmos da área de mineração de textos.',
    'os quais quais são utilizados na tarefa de sumarização automática de documentos.'
    ])
    console.log('Tokenized is OK')
}