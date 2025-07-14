// for문을 이용해서 배열의 합 구하기 - 상향식 계산 방법

// function sumArray(arr) { // 아르르르르ㅡㄹ르
//     let hi = 0; // 초기화
//     for (let i = 0; i < arr.length; i++) { // 아르르의 길이만큼 올려!!!높여!!! 와 흠뻑쇼ㅠㅠㅠㅠㅠ가고싶다
//         hi += arr[i]; // 아르르 안에 있는 값 다 더해!
//     }
//     return hi; // 이게 쉬운 방법인데 굳이 하향식?
// }
// let arr = [1, 2, 3, 4, 5]
// console.log(sumArray(arr)); 

// 재귀함수를 이용해서 배열의 합 구하기 - 하향식 계산 방법 ( 기저조건 )

function sumArray(arr) { // 아르르
    if (arr.length === 1) return arr[0] // 하향식에선 뭐가 무조건 있어야된다>? 기저조건!!!! 별표 24589192만개 쳐야됨. 진짜 까먹으면 내가 개다 개
    return sumArray(arr.slice(0, -1)) + arr[arr.length-1]; 
    // 하나씩 짤라서 가져오네
    // arr(1, 2, 3, 4) + 5
    // arr(1, 2, 3) + 4 + 5
    // arr(1, 2) + 3 + 4 + 5
    // arr(1) + 2 + 3 + 4 + 5
    // 15
}

let arr = [1, 2, 3, 4, 5]
console.log(sumArray(arr));