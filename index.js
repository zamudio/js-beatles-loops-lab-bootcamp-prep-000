function theBeatlesPlay(musicians, instruments) {
  var theBeatles = []
  
  for (let i = 0; i < musicians.length; i++) {
    var member = musicians[i] + " plays " + instruments[i]
    theBeatles.push(member)
  }
  return theBeatles
}

function johnLennonFacts(facts) {
  var lenonArr = []
  let i = 0
  
  while(i < facts.length) {
    var lennonFacts = facts[i] + "!!!"
    lenonArr.push(lennonFacts)
    i++
  }
  return lenonArr
}

function iLoveTheBeatles(number) {
  var beatlesFans = []
  
  do {
    var beatlesLove = "I love the Beatles!"
    beatlesFans.push(beatlesLove)
  } while(number < 15)
  return beatlesFans
}

/*var result = "";
var i = 0;

do {
  i = i + 1;
  result = result + i;
} while (i < 5);*/