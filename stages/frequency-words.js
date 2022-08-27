export default function frequency_word (text) {
    const separate_words = text.trim().split(' ')
    const uniques_word = [...new Set(separate_words)]

    const total_frequency_word = []

    for (let i = 0; i < uniques_word.length; i++) {
        const search_actual_word = separate_words
            .filter(word => word === uniques_word[i])
            .length
        total_frequency_word.push({
            word: uniques_word[i],
            frequency: search_actual_word
        })
    }

    return total_frequency_word
}