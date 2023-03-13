let arrNumbers = [null, 0, 2, 4, 3, 6, 7, 9, 'kk'];

function elementsCont(arr) {
  let contPos = 0;
  let contNeg = 0;
  let contOther = 0;

for (let i = 0; i < arr.length; i++){
    if ((arr[i] === 0) || (typeof(arr[i]) != 'number')) {
        contOther++;
    } else {
        if (arr[i] % 2 === 0) {
            contPos++;
        } else {
            contNeg++;
        }
    }
}
  return [contOther, contPos, contNeg];
}

let res = elementsCont(arrNumbers);

console.log("Pos is " + res[0]);
console.log("Neg is " + res[1]);
console.log("Other is " + res[2]);
