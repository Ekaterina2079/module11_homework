function isPrime(n) {
  if (!Number.isInteger(n) || n < 0 || n > 1000) return "данные неверны";
  
  let num = Math.sqrt(n);
  for (let i = 2; i <= num; i++)
    if (n % i === 0) return "не простое число";
 
  return "простое число";
}
 
console.log(isPrime());
