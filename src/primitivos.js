// vars
// nunca use var
var a = 1
const b = 2
let c = 3

console.log(a)
console.log(b)
console.log(c)
a = 4

c = 6
console.log(a)
console.log(b)
console.log(c)

// tipos primitivos

// number
const number = 25

// string
const string = `Hello`

//boolean - true - false
const boolean = true

// null
const vazio = null

// Tipos Avancados
// Objeto
const obj = {
    name: `Cleyton`,
    idade: 20,
    dados: {
        telefone: 1245566761,
    }

}

console.log(obj)
console.log(obj.name)
console.log(obj.dados.telefone)

// undefined - Ainda nao definido
console.log(obj.telefone)

obj.name = `Jeraldo`
console.log(obj)

//Array - Vetor

const lista = [123, `Camila`, {}, null]
console.log(lista)

const novaLista1 = lista.map(function (item) {
    item = `Chatuba`
    return item
}
)


console.log(novaLista1)

// Function

function soma(a, b) {
    return a + b
}

const resultado = soma(4, 6)
console.log(resultado)

// Arrow Function
const subtrai = (a, b) => {
    return a - b
}

const resultado2 = subtrai(3, 1)
console.log(resultado2)

const executa = (func) => {
    func()

}
console.log(
    executa(
        () => {
            console.log(`E nois`)
        }
    ))