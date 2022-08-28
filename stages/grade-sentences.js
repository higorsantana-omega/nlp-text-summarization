export default function grade_sentences (sentences, frequencies) {
    const grade = {}
    const just_words = frequencies.map(fr => fr.word)

    for (let i = 0; i < sentences.length; i++) {
        const word = sentences[i].split(' ')

        let grade_sentence = 0
        for (let j = 0; j < word.length; j++) {
            const frequency = just_words.includes(word[j].toLowerCase())
            if (frequency) {
                const actual_frequency = frequencies.find(fr => fr.word === word[j].toLowerCase())
                grade_sentence += actual_frequency.peso
            }
        }
        grade[sentences[i]] = grade_sentence
        
    }

    return grade
}