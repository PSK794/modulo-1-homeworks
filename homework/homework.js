'use strict'

function BinarioADecimal(num) {
  // tu codigo aca
  
  let sume = num.split("").reverse()

  var binario = 0  
  

  for( var i = 0 ; i < sume.length; i++) {
   
    binario += 2** i * sume[i] 
  }
  return binario
}


function DecimalABinario(num) {
  // tu codigo aca

  

  var decimal = "" 

    while(num > 0) {

     decimal = (num % 2) + decimal

    num = Math.floor(num / 2) 

}
  return decimal

}
module.exports = {
  BinarioADecimal,
  DecimalABinario,
}


