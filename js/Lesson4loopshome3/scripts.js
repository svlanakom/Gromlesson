const m = 2;
const n = 20;

let result = 0;

for (let i = m; i <= n; i++) {
  if (i % 5 === 0) {
    console.log(i);
    continue;
  }
  if (i % 4 !== 0) {
    if (i % 2 === 0 && i) {
      result += i;
      continue;
    }
  }

  if (i % 3 === 0) {
    result -= i;
    continue;
  }
  if (i % 4 === 0) {
    result *= i;
    continue;
  }
}
