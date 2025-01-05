var result = "";
for (let i = 0; i <= 10; i++) {
  if (i === 7 || i === 5) {
    continue; // লুপ থেকে বের হবে যখন i === 5
  }
  console.log(i);
}
// Output: 0, 1, 2, 3, 4
