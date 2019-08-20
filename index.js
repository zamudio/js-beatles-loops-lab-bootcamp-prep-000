function theBeatlesPlay(musicians, instruments) {
  var beatles = []
  
  for (let i = 0; i < musicians.length; i++) {
    var member = musicians[i] + " plays " + instruments[i]
    beatles.push(member)
  }
  return beatles
}

function johnLennonFacts(facts) {
  var lennonFacts = []
  
  while(let i = 0; i < facts.length) {
    var zzz = facts[i] + "!!!"
    lennonFacts.push(zzz)
  }
  return lennonFacts
}