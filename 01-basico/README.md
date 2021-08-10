Esta série de desafios cobre o básico do Javascript

EXERCICIO - 01
Operadores de multiplicação, divisão e comparação

// Escreva uma função que recebe dois números, digamos aeb, como argumentos
// Se a for menor que b, divida a por b
// Caso contrário, multiplique os dois números
// Retorna o valor resultante

function myFunction() {

   return
}

myFunction(10, 100)
Esperado
0.1
myFunction(90, 45)
Esperado
4050
myFunction(8, 20)
Esperado
0.4
myFunction(2, 0.5)
Esperado
1

EXERCICIO 02
Operadores de comparação, igualdade estrita

// Escreva uma função que recebe dois valores, digamos a e b, como argumentos
// Retorna verdadeiro se os dois valores forem iguais e do mesmo tipo

function myFunction() {

   return
}

myFunction(2, 3)
Esperado
false
myFunction(3, 3)
Esperado
true
myFunction(1, '1')
Esperado
false
myFunction('10', '10')
Esperado
true

EXERCICIO 03
Verifique se um número é par

// Escreva uma função que tenha um número como argumento
// Se o número for par, retorna verdadeiro
// Caso contrário, retorna falso

function myFunction() {

   return
}

myFunction(10)
Esperado
true
myFunction(-4)
Esperado
true
myFunction(5)
Esperado
false
myFunction(-111)
Esperado
false

EXERCICIO 04
Verifique se um número é um número inteiro

// Escreva uma função que tenha um número como argumento
// Se o número for um número inteiro (sem casa decimal), retorna verdadeiro
// Caso contrário, retorna falso

function myFunction() {

   return
}

myFunction(4)
Esperado
true
myFunction(1.123)
Esperado
false
myFunction(1048)
Esperado
true
myFunction(10.48)
Esperado
false

EXERCICIO 05
Verifique se uma string contém outra string e concatene

// Escreva uma função que recebe duas strings, digamos a e b, como argumentos
// Se a contém b, anexe b ao início de a
// Se não, anexe ao final
// Retorna a concatenação

function myFunction() {

   return
}

myFunction("cheese", "cake")
Esperado
"cheesecake"
myFunction("lips", "s")
Esperado
"slips"
myFunction("Java", "script")
Esperado
"Javascript"
myFunction(" think, therefore I am","I")
Esperado
"I think, therefore I am"

EXERCICIO 06
Encontre o próximo número natural mais alto que é divisível por y

// Escreva uma função que recebe dois números, digamos x e y, como argumentos
// Verifique se x é divisível por y
// Se sim, retorna x
// Caso contrário, retorna o próximo número natural mais alto que é divisível por y

function myFunction() {

   return
}

myFunction(1, 23)
Esperado
23
myFunction(23, 23)
Esperado
23
myFunction(7, 3)
Esperado
9
myFunction(-5, 7)
Esperado
0

EXERCICIO 07
Arredonde um número para 2 casas decimais

// Escreva uma função que tenha um número como argumento
// Arredonde o número para o segundo dígito após a vírgula
// Retorna o número arredondado

function myFunction() {

   return
}

myFunction(2.12397)
Esperado
2.12
myFunction(3.136)
Esperado
3.14
myFunction(1.12397)
Esperado
1.12
myFunction(26.1379)
Esperado
26.14

EXERCICIO 08
Limpe o caos por trás dessas cordas

// Parece que algo aconteceu com essas strings
// Você consegue descobrir como limpar o caos?
// Escreva uma função que junte essas strings de forma que formem as palavras 'Javascript', 'Campo' e 'Centro da cidade'!
// Você pode querer aplicar métodos básicos de string JS, como replace (), split (), slice () etc

function myFunction() {

   return
}

myFunction('java', 'tpi%rcs')
Esperado
'Javascript'
myFunction('c%ountry', 'edis')
Esperado
'Countryside'
myFunction('down', 'nw%ot')
Esperado
'Downtown'

EXERCICIO 09
Divida um número em seus dígitos

// Escreva uma função que tenha um número como argumento
// A função deve dividir o número em seus dígitos individuais e retorná-los em uma matriz
// Dica: você pode querer alterar o tipo de número para a divisão

function myFunction() {

   return
}

myFunction(10)
Esperado
[1,0]
myFunction(931)
Esperado
[9,3,1]
myFunction(193278)
Esperado
[1,9,3,2,7,8]


EXERCICIO 10
Encontre a palavra correta incrementando as letras do alfabeto

// Escreva uma função que recebe uma string como argumento
// Do jeito que está, a string não tem significado
// Aumente cada letra para a próxima letra do alfabeto
// Retorna a palavra correta

function myFunction() {

   return
}

myFunction('bnchmf')
Esperado
'coding'
myFunction('bgddrd')
Esperado
'cheese'
myFunction('sdrshmf')
Esperado
'testing'

EXERCICIO 11
Retorne a porcentagem de um número

// Escreva uma função que recebe um objeto com o número e porcentagem das propriedades como argumento
// Retorna a porcentagem fornecida do número

function myFunction() {

   return
}

myFunction({number: 100, percentage: 50})
Esperado
50
myFunction({number: 777, percentage: 2})
Esperado
15.54
myFunction({number: 500, percentage: 99})
Esperado
495

EXERCICIO 12
Quantas vezes ocorre um caracter?

// Escreva uma função que recebe duas strings como argumentos
// Retorna o número de vezes que a primeira string ocorre na segunda string

function myFunction() {

   return
}

myFunction('m', 'How many times does the character occur in this sentence?')
Esperado
2
myFunction('h', 'How many times does the character occur in this sentence?')
Esperado
4
myFunction('?', 'How many times does the character occur in this sentence?')
Esperado
1
myFunction('z', 'How many times does the character occur in this sentence?')
Esperado
0

EXERCICIO 13
Retorna o próximo número primo mais alto

// Este desafio é um pouco mais complexo
// Escreva uma função que tenha um número como argumento
// Se o número for primo, retorna o número
// Caso contrário, retorna o próximo número primo mais alto

function myFunction() {

   return
}

myFunction(38)
Esperado
41
myFunction(7)
Esperado
7
myFunction(115)
Esperado
127
myFunction(2000)
Esperado
2003