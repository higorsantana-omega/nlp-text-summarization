export default function preprocessing (text = '') {
    const text_size = text.length

    const lowercase_text = text.toLowerCase()
    const separate_words = lowercase_text.trim().split(' ')

    const text_without_stop_words = stop_word(separate_words)
    const text_without_endpoints = removal_endpoints(text_without_stop_words)

    return text_without_endpoints
}

function stop_word (words = []) { 
    const without_stop_words = []

    for (let i = 0; i < words.length; i++) {
        if (words[i].length > 2)  without_stop_words.push(words[i])
    }

    return without_stop_words
}

function removal_endpoints (words = []) {
    const endpoints = ['.', ',']

    const without_endpoints = []

    for (let i = 0; i < words.length; i++) {
        for (let j = 0; j < endpoints.length; j++) {
            const remove = words[i].replace(endpoints[j], '')
            without_endpoints.push(remove)
        }
    }

    return without_endpoints
}