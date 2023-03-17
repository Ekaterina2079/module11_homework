function countNumber(a,b) {
  let i = setInterval(() => {
    console.log(a++);
    if (a > b) clearInterval(i);
  }, 1000)
}

countNumber(5, 15);
