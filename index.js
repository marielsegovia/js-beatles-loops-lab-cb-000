var array = []
function theBeatlesPlay(musicians, instruments){
  for(var i = 0; i < 4; i++){
       array.push(musicians[i] + ' plays ' + instruments[i])
  }
  return array
}

function johnLennonFacts(fact){
  const facts = []
  var i = 0
  while(i < fact.length){
    facts.push(`${fact[i]}!!!`)
    i++
  }
  return facts
}

function iLoveTheBeatles(n){
  var array = []
  do{
    array.push("I love the Beatles!");
    n++
  }
  while (n < 15)
  return array;
  }
