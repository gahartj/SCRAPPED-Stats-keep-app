let rushingYards = [4, 8, 32, 0, 6, 3, 3, 9, 12, -2, 8, 2, 4, 17]

function totalRushingYards(yards) {
  let total = 0;
  for (let i = 0; i < yards.length; i++) {
    total = yards[i] + total;
  }
  return total
}
console.log(totalRushingYards(rushingYards));

//This can be one portion of a larger app idea. Tracking stats on your device during game/contest.

//How would I now add in different stats and roll it into one block of code?

var rushYards = [4, 8, 32, 0, 6, 3, 3, 9, 12, -2, 8, 2, 4, 17];
var recYards = [8, 2];
var retYards = [26, 14];
var totals = rushYards.concat(recYards, retYards);

function getTotalYards(yards) {
  var total = 0;
  for (var i = 0; i < yards.length; i++) {
    total = yards[i] + total;
  }
  return total
}
console.log(getTotalYards(totals)); //returns the total of rushYards, recYards, and retYards

//The dummy or 'lite' version should be like TurboTax. It's either 'this' or 'that'. yes or no. and then 'anything else?' (to add that it was a first down, or touchdown, or fumble, ect.)
//Heavier versions could include more of the SID look/feel.
//"Be Your Own SID"
///blah blah blah git practice blah

//Create functions and then assign them a variable to be used over and over. See "Functions as Date" in Codecademy.
