

function forLoop(array) {
  for (let i = 0; i < 25; i++) {
  
  if (i===1){
    array.push("I am a strange loop.")}
    else { (i > 1)
    array.push('I am ${i} strange loops.')
}
}
return array
}

function whileLoop(string) {
  let countdown = 100;
 
while (countdown > 0) {
  console.log(--countdown)
}
return.string.('done')  
}