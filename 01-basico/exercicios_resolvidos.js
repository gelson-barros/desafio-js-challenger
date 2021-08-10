//  EXERCICIO - 01
//  Operadores de multiplicação, divisão e comparação

// Escreva uma função que recebe dois números, digamos a e b, como argumentos
// Se a for menor que b, divida a por b
// Caso contrário, multiplique os dois números
// Retorna o valor resultante

// function myFunction(a, b) {
//    if (a > b) {
//        return a * b;
//    } else if (a < b) {
//        return a / b;
//    }
// }

// console.log(myFunction(10, 100));//0.1
// console.log(myFunction(90, 45));//4050
// console.log(myFunction(8, 20));//0.4
// console.log(myFunction(2, 0.5));//1

//  EXERCICIO 02
//  Operadores de comparação, igualdade estrita

// Escreva uma função que recebe dois valores, digamos a e b, como argumentos
// Retorna verdadeiro se os dois valores forem iguais e do mesmo tipo

// function myFunction(a, b) {
//     return a === b
// }

// console.log(myFunction(2, 3));//false
// console.log(myFunction(3, 3));//true
// console.log(myFunction(3, "3"));//false
// console.log(myFunction("10", "10"));//true

//  EXERCICIO 03
//  Verifique se um número é par

// Escreva uma função que tenha um número como argumento
// Se o número for par, retorna verdadeiro
// Caso contrário, retorna falso

// function myFunction(number) {
//     console.log((number % 2) === 0);
// }

// myFunction(10);//true
// myFunction(-4);//true
// myFunction(5);//false
// myFunction(-11);//false

//  EXERCICIO 04
//  Verifique se um número é um número inteiro

// Escreva uma função que tenha um número como argumento
// Se o número for um número inteiro (sem casa decimal), retorna verdadeiro
// Caso contrário, retorna falso

// function myFunction(a) {
//     return Number.isInteger(a);
// }

// console.log(myFunction(4)); //true
// console.log(myFunction(1.123)); //false
// console.log(myFunction(1048)); //true
// console.log(myFunction(10.48)); //false

// EXERCICIO 05
// Verifique se uma string contém outra string e concatene

// Escreva uma função que recebe duas strings, digamos a e b, como argumentos
// Se a contém b, anexe b ao início de a
// Se não, anexe ao final
// Retorna a concatenação

/*

'Olá mundo'.includes('mundo')->true

*/

// Feito com um metodo nativa da string do Javascript
// function myFunction(a, b) {
// return a.includes(b) ? b + a : a + b;

//Feito com uma outra metodo nativo da string do Javascript
// return a.indexOf(b) === -1 ? a + b : b + a;

// feito na mão com logica
//let g = false
//if(a.length > b.length){
//    let f = "";
//    for (let z = 0; z < a.length; z++) {
//        f = "";
//        for (let i = z; i < b.length + z; i++) {
//            f += a.charAt(i);
//        }
//        if(f === b){
//            g = true
//        }
//    }
//}else if(a.length === b.length && a === b){
//    g = true
//}
//let palavra = ""
//if(g){
//    palavra = b + a
//}else{
//    palavra = a + b
//}
//return palavra;
// }

// console.log(myFunction("cheese", "cake"))//"cheesecake"
// console.log(myFunction("lips", "s"))//"slips"
// console.log(myFunction("Java", "script"))//"Javascript"
// console.log(myFunction(" think, therefore I am","I"))//"I think, therefore I am"

//EXERCICIO 06
//Encontre o próximo número natural mais alto que é divisível por y

// Escreva uma função que recebe dois números, digamos x e y, como argumentos
// Verifique se x é divisível por y
// Se sim, retorna x
// Caso contrário, retorna o próximo número natural mais alto que é divisível por y

// function myFunction(x, y) {
//    let f = true
//    let g = 0
//    if(x%y == 0){
//        return x
//    }else{
//        while(f){
//            x++
//            if(x%y == 0){
//                f = false
//            }
//        }
//        return x
//    }

// }

// console.log(myFunction(1, 23))//23
// console.log(myFunction(23, 23))//23
// console.log(myFunction(7, 3))//9
// console.log(myFunction(-5, 7)) //0

// EXERCICIO 07
// Arredonde um número para 2 casas decimais

// Escreva uma função que tenha um número como argumento
// Arredonde o número para o segundo dígito após a vírgula
// Retorna o número arredondado

// function myFunction(f) {
//    console.log(f.toFixed(2));
// }

// myFunction(2.12397)//2.12
// myFunction(3.136)//3.14
// myFunction(1.12397)//1.12
// myFunction(26.1379)//26.14

