function maiusculo(palavra){
  n=palavra.toUpperCase()
    return n.substring(0,3) + palavra.substring(3) ;
}
console.log (maiusculo("cola"));  