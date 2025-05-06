let input = `100
10 20 23 34 55 30 22 19 12 45 23 44 34 38`;

input = `15
20 20 33 98 15 6 4 1 1 1 2 3 6 14`;

input = input.trim().split("\n");

let cash = Number(input[0]);
let stocks = input[1].split(" ").map(Number);

준현 = { cash: cash, stocks: 0 };  // 수정: 숫자
성민 = { cash: cash, stocks: 0 };  // 수정: 숫자

let rise = 0;
let fall = 0;

// 준현
for (let i = 0; i < stocks.length; i++) {
    if (준현.cash >= stocks[i]) {
        let newStocks = Math.floor(준현.cash / stocks[i]); // 수정: % -> Math.floor
        준현.stocks += newStocks;
        준현.cash -= newStocks * stocks[i];
    }
}

// 성민
for (let i = 0; i < stocks.length - 1; i++) {  // 수정: 범위 간단히
    let curr = i;
    let next = i + 1;

    // 연속 하락이면 전량 매수
    if (stocks[curr] > stocks[next]) {
        fall++;
        if (fall >= 3 && 성민.cash >= stocks[next]) {
            let newStocks = Math.floor(성민.cash / stocks[next]);  // 수정
            성민.stocks += newStocks;
            성민.cash -= newStocks * stocks[next];
        }
    } else {
        fall = 0;
    }

    // 연속 상승이면 전량 매도
    if (stocks[curr] < stocks[next]) {
        rise++;
        if (rise >= 3 && 성민.stocks > 0) {
            성민.cash += 성민.stocks * stocks[next];
            성민.stocks = 0;
        }
    } else {
        rise = 0;
    }
}

let 준현결과 = 준현.stocks * stocks[stocks.length - 1] + 준현.cash;
let 성민결과 = 성민.stocks * stocks[stocks.length - 1] + 성민.cash;

if (준현결과 > 성민결과) {
    console.log('BNP');
} else if (준현결과 < 성민결과) {
    console.log('TIMING');
} else if (준현결과 === 성민결과) {
    console.log('SAMESAME');
}