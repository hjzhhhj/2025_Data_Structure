// for문을 이용해서 배열의 합 구하기 - 상향식 계산 방법

// function sumArray(arr) {
//     let hi = 0;
//     for (let i = 0; i < arr.length; i++) {
//         hi += arr[i];
//     }
//     return hi;
// }
// let arr = [1, 2, 3, 4, 5]
// console.log(sumArray(arr)); 

// 재귀함수를 이용해서 배열의 합 구하기 - 하향식 계산 방법 ( 기저조건 )

function sumArray(arr) {
    if (arr.length === 1) return arr[0]
    sumArray(arr.slice(0, -1)) + arr[arr.length-1];
}

let arr = [1, 2, 3, 4, 5]
console.log(sumArray(arr));