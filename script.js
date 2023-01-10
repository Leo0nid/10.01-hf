// task 1. Вам дан массив числами [10, 20, 30, 40, 135, 2000].
// Выведите на экран только те числа из массива, которые начинаются на цифру 1, 2 или 5.
// let arr = [10, 20, 30, 40, 135, 2000]
// let newArr = []
// for (let i = 0 ; i < arr.length; i++){
//     let str = String(arr[i])
//     let num = str[0]
//     if(num == 1 || num == 2 || num == 5){
//         newArr = [...newArr,str]
//     }
    
// }
// console.log(newArr)

// let arr = [10, 20, 30, 40, 135, 2000]
// let newArr = []
// for (let i = 0; i < arr.length; i++) {
//     let str = arr[i]+""
//     let num = str[0]
//     if (num === 1 ||  num === 2 || num === 5) {
//       newArr = [...newArr, str]
//     }
//   }
//   console.log(newArr)

// task 2 Вам дан массив с элементами [1, 2, 3, 4, 5, 6, 7, 8, 9]. С помощью цикла for создайте строку '-1-2-3-4-5-6-7-8-9-

// let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9]
// let string = ''
// for(let i = 0 ; i < arr.length ; i++){
//     string = string + arr[i] * -1
// }
// console.log(string)



// task 3 Вам дано число n=1000. Делите его на 2 столько раз, пока результат деления
// не станет меньше 50. Какое число получится?
// Посчитайте количество итераций,
// необходимых для этого (итерация - это проход цикла),
// и запишите его в переменную num.

// let n = 1000

// for(let i = 0 ; i < 1000 ; i++){
//     if(i % 2 === 0 && i > 50){
//         console.log(i)
//     }
// }





// task 4 Вам дан массив с числами [1, 2, 3, 7, 6, 9].
// Найдите среднее арифметическое его элементов (сумма элементов, делить на количество).

// let arr = [1, 2, 3, 7, 6, 9]
// let average = 0
// for(let i = 0;  i < arr.length; i++){
//     average = average += arr[i] / arr.length
// }
// console.log(average)


// task 5 Вам дан массив с числами [1, 2, 3, 4, 5].
// С помощью цикла найдите сумму квадратов элементов этого массива.

// let arr = [1, 2, 3, 4, 5]
// let sum = 0
// for(let i = 0; i < arr.length; i++){
//     sum = sum += arr[i] **2
// }
// console.log(sum)


// task 6 Вам дан массив с числами [1, 2, 4, -1, -3, 8, 7, 0, -5, 18, 12].
// С помощью цикла выведите только те элементы массива, которые больше нуля и меньше 10-ти.

// let arr = [1, 2, 4, -1, -3, 8, 7, 0, -5, 18, 12]
// let newArr = []
// for(let i = 0 ; i < arr.length; i++){
//     if(arr[i] > 0 && arr[i] > 10 ){
//         newArr = [...newArr,arr[i]]
//     }
//     console.log(arr[i])
// }



// task 7 Создайте переменную с пустым массивом,
// заполните массив 10-ю случайными числами от 1 до 10 с помощью цикла.
// let arr = [1,2,3,4,5,6,7,8,9,10]
// let newArr = []
// for(let i = 0; i < arr.length; i++){
//     newArr = [...newArr,arr[i]]
// }
// console.log([newArr])


// task 8 Создайте цикл, который суммирует числа, кратные 3 и 5 до 1000.

// let sum = 0
// for(let i = 0; i < 1000; i++){
//        if(i % 3 === 0 && i % 5 === 0){
//         sum = sum + i
//        }

//      }
//      console.log(sum)



// task 9 Вам дан массив [2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21].
// Создайте цикл, который выводит нечетные числа, которые больше 10.


// let arr = [2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21]
// let newArr = []
// for(let i = 0 ; i < arr.length; i++ ){
//     if(arr[i] > 10 && arr[i] % 2 !== 0){
//     newArr = [...newArr,arr[i]] 
//     }
// }
// console.log(newArr)




// task 10 Вам дана строка 'jzvzszrzpz'. Измените каждую вторую букву на верхний регистр.
// let str = 'jzvzszrzpz'
// let newStr= str.split("")
// for(let i = 0 ; i < str.length; i++){
//     newStr[i] = (i % 2) ? newStr[i].toUpperCase() : newStr[i].toLowerCase()
// }
// let newStr2 = newStr.join("")
// console.log(newStr2)




