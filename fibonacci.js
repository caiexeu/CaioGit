let i;             //indice for
let t = 1;        // termos da sequencia
function fibonacci(n) {
  if (n == 1 || n == 2) {
    return 1;
  } else {
    return fibonacci(n - 1) + fibonacci(n - 2); //formula de fibonnaci
  }
}
for (i = 1; i <= t; i++) {
  console.log("O termo " + i + " da sequencia é de fibonacci " + fibonacci(i));
}