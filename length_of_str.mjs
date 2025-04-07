function strlength(str) {

    if ( str[0] == null ) return 0;

    return strlength(str.slice(0, -1)) + 1;
}

let str = "abcde"
console.log(strlength(str));