//EXERCICIO 08
//Limpe o caos por trás dessas string

// Parece que algo aconteceu com essas strings
// Você consegue descobrir como limpar o caos?
// Escreva uma função que junte essas strings de forma que formem as palavras 'Javascript', 'Countryside' e 'Downtown'!
// Você pode querer aplicar métodos básicos de string JS, como replace(), split(), slice() etc

// function myFunction(str1, str2) {
//     str1 = str1.replace("%", "")[0].toUpperCase() + str1.replace("%", "").slice(1, str1.length);
//     str2 = str2.replace("%", "").split('').reverse().join('');
//     console.log(str1.concat(str2));
// }

// myFunction("java", "tpi%rcs"); //'Javascript'
// myFunction("c%ountry", "edis"); //'Countryside'
// myFunction("down", "nw%ot"); //'Downtown'

//EXERCICIO 09
//Divida um número em seus dígitos

// Escreva uma função que tenha um número como argumento
// A função deve dividir o número em seus dígitos individuais e retorná-los em uma matriz
// Dica: você pode querer alterar o tipo de número para a divisão

// function myFunction(number) {
//     // let str = number.toString();
//     // let arr = []
//     // for (let i = 0; i < str.length; i++) {
//     //     arr.push(Number(str.charAt(i)))
//     // }

//     number = number.toString().split('').map(value => Number(value));
//     console.log(number);
// }

// myFunction(10)//[1,0]
// myFunction(931)//[9,3,1]
// myFunction(193278)//[1,9,3,2,7,8]

//EXERCICIO 10
//Encontre a palavra correta incrementando as letras do alfabeto

// Escreva uma função que recebe uma string como argumento
// Do jeito que está, a string não tem significado
// Aumente cada letra para a próxima letra do alfabeto
// Retorna a palavra correta

// function myFunction(str) {
//    const alfabeto = "abcdefghijklmnopkrstuvwxyz";
//    let resultado = "";
//    for (let i = 0; i < str.length; i++) {
//        for (let y = 0; y < alfabeto.length; y++) {
//            if (str.charAt(i) === alfabeto.charAt(y)) {
//                resultado += alfabeto.charAt(y + 1);
//            }
//        }
//    }
//    return resultado;
// }

// myFunction('bnchmf')//'coding'
// myFunction('bgddrd')//'cheese'
// myFunction('sdrshmf')//'testing'

//EXERCICIO 11
//Retorne a porcentagem de um número

// Escreva uma função que recebe um objeto com o número e porcentagem das propriedades como argumento
// Retorna a porcentagem fornecida do número

// function myFunction(a) {
//     a = a.number * (a.percentage / 100);
//     a = Number.isInteger(a) ? a : a.toPrecision(4);
//     console.log(a);
// }

// myFunction({number: 100, percentage: 50})//50
// myFunction({number: 777, percentage: 2})//15.54
// myFunction({number: 500, percentage: 99})//495

//EXERCICIO 12
//Quantas vezes ocorre um caracter?

// Escreva uma função que recebe duas strings como argumentos
// Retorna o número de vezes que a primeira string ocorre na segunda string

// function myFunction(caracter, frase) {
//    let nrVezes = 0;
//     frase.split('').forEach(letter => {
//         letter.toLowerCase() === caracter.toLowerCase() ? nrVezes++ : 0;
//     })
//    console.log(nrVezes);
// }

// myFunction('m', 'How many times does the character occur in this sentence?')//2
// myFunction('h', 'How many times does the character occur in this sentence?')//4
// myFunction('?', 'How many times does the character occur in this sentence?')//1
// myFunction('z', 'How many times does the character occur in this sentence?')//0

//EXERCICIO 13 - ainda nao resolvido
//Retorna o próximo número primo mais alto

// Este desafio é um pouco mais complexo
// Escreva uma função que tenha um número como argumento
// Se o número for primo, retorna o número
// Caso contrário, retorna o próximo número primo mais alto

function myFunction(numero) {
   if (numeroPrimo(numero)) {
       console.log(numero)
   } else {
       while(!numeroPrimo(numero)){
           numero++;
       }
       console.log(numero);
   }
}

function numeroPrimo(numero) {
    for (let divisor = 2; divisor < numero; divisor++) {
        if (numero % divisor === 0) {
            return false;
        }
    }
    return true;
}

myFunction(38)//41
myFunction(7)//7
myFunction(5)//5
myFunction(115)//127
myFunction(11)//11
myFunction(2000)//2003
