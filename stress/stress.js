function computeHeavyTask(n) {
    let result = 0;
    for (let i = 0; i < n; i++) {
        for (let j = 0; j < n; j++) {
            result += i * j;
        }
    }
    return result;
}

module.exports = { computeHeavyTask };
