var contador = 10

function local() {
  var contador = 5 + 1
  console.log(contador)
  return;
}
console.log(contador); // 10
local() //6

