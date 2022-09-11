import { extract } from "article-parser";
import { stripHtml } from "string-strip-html";
import frequency_word from "./stages/frequency-words.js";
import grade_sentences from "./stages/grade-sentences.js";
import preprocessing from "./stages/pre-processing.js";
import proportional_frequency_words from "./stages/proportional-frequency-words.js";
import summary from "./stages/summary.js";
import tokenize from "./stages/tokenize.js";

import fs from 'fs'

function readFile () {
    const data = fs.readFileSync('./A-Little-Princess.txt', 'utf-8')
    return data.toString()
}

async function init () {
    const fetchWebsite = await extract('https://pt.wikipedia.org/wiki/PlayStation')
    const cleanedContent = stripHtml(fetchWebsite.content)
    const text = readFile()

    const text_pre_processing = preprocessing(text)
    const frequency_words = frequency_word(text_pre_processing)
    const proportional_words = proportional_frequency_words(frequency_words)
    const tokenized = tokenize(text)
    const grades = grade_sentences(tokenized, proportional_words)
    const generate_summary = summary(grades)
    console.log(generate_summary)
}

init()