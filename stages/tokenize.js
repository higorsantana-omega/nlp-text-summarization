import natural from 'natural'

export default function tokenize (text) {
    const tokenizer = new natural.SentenceTokenizer()
    const tokenized = tokenizer.tokenize(text.replace(/\s+/g, ' ').trim())
    return tokenized
}
