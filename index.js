function theBeatlesPlay(musicians, instruments) {
  var beatles = []
  
  for (let i = 0; i < musicians.length; i++) {
    var beatleMember = "${musicians} plays ${instruments}"
    beatles = beatles + beatleMember
  }
  return beatles
}

/*var str = [];

for (let i = 0; i < 9; i++) {
  str = str + i;
}*/