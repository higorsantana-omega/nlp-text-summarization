import buidHTML from "../build-html/index.js"

export default function summary (sentences) {
    const sort = Object.fromEntries(
        Object.entries(sentences).sort(([,a], [,b]) => b-a)
    )
    const bestSentences = getBestSentences(sort)

    display(sentences, bestSentences)

    return bestSentences.join(' ')
}

function getBestSentences (sentences) {
    if (Object.keys(sentences).length > 3) {
        return Object.keys(sentences).slice(0, 6)
    }

    if (Object.keys(sentences).length === 1) {
        return Object.keys(sentences)
    }

    return Object.keys(sentences).slice(0, 6)
}

function display (sentences, bestSentences) {
    let textHTML = ''
    for (const sentence in Object.keys(sentences)) {
        if (bestSentences.find(s => s === Object.keys(sentences)[sentence])) {
            textHTML += `<mark>${Object.keys(sentences)[sentence]}</mark>`
        } else {
            textHTML += Object.keys(sentences)[sentence]
        }
    }
    buidHTML(`
        <h1>Resumexxxx</h1>
        ${textHTML}
    `)
}