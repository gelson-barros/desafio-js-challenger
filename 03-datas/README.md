Esta série de desafios testa seu conhecimento sobre datas Javascript.

EXERCICIO 01
Verifique se duas datas caem exatamente no mesmo dia

// Escreva uma função que leva duas instâncias de data como argumento
// Deve retornar verdadeiro se eles caírem exatamente no mesmo dia
// Deve retornar falso caso contrário

function myFunction() {

   return
}

myFunction(new Date('2000/01/01'), new Date('2000/01/01'))
Esperado
true
myFunction(new Date('2000/01/01'), new Date('2000/01/02'))
Esperado
false
myFunction(new Date('2001/01/01'), new Date('2000/01/01'))
Esperado
false
myFunction(new Date('2000/11/01'), new Date('2000/01/01'))
Esperado
false

EXERCICIO 02
Verifique se duas datas são iguais

// Parece fácil, mas você precisa saber o truque
// Escreva uma função que leva duas instâncias de data como argumento
// Deve retornar verdadeiro se as datas forem iguais
// Deve retornar falso caso contrário

function myFunction() {

   return
}

myFunction(new Date('2000/01/01 08:00:00'), new Date('2000/01/01 08:45:00'))
Esperado
false
myFunction(new Date('2000/01/01 08:00:00'), new Date('2000/01/01 08:00:00'))
Esperado
true
myFunction(new Date('2001/01/01 08:00:00'), new Date('2000/01/01 08:00:00'))
Esperado
false

EXERCICIO 03
Verifique se uma data é anterior a outra

// Escreva uma função que tenha como argumento um objeto com as propriedades a e b, cada uma contendo uma instância de data
// Deve retornar verdadeiro se a data a for anterior à data b
// Deve retornar falso caso contrário

function myFunction() {

   return
}

myFunction({a: new Date('2000/01/01 08:00:00'), b: new Date('2000/01/01 08:45:00')})
Esperado
true
myFunction({a: new Date('2000/01/01 08:45:00'), b: new Date('2000/01/01 08:00:00')})
Esperado
false
myFunction({a: new Date('2000/01/01 08:00:00'), b: new Date('2000/01/01 08:00:00')})
Esperado
false

EXERCICIO 04
Retorna o número de dias entre duas datas

// Escreva uma função que leva duas instâncias de data como argumento
// Deve retornar o número de dias entre essas datas

function myFunction() {

   return
}

myFunction(new Date('2020-06-11'), new Date('2020-06-01'))
Esperado
10
myFunction(new Date('2000-01-01'), new Date('2020-06-01'))
Esperado
7457

EXERCICIO 05
Adicione n dias a uma data existente

// Escreva uma função que tenha como argumento um objeto com as propriedades date e daysToAdd, contendo uma data Javascript e um número
// Deve adicionar daysToAdd dias à data e retornar o número de milissegundos desde 1º de janeiro de 1970, 00:00:00 UTC

function myFunction() {

   return
}

myFunction({ date: new Date(Date.UTC(2000,01,01)), daysToAdd: 31 })
Esperado
952041600000
myFunction({ date: new Date(Date.UTC(2000,01,01)), daysToAdd: 10 })
Esperado
950227200000
myFunction({ date: new Date(Date.UTC(2000,02,28,)), daysToAdd: 2 })
Esperado
954374400000

EXERCICIO 06
Verifique se duas datas estão dentro de 1 hora uma da outra
// Escreva uma função que leva duas instâncias de data como argumento
// Deve retornar verdadeiro se a diferença entre as datas for menor ou igual a 1 hora
// Deve retornar falso caso contrário

function myFunction() {

   return
}

myFunction(new Date('2000/01/01 08:00:00'), new Date('2000/01/01 08:45:00'))
Esperado
true
myFunction(new Date('2000/01/01 09:00:00'), new Date('2000/01/01 08:45:00'))
Esperado
true
myFunction(new Date('2000/01/01 08:00:00'), new Date('2000/01/01 09:45:00'))
Esperado
false
myFunction(new Date('2000/01/01 08:00:00'), new Date('2000/01/01 09:00:00'))
Esperado
true

EXERCICIO 07
Calcule a diferença entre duas datas em horas, minutos e segundos

// Este é um desafio mais difícil
// Escreva uma função que recebe duas instâncias de data como argumentos
// Deve retornar um objeto com as propriedades 'hrs', 'min' e 'sec'
// Os valores correspondentes devem exibir a diferença absoluta entre as duas datas em horas, minutos e segundos

function myFunction() {

   return
}

myFunction(new Date('2000/01/01 08:00:00'), new Date('2000/01/01 08:45:10'))
Esperado
{ hrs: 0, min: 45, sec: 10 }
myFunction(new Date('2000/01/01 09:50:23'), new Date('2000/01/01 08:00:00'))
Esperado
{ hrs: 1, min: 50, sec: 23 }
myFunction(new Date('2000/01/01 11:04:12'), new Date('2000/01/01 08:00:00'))
Esperado
{ hrs: 3, min: 4, sec: 12 }


