input = `7
3 10
5 20
1 10
1 20
2 15
4 40
2 200`;

input = input.trim().split("\n");

input = input.slice(1).map(item => {
    const [t, p] = item.split(" ").map(Number);
    return { t, p };
});

console.log(input);

function getMaxProfit(input) {
    const N = input.length;
    let max = 0;

    function dfs(day, profit) {
        if (day >= N) {
            max = Math.max(max, profit);
            return;
        }

        // 상담 O: 현재 날(day)에 상담하면, 다음 가능한 날은 day + t
        if (day + input[day].t <= N) {
            dfs(day + input[day].t, profit + input[day].p);
        }

        // 상담 X: 그냥 다음 날로
        dfs(day + 1, profit);
    }

    dfs(0, 0);
    return max;
}

console.log(getMaxProfit(input)); // 👉 45