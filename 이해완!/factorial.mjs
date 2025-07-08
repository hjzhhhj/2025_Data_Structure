// // for문을 이용해서 팩토리얼 구하기 - 상향식 계산방법

// function factorial(number) { // 매개변수 number!를 받습니ㅏㄷ
//     let sum = 1; // sum은 1로 놔야됨. 왜냐 0으로 놓으면은 이제 ㅇ,ㅁ 곱했을떄 다 0이되니깐!!

//     for ( let i = 1; i <= number; i++ ) { // 1부터 number만큼 하나씪 순차대로 돌음
//         // == for i in number 이랑 똑같은 말!
//         sum *= i; // sum에 i값을 곱해서
//     }

//     return sum; // 값 리턴
// }

// console.log(factorial(5))

// 재귀함수를 이용해서 팩토리얼 구하기 - 하향식 계산 방법

function factorial(number) {
    if ( number === 1 ) return 1 // 만약 number가 1이라면, 그냥 반환해줌
    else return number * factorial(number-1); // 기조조건이 무조건 있어야댐!
    // 재귀함수로 계속 호출
    // 만약 매개변수로 5를 받았으면 5 * factorial(4) => 5 * 4 * factorial(3) 이런식으로 되겠져
}

console.log(factorial(5))

