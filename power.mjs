function power(x, n) {
    // if ( n === 1 ) return x;
    if ( n === 0 ) return 1; // 윗수가 0 이면 1임.

    return power(x, n-1) * x;
}

console.log(power(2, 5));