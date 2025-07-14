function strlength(str) { // 매개 변수를 str로 받아영

    if ( str[0] == null ) return 0; // 만약 str 길이가 0이라면 ( 맨 앞글자에 아무것도 없다면 ) 그냥 반환

    return strlength(str.slice(0, -1)) + 1; // 이거도 재귀함수넹
    // == return str.length;
    // 하... 재귀함수지옥
    // 슬라이스 0부터 -1이면은 맨앞부터? 맨 끝에 있는거 -1까지겠져
    // abcde + 1
    // abcd + 1 + 1
    // abc + 1 + 1 + 1
    // ab + 1 + 1 + 1 + 1
    // a + 1 + 1 + 1 + 1 + 1
    // if 기저조건에서 0 반환
    // 5
}

let str = "abcde"
console.log(strlength(str));