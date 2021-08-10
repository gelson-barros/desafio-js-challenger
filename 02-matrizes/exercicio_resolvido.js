// EXERCICIO 01
// Classifique uma matriz de strings em ordem alfabética

// Escreva uma função que recebe um array de strings como argumento
// Deve retornar a matriz com seus valores classificados em ordem alfabética

// function myFunction(arr) {
//    console.log(arr.sort())
//    //return arr.sort();
// }

// myFunction(['b', 'c', 'd', 'a'])//['a', 'b', 'c', 'd']
// myFunction(['z', 'c', 'd', 'a', 'y', 'a', 'w'])//['a', 'a', 'c', 'd', 'w', 'y', 'z']

//EXERCICIO 02
//Classifica uma matriz de números em ordem decrescente

// Escreva uma função que recebe uma matriz de números como argumento
// Deve retornar uma matriz com os números classificados em ordem decrescente

// function myFunction(arr) {
   
//    console.log(arr.sort(function(a,b){return a - b}).reverse());
// }

// myFunction([1,3,2])//[3,2,1]
// myFunction([4,2,3,1])//[4,3,2,1]

//EXERCICIO 03
//Retorna os últimos n elementos da matriz

// Escreva uma função que recebe uma matriz e um número (n) como argumentos
// Deve retornar os últimos n elementos da matriz
// Se a matriz tiver menos de n elementos, retorna todos

// function myFunction(arr, nVezes) {
//     let arr1 = [];
//     if (arr.length < nVezes){
//         arr1 = arr;
//     }else{
//         for (let i = arr.length - nVezes; i < arr.length; i++) {
//             arr1.push(arr[i]);
//         }
//     }
//     console.log(arr1);
// }

// myFunction([1, 2, 3, 4, 5], 2)//[ 4, 5 ]
// myFunction([1, 2, 3], 6)//[ 1, 2, 3 ]
// myFunction([1, 2, 3, 4, 5, 6, 7, 8], 3)//[ 6, 7, 8 ]

//EXERCICIO 04
//Retorna a média de uma matriz de números

// Escreva uma função que recebe uma matriz de números como argumento
// Deve retornar a média dos números

// function myFunction(arr) {
//     let soma = 0;
//     soma = arr.reduce((acc, value) => {
//         return acc + value;
//     });
//     console.log(soma/arr.length)
// }

// myFunction([10,100,40])//50
// myFunction([10,100,1000])//370
// myFunction([-50,0,50,200])//50

//EXERCICIO 05
//Crie um intervalo de números

// Escreva uma função que recebe dois números, digamos mínimo e máximo, como argumentos
// Retorna uma matriz de números no intervalo de min a max

function myFunction(start, end) {
    // let arr = []
    // for (let i = start; i <= end; i++) {
    //     arr.push(i)
    // }
    // console.log(arr)
    

}

myFunction(2, 10)//[2, 3, 4, 5, 6, 7, 8, 9, 10]
myFunction(1, 3)//[1, 2, 3]
myFunction(-5, 5)//[-5, -4, -3, -2, -1, 0,  1,  2,  3,  4, 5]
myFunction(2, 7)//[2, 3, 4, 5, 6, 7]

// EXERCICIO 06
// Sum up all array elements with values greater than

// Write a function that takes an array and a number, say num, as arguments
// Sum up all array elements with a value greater than num
// Return the sum

//function myFunction(arr, num) {
//    let sum = 0;
//    for (let i = 0; i < arr.length; i++) {
//        if(arr[i] > num){
//           sum += arr[i];  
//        }
//    }
//    console.log(sum);
//}

//myFunction([1, 2, 3, 4, 5, 6, 7], 2)//25
//myFunction([-10, -11, -3, 1, -4], -3)//1
//myFunction([78, 99, 100, 101, 401], 99)//602

// EXERCICIO 07
// Remova um elemento específico da matriz

