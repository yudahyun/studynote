var bType = ["A", "A", "A", "O", "B", "B", "O", "AB", "AB", "O"];
const result = { A: 0, B: 0, AB: 0, O: 0 };

for (const b in bType) {
  result[b]++;
}
console.log(result);
