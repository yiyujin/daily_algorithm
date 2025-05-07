let input = `11 12 2 24 10
16 1 13 3 25
6 20 5 21 17
19 4 8 14 9
22 15 7 23 18
5 10 7 16 2
4 22 8 17 13
3 18 1 6 25
12 19 23 14 21
11 24 9 20 15`;

input = input.trim().split("\n");

let board = input.slice(0, 5).map(row => row.split(" ").map(Number));
let calls = input.slice(5).map(row => row.split(" ").map(Number)).flat();
console.log(calls);

let marked = Array.from({ length: 5 }, () => Array(5).fill(false));

// 숫자 위치 찾기용 map
let posMap = new Map();
for (let i = 0; i < 5; i++) {
  for (let j = 0; j < 5; j++) {
    posMap.set(board[i][j], [i, j]);
  }
}

function countBingos() {
  let count = 0;

  // 가로줄
  for (let i = 0; i < 5; i++) {
    if (marked[i].every(v => v)) count++;
  }

  // 세로줄
  for (let j = 0; j < 5; j++) {
    if (marked.every(row => row[j])) count++;
  }

  // 대각선 ↘
  if ([0, 1, 2, 3, 4].every(i => marked[i][i])) count++;

  // 대각선 ↙
  if ([0, 1, 2, 3, 4].every(i => marked[i][4 - i])) count++;

  return count;
}

// 숫자 부르기 & 체크
for (let i = 0; i < calls.length; i++) {
    // 부른 숫자의 좌표를 확인
  const num = calls[i];
  const [x, y] = posMap.get(num);

  // true로 바꿈
  marked[x][y] = true;

  // 빙고가 몇줄인지 계속 확인, 3개 생기면 출력
  if (countBingos() >= 3) {
    console.log(i + 1); // i는 0부터 시작이므로 +1
    break;
  }
}