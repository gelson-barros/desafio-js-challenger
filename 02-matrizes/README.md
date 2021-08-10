Esta série de desafios testa seu conhecimento sobre matrizes Javascript.

EXERCICIO 01
Classifique uma matriz de strings em ordem alfabética

// Escreva uma função que recebe um array de strings como argumento
// Deve retornar a matriz com seus valores classificados em ordem alfabética

function myFunction() {

   return
}

myFunction(['b', 'c', 'd', 'a'])
Esperado
['a', 'b', 'c', 'd']
myFunction(['z', 'c', 'd', 'a', 'y', 'a', 'w'])
Esperado
['a', 'a', 'c', 'd', 'w', 'y', 'z']

EXERCICIO 02
Classifica uma matriz de números em ordem decrescente

// Escreva uma função que recebe uma matriz de números como argumento
// Deve retornar uma matriz com os números classificados em ordem decrescente

function myFunction() {

   return
}

myFunction([1,3,2])
Esperado
[3,2,1]
myFunction([4,2,3,1])
Esperado
[4,3,2,1]

EXERCICIO 03
Retorna os últimos n elementos da matriz

// Escreva uma função que recebe uma matriz e um número (n) como argumentos
// Deve retornar os últimos n elementos da matriz
// Se a matriz tiver menos de n elementos, retorna todos

function myFunction() {

   return
}

myFunction([1, 2, 3, 4, 5], 2)
Esperado
[ 4, 5 ]
myFunction([1, 2, 3], 6)
Esperado
[ 1, 2, 3 ]
myFunction([1, 2, 3, 4, 5, 6, 7, 8], 3)
Esperado
[ 6, 7, 8 ]

EXERCICIO 04
Retorna a média de uma matriz de números

// Escreva uma função que recebe uma matriz de números como argumento
// Deve retornar a média dos números

function myFunction() {

   return
}

myFunction([10,100,40])
Esperado
50
myFunction([10,100,1000])
Esperado
370
myFunction([-50,0,50,200])
Esperado
50

EXERCICIO 05
Crie um intervalo de números

// Escreva uma função que recebe dois números, digamos mínimo e máximo, como argumentos
// Retorna uma matriz de números no intervalo de min a max

function myFunction() {

   return
}

myFunction(2, 10)
Esperado
[2, 3, 4, 5, 6, 7, 8, 9, 10]
myFunction(1, 3)
Esperado
[1, 2, 3]
myFunction(-5, 5)
Esperado
[-5, -4, -3, -2, -1, 0,  1,  2,  3,  4, 5]
myFunction(2, 7)
Esperado
[2, 3, 4, 5, 6, 7]

EXERCICIO 06
Sum up all array elements with values greater than
// Write a function that takes an array and a number, say num, as arguments
// Sum up all array elements with a value greater than num
// Return the sum

function myFunction() {

   return
}

myFunction([1, 2, 3, 4, 5, 6, 7], 2)
Esperado
25
myFunction([-10, -11, -3, 1, -4], -3)
Esperado
1
myFunction([78, 99, 100, 101, 401], 99)
Esperado
602

EXERCICIO 07
Remova um elemento específico da matriz

// Escreva uma função que recebe uma matriz e um valor como argumento
// A função deve limpar o array de todas as ocorrências do valor dado e retornar a versão limpa

function myFunction() {

   return
}

myFunction([1,2,3], 2)
Esperado
[1, 3]
myFunction([1,2,'2'], '2')
Esperado
[1, 2]
myFunction([false,'2',1], false)
Esperado
['2', 1]
myFunction([1,2,'2',1], 1)
Esperado
[2, '2']

EXERCICIO 08
Verifique se todos os elementos da matriz são iguais

// Escreva uma função que tenha um array como argumento
// Deve retornar verdadeiro se todos os elementos da matriz forem iguais
// Deve retornar falso caso contrário

function myFunction() {

   return
}

myFunction([true, true, true, true])
Esperado
true
myFunction(['test', 'test', 'test'])
Esperado
true
myFunction([1,1,1,2])
Esperado
false
myFunction(['10',10,10,10])
Esperado
false

EXERCICIO 09
Retorna a string mais longa de uma matriz de strings

// Escreva uma função que recebe um array de strings como argumento
// Deve retornar a string mais longa

function myFunction() {

   return
}

myFunction(['help', 'me'])
Esperado
'help'
myFunction(['I', 'need', 'candy'])
Esperado
'candy'

EXERCICIO 10
Mesclar um número arbitrário de matrizes

// Escreva uma função que receba argumentos um número arbitrário de matrizes
// Deve retornar um array contendo os valores de todos os arrays

function myFunction() {

   return
}

myFunction([1, 2, 3], [4, 5, 6])
Esperado
[1, 2, 3, 4, 5, 6]
myFunction(['a', 'b', 'c'], [4, 5, 6])
Esperado
['a', 'b', 'c', 4, 5, 6]
myFunction([true, true], [1, 2], ['a', 'b'])
Esperado
[true, true, 1, 2, 'a', 'b']

EXERCICIO 11
Mesclar duas matrizes com valores duplicados

// Escreva uma função que recebe dois arrays como argumentos
// Mesclar os dois arrays e remover os valores duplicados
// Classifica o resultado da mesclagem em ordem crescente
// Retorna o array resultante

function myFunction() {

   return
}

myFunction([1, 2, 3], [3, 4, 5])
Esperado
[ 1, 2, 3, 4, 5 ]
myFunction([-10, 22, 333, 42], [-11, 5, 22, 41, 42])
Esperado
[ -11, -10, 5, 22, 41,  42, 333]

Todos Resolvidos.