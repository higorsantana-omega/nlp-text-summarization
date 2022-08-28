import natural from 'natural'

export default function tokenize (text) {
    const tokenizer = new natural.SentenceTokenizer()
    return tokenizer.tokenize(text.replace(/\s+/g, ' ').trim())
}
