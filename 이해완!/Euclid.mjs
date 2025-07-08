function Euclid(num1, num2) {
    let temp;
    if ( num1 < num2 ) {
        temp = num1;
        num1 = num2;
        num2 = temp;
    }
    if ( num1 % num2 == 0 ) {
        return num2;
    } else {
        // return Euclid(num2, num1 % num2);
        while (1) {
            temp = num2;
            num2 = num1 % num2;
            num1 = temp;
            if ( num1 % num2 == 0 ) {
                return num2;
                break;
            }
        }
    }
}

console.log(Euclid(78, 66));