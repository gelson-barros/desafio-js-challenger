Esta série de desafios cobre o objeto Conjunto de Javascript.

EXERCICIO 01
Verifique se o valor está presente no conjunto

// Escreva uma função que recebe um Set e um valor como argumentos
// Verifique se o valor está presente no Conjunto

function myFunction() {

   return
}

myFunction(new Set([1, 2, 3]), 2)
Esperado
true
myFunction(new Set([123]), 2)
Esperado
false
myFunction(new Set(['1', '2', '3']), '2')
Esperado
true
myFunction(new Set('123'), '2')
Esperado
true

EXERCICIO 02
Converter um conjunto em matriz

// Escreva uma função que tenha um Set como argumento
// Converter o conjunto em uma matriz
// Retorna o Array

function myFunction() {

   return
}

myFunction(new Set([1, 2, 3]))
Esperado
[1, 2, 3]
myFunction(new Set([123]))
Esperado
[123]
myFunction(new Set(['1', '2', '3']))
Esperado
['1', '2', '3']
myFunction(new Set('123'))
Esperado
['1', '2', '3']

EXERCICIO 03
Obtenha a união de dois conjuntos

// Escreva uma função que recebe dois conjuntos como argumentos
// Crie a união dos dois conjuntos
// Retorna o resultado
// Dica: tente não mudar para Arrays, isso tornaria seu código mais lento

function myFunction() {

   return
}

myFunction(new Set('123'), new Set('234'))
Esperado
new Set('1234')
myFunction(new Set([1, 2, 3]), new Set([3, 4, 5]))
Esperado
new Set([1, 2, 3, 4, 5])
myFunction(new Set([false, false, NaN]), new Set([true, true, NaN]))
Esperado
new Set([false, NaN, true])

EXERCICIO 04
Obtenha a interseção de dois conjuntos Javascript

// Escreva uma função que recebe dois conjuntos, digamos setA e setB, como argumentos
// Obtenha a interseção dos conjuntos
// Em outras palavras, retorna um conjunto contendo todos os elementos que estão tanto em setA quanto em setB

function myFunction() {

   return
}

myFunction(new Set([1, 2, 3]), new Set([4, 5, 6]))
Esperado
new Set()
myFunction(new Set('12345'), new Set([...'45678']))
Esperado
new Set('45')
myFunction(new Set([1, 2, 3]), new Set([2, 3, 4]))
Esperado
new Set([2, 3])

EXERCICIO 05
Excluir elemento do conjunto

// Escreva uma função que recebe um Set e um valor como argumento
// Se existente no Conjunto, remova o valor do Conjunto
// Retorna o resultado

function myFunction() {

   return
}

myFunction(new Set([1, 2, 3]), 1)
Esperado
new Set([2, 3])
myFunction(new Set('12345'), '3')
Esperado
new Set(['1', '2', '4', '5'])
myFunction(new Set([1, 2, 3]), 4)
Esperado
new Set([1, 2, 3])

EXERCICIO 06
Adicionar vários elementos ao conjunto

// Escreva uma função que recebe um Set e um array como argumentos
// Se ainda não existir, adicione cada elemento da matriz ao Conjunto
// Retorna o conjunto modificado

function myFunction() {

   return
}

myFunction(new Set([1, 2, 3]), [4, 5, 6])
Esperado
new Set([1, 2, 3, 4, 5, 6 ])
myFunction(new Set('12345'), [...'6789'])
Esperado
new Set([...'123456789'])
myFunction(new Set([1, 2, 3]), [2, 3])
Esperado
new Set([1, 2, 3])

EXERCICIO 07
Criação de conjuntos Javascript

// Escreva uma função que recebe três elementos de qualquer tipo como argumentos
// Crie um conjunto a partir desses elementos
// Retorna o resultado

function myFunction() {

   return
}

myFunction(1, 'b', 3)
Esperado
new Set([1, 'b', 3])
myFunction(NaN, null, false)
Esperado
new Set([NaN, null, false])
myFunction('a', ['b'], { c: 3 })
Esperado
new Set(['a', ['b'], { c: 3 }])