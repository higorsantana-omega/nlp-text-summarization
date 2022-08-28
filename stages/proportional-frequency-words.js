export default function proportional_frequency_words (frequency_word) {
    const highest_value = frequency_word.reduce((w, w2) => w = w.frequency > w2.frequency ? w : w2, 0);

    for (let i = 0; i < frequency_word.length; i++) {
        frequency_word[i].peso = frequency_word[i].frequency / highest_value.frequency
    }
   
    return frequency_word
}