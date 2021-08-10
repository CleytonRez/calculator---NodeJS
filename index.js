console.log("------- Calculadora --------")

const a = 25
const b = 30

const lista = [1, 3, 5, 6, 7, 5]

const soma = (a, b) => {
    return a + b
}

const subtrai = (a, b) => {
    return a - b
}

const divisao = (a, b) => {
    return a / b
}

const multiplicacao = (a, b) => {
    return a * b
}

const resultadosoma = soma(a, b)
console.log(`Resultado Soma: `, resultadosoma)

const resultadosubtrai = subtrai(a, b)
console.log(`Resultado Subtração: `, resultadosubtrai)

const resultadodivisao = divisao(a, b)
console.log(`Resultado Divisão: `, resultadodivisao)

const resultadomultiplicacao = multiplicacao(a, b)
console.log(`Resultado Multiplicação: `, resultadomultiplicacao)

lista.map((item) => {
    console.log(item, 35)
})