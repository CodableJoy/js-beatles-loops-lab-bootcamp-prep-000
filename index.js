function theBeatlesPlay(musician, instrument){
  var Instru = [];
  for (var n=0; n<=musician.length-1; n++){
    Instru.push(musician[n] +` plays ` + instrument[n])
  }
  return Instru;
}

function iLoveTheBeatles(n){
  var arr = []
  do {
    arr.push(`I love the Beatles!`)
    
  }
  while (n<15)
  return arr;
}