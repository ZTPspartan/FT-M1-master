'use strict'

function BinarioADecimal(num) {
  // tu codigo aca
  var Total=0;
  var letra="";
  var binario=num.toString();
  
  for (let i = 0; i < num.length; i++) {

    letra=binario.charAt((num.length-1)-i);

    if(letra != "0"){

      Total += Math.pow(2, i) ;

    }

  }
  
  return parseInt(Total);
}

function DecimalABinario(num) {
  // tu codigo aca
  var binario="";
  while (num>=2) {
    
    binario = (num%2).toString() + binario;

    num=Math.trunc(num/2)
    
  } 
  binario = num.toString() + binario; 
  
  return binario;
}


module.exports = {
  BinarioADecimal,
  DecimalABinario,
}