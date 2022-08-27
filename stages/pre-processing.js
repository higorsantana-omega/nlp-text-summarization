export default function preprocessing (text = '') {
    const text_size = text.length

    const lowercase_text = text.toLowerCase()
    const without_spaces_text = lowercase_text.replace(/\s+/g, ' ').trim()
    const separate_words = without_spaces_text.split(' ')

    const text_without_stop_words = stop_word(separate_words)
    const text_without_endpoints = removal_endpoints(text_without_stop_words)

    const join_text = text_without_endpoints.join(' ')
    return join_text
}

function stop_word (words = []) { 
    const without_stop_words = []

    for (let i = 0; i < words.length; i++) {
        if (words[i].length > 2)  without_stop_words.push(words[i])
    }

    return without_stop_words
}

function removal_endpoints (words = []) {
    const endpoints = `!"#$%&'()*+, -./:;<=>?@[\]^_~`.split('')
    const more_endpoints = "`{|}".split('')

    const allendpoints = [...endpoints, ...more_endpoints]

    const without_endpoints = []

    for (let i = 0; i < words.length; i++) {
        let actual_word = words[i]

        for (let j = 0; j < allendpoints.length; j++) {
            actual_word = actual_word.replace(allendpoints[j], '')
        }

        without_endpoints.push(actual_word)
    }

    return without_endpoints
}