function myFunction(number) {
    if ( number > 3 ) return;
    console.log(number)
    myFunction(number + 1)
}

/////////////우ㅗ저ㅑㅔㅐ[ㅔ]['
// 

myFunction(1);

// for문을 사용해서 1~10까지 출력

// for ( let i = 1; i <= 10; i++ ) {
//     console.log(i);
// }