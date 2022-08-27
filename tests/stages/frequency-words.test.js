import assert from 'assert'
import frequency_word from '../../stages/frequency-words.js'

{
    const text = `algoritmo algoritmo lugar onde`
    const frequency_words = frequency_word(text)
    assert.deepStrictEqual(frequency_words, [
        { word: 'algoritmo', frequency: 2 },
        { word: 'lugar', frequency: 1 },
        { word: 'onde', frequency: 1 }
    ])
    console.log('Frequency-words is OK')
}