let x = 100;
function even(x) {
  let result = "짝수입니다.";
  let error = "틀렸습니다.";

  if (x % 2 === 0) {
    return result;
  } else {
    return error;
  }
}

console.log(even(x));