// Escreva uma função que recebe uma matriz e um valor como argumento
// A função deve limpar o array de todas as ocorrências do valor dado e retornar a versão limpa

//function myFunction(arr, value) {
//    let array = []
//    for (let i = 0; i < arr.length; i++) {
//        if (arr[i] !== value) {
//            array.push(arr[i]);
//        }
//    }
//    console.log(array);
//}

//myFunction([1,2,3], 2)//[1, 3]
//myFunction([1,2,'2'], '2')//[1, 2]
//myFunction([false,'2',1], false)//['2', 1]
//myFunction([1,2,'2',1], 1)//[2, '2']

//EXERCICIO 08
//Verifique se todos os elementos da matriz são iguais

// Escreva uma função que tenha um array como argumento
// Deve retornar verdadeiro se todos os elementos da matriz forem iguais
// Deve retornar falso caso contrário

//function myFunction(arr) {
//    let argTest = true
//    for (let i = 1; i < arr.length; i++) {
//        if (arr[i-1] !== arr[i]) {
//            argTest = false
//        }
//    }
//    console.log(argTest);
//}

//myFunction([true, true, true, true])//true
//myFunction(['test', 'test', 'test'])//true
//myFunction([1,1,1,2])//false
//myFunction(['10',10,10,10])//false

// EXERCICIO 09
// Retorna a string mais longa de uma matriz de strings

// Escreva uma função que recebe um array de strings como argumento
// Deve retornar a string mais longa

//function myFunction(arr) {
//    let strLong = arr[0]
//    for (let i = 1; i < arr.length; i++) {
//        if(arr[i-1].length < arr[i].length){
//            strLong = arr[i]
//        }
//    }
//    console.log(strLong);
//}

//myFunction(['help', 'me'])//'help'
//myFunction(['I', 'need', 'candy'])//'candy'

// EXERCICIO 10
// Mesclar um número arbitrário de matrizes

// Escreva uma função que receba argumentos um número arbitrário de matrizes
// Deve retornar um array contendo os valores de todos os arrays

//function myFunction() {
//    //logica programação
//    //let arrayEnd = []
//    //for (let i = 0; i < arguments.length; i++) {
//    //    //console.log(arguments[i])
//    //    for (let z = 0; z < arguments[i].length; z++) {
//    //        arrayEnd.push(arguments[i][z]);
//    //    }
//    //}
//    //console.log(arrayEnd);
//
//    //com funções nativas
//    //let arrayEnd = []
//    //console.log(arrayEnd.concat(...arguments))
//}

//myFunction([1, 2, 3], [4, 5, 6])//[1, 2, 3, 4, 5, 6]
//myFunction(['a', 'b', 'c'], [4, 5, 6])//['a', 'b', 'c', 4, 5, 6]
//myFunction([true, true], [1, 2], ['a', 'b'])//[true, true, 1, 2, 'a', 'b']

// EXERCICIO 11
// Mesclar duas matrizes com valores duplicados

// Escreva uma função que recebe dois arrays como argumentos
// Mesclar os dois arrays e remover os valores duplicados
// Classifica o resultado da mesclagem em ordem crescente
// Retorna o array resultante

//function myFunction(arr1, arr2) {
//    let arr = arr1.concat(arr2);
//    const comparaNumero = function (a, b) {
//        return a - b;
//    };
//    arr.sort(comparaNumero);
//    let arrEnd = [arr[0]];
//    for (let i = 1; i < arr.length; i++) {
//        if(arr[i-1] != arr[i]){
//            arrEnd.push(arr[i]);
//        }
//    
//    }
//    console.log(arrEnd);
//}

//myFunction([1, 2, 3], [3, 4, 5])//[ 1, 2, 3, 4, 5 ]
//myFunction([-10, 22, 333, 42], [-11, 5, 22, 41, 42])//[ -11, -10, 5, 22, 41,  42, 333]