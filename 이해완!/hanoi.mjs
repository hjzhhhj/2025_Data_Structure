function hanoi (count, from, to, temp) {
    if ( count == 0 ) return;
    hanoi(count-1, from, temp, to); // count-1개를 temp로 옮겨라!
    console.log(`원반 ${count} ${from}에서 ${to}로 옮깁니다.`)
    hanoi(count-1, temp, to, from); // count-1개를 다시 to로 옮겨라!
}

hanoi(3, "A", "C", "B")
