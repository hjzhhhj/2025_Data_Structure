function power(x, n) { // x랑 n을 받아여.
    // if ( n === 1 ) return x;
    if ( n === 0 ) return 1; // 윗수가 0 이면 1임.

    return power(x, n-1) * x;
    // dksl무슨또재귀함수드립
    // ;;;;일단은 2랑 5가 있으니깐은
    // power(2, 4) * 2
    // power(2, 3) * 2
    // power(2, 2) * 2
    // power(2, 1) * 2
    // power(2, 0) * 2
    // n이 0이됐넹 그럼녀 1 리턴
    /// 아 이거 그거네 그 제곱~~~~~~
}

console.log(power(2, 5));