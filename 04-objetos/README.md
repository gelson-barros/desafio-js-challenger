Esta série de desafios testa seu conhecimento sobre objetos Javascript.

EXERCICIO 01
Acessando as propriedades do objeto um

// Escreva uma função que recebe um objeto com duas propriedades como argumento
// Deve retornar o valor da propriedade com a chave do país

function myFunction() {

   return
}

myFunction({  continent: 'Asia',  country: 'Japan'})
Esperado
'Japan'
myFunction({  country: 'Sweden',  continent: 'Europe'})
Esperado
'Sweden'

EXERCICIO 02
Acessando propriedades do objeto dois

// Escreva uma função que recebe um objeto com duas propriedades como argumento
// Deve retornar o valor da propriedade com a chave 'prop-2'
// Dica: você pode querer usar o acessador de propriedade de colchetes

function myFunction() {

   return
}

myFunction({  one: 1,  'prop-2': 2})
Esperado
2
myFunction({  'prop-2': 'two',  prop: 'test'})
Esperado
'two'

EXERCICIO 03
Acessando propriedades do objeto três
// Escreva uma função que recebe uma string e um objeto com duas propriedades como argumentos
// Deve retornar o valor da propriedade com chave igual ao valor da string

function myFunction() {

   return
}

myFunction({  continent: 'Asia',  country: 'Japan'}, 'continent')
Esperado
'Asia'
myFunction({  country: 'Sweden',  continent: 'Europe'}, 'country')
Esperado
'Sweden'

EXERCICIO 04
Remover uma propriedade de um objeto

// Escreva uma função que recebe um objeto como argumento
// Deve retornar um objeto com todas as propriedades originais do objeto, mas a propriedade com a chave 'country'

function myFunction() {

   return
}

myFunction({ continent: 'Asia', country: 'Japan', region: 'Kansai' })
Esperado
{ continent: 'Asia', region: 'Kansai' }
myFunction({ country: 'Sweden', continent: 'Europe', planet: 'Earth' })
Esperado
{ continent: 'Europe', planet: 'Earth' }
myFunction({ city: 'Sacramento', state: 'California', country: 'USA', continent: 'North America' })
Esperado
{ city: 'Sacramento', state: 'California', continent: 'North America' }

EXERCICIO 05
Trocar chaves e valores de objetos

// Escreva uma função que recebe um objeto como argumento
// De alguma forma, as propriedades e chaves do objeto se misturaram
// Troca a chave do objeto Javascript com seus valores e retorna o objeto resultante

function myFunction() {

   return
}

myFunction({ bear: 'animal', sow: 'female', boar: 'male', cub: 'young' })
Esperado
{ animal: 'bear', female: 'sow', male: 'boar', young: 'cub' }
myFunction({ sheep: 'animal', ewe: 'female', ram: 'male', lamb: 'young' })
Esperado
{ animal: 'sheep', female: 'ewe', male: 'ram', young: 'lamb' }
myFunction({ Berlin: 'city', Germany: 'country' })
Esperado
{ city: 'Berlin', country: 'Germany' }

EXERCICIO 06
Adicionar propriedade a cada objeto na matriz

// Escreva uma função que recebe um array de objetos e uma string como argumentos
// Adicione uma propriedade com a chave 'continente' e valor igual à string para cada um dos objetos
// Retorna o novo array de objetos
// Dica: tente não transformar a matriz original

function myFunction() {

   return
}

myFunction([{ city: 'Tokyo', country: 'Japan' }, { city: 'Bangkok', country: 'Thailand' }], 'Asia')
Esperado
[{ city: 'Tokyo', country: 'Japan', continent: 'Asia' }, { city: 'Bangkok', country: 'Thailand', continent: 'Asia' }]
myFunction([{ city: 'Stockholm', country: 'Sweden' }, { city: 'Paris', country: 'France' }], 'Europe')
Esperado
[{ city: 'Stockholm', country: 'Sweden', continent: 'Europe' }, { city: 'Paris', country: 'France', continent: 'Europe' }]

EXERCICIO 07
Mesclar dois objetos com chaves correspondentes

// Escreva uma função que recebe dois objetos como argumentos
// Infelizmente, a propriedade 'country' no segundo objeto tem a chave errada
// Em vez disso, deve se chamar 'cidade'
// Mesclar os dois objetos e corrigir o nome de propriedade errado
// Retorna o objeto resultante
// Deve ter as propriedades 'planeta', 'continente', 'país', 'estado' e 'cidade'

function myFunction() {

   return
}

myFunction({ continent: 'Europe', country: 'Germany' }, { planet: 'Earth', country: 'Munich', state: 'Bavaria' })
Esperado
{ continent: 'Europe', country: 'Germany', planet: 'Earth', state: 'Bavaria', city: 'Munich'}
myFunction({ continent: 'North America', country: 'USA' }, { planet: 'Earth', country: 'Los Angeles', state: 'California' })
Esperado
{ continent: 'North America', country: 'USA', planet: 'Earth', state: 'California', city: 'Los Angeles'}

EXERCICIO 08
Extração de informações de objetos

// Escreva uma função que recebe um objeto como argumento contendo propriedades com informações pessoais
// Extraia firstName, lastName, size e weight se disponível
// Se o tamanho ou o peso forem fornecidos, transforme o valor em uma string
// Anexe a unidade cm ao tamanho
// Anexe a unidade kg ao peso
// Retorna um novo objeto com todas as propriedades disponíveis nas quais estamos interessados

function myFunction() {

   return
}

myFunction({fn: 'Lisa', ln: 'Müller', age: 17, size: 175, weight: 67})
Esperado
{fn: 'Lisa', ln: 'Müller', size: '175cm', weight: '67kg'}
myFunction({fn: 'Martin', ln: 'Harper', age: 26, email: 'martin.harper@test.de', weight: 102})
Esperado
{fn: 'Martin', ln: 'Harper', weight: '102kg'}
myFunction({fn: 'Andrew', ln: 'Harper', age: 81, size: 175, weight: 71})
Esperado
{fn: 'Andrew', ln: 'Harper', size: '175cm', weight: '71kg'}
myFunction({fn: 'Matthew', ln: 'Müller', age: 19, email: 'matthew@mueller.de'})
Esperado
{fn: 'Matthew', ln: 'Müller'}

EXERCICIO 09
Substitua strings vazias no objeto por valores nulos

// Escreva uma função que recebe um objeto como argumento
// Alguns dos valores de propriedade contêm strings vazias
// Substitua strings vazias e strings que contêm apenas espaços em branco por valores nulos
// Retorna o objeto resultante

function myFunction() {

   return
}

myFunction({ a: 'a', b: 'b', c: '' })
Esperado
{ a: 'a', b: 'b', c: null }
myFunction({ a: '', b: 'b', c: ' ', d: 'd' })
Esperado
{ a: null, b: 'b', c: null, d: 'd' }
myFunction({ a: 'a', b: 'b ', c: ' ', d: '' })
Esperado
{ a: 'a', b: 'b ', c: null, d: null }