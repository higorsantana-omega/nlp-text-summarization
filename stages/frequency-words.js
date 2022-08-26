export default function frequency_word (text) {
    const separate_words = text.trim().split(' ')

    const total_frequency_word = []

    for (let i = 0; i < separate_words.length; i++) {
        const search_actual_word = separate_words
            .filter(word => word === separate_words[i])
            .length
        total_frequency_word.push({
            word: separate_words[i],
            frequency: search_actual_word
        })
    }

    return total_frequency_word
}