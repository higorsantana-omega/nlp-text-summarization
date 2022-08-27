import assert from 'assert'
import preprocessing from '../../stages/pre-processing.js'

{
    const text = `Este artigo descreve um comparativo entre dois algoritmos da área
    de mineração de textos, os quais são utilizados na tarefa de sumarização
    automática de documentos. Foram comparados nos experimentos o algoritmo
    clássico de Luhn e o algoritmo GistSumm, sendo realizadas dois tipos de
    avaliação, ambas utilizando o Português do Brasil como idioma alvo. A
    primeira consistiu em gerar um resumo de um texto fonte com cada
    algoritmo,e a avaliação foi conduzida utilizando avaliadores humanos que
    indicaram a coerência nos resumos de cada um. Por outro lado, a segunda foi
    conduzida por meio de uma avaliação baseada no resumo, no qual os
    avaliadores responderam perguntas sobre o texto original possuindo como
    fonte de consulta somente o resumo gerado pelos algoritmos. Após as análises,
    foi demonstrado que o algoritmo GistSumm`
    const pre_processing_text = preprocessing(text)
    assert.deepStrictEqual(pre_processing_text, 'artigo descreve comparativo dois algoritmos área mineração textos quais utilizados tarefa sumarização automática documentos comparados experimentos algoritmo clássico luhn algoritmo gistsumm sendo realizadas dois tipos avaliação ambas utilizando português brasil idioma alvo primeira consistiu gerar resumo texto fonte cada algoritmoe avaliação conduzida utilizando avaliadores humanos indicaram coerência resumos cada um outro lado segunda conduzida meio avaliação baseada resumo avaliadores responderam perguntas sobre texto original possuindo fonte consulta somente resumo gerado algoritmos após análises demonstrado algoritmo gistsumm')
    console.log('Pre-processing is OK')
}