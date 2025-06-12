// for문을 이용해서 팩토리얼 구하기 - 상향식 계산방법

function factorial(number) {
    let sum = 1;

    for ( let i = 1; i <= number; i++ ) {
        sum *= i;
    }

    return sum;
}

console.log(factorial(5))

// 재귀함수를 이용해서 팩토리얼 구하기 - 하향식 계산 방법

function factorial(number) {
    if ( number === 1 ) return 1
    else return number * factorial(number-1); // 기조조건
}

console.log(factorial(5))

