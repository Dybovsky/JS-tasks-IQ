/*
Create a function that takes an array of football clubs with properties: name, wins, loss, draws, scored, conceded, and returns the team name with the highest number of points. If two teams have the same number of points, return the team with the largest goal difference.
How to Calculate Points and Goal Difference
team = {name: "Manchester United", wins: 30, loss: 3, draws: 5, scored: 88, conceded: 20 }

Total Points = 3 * wins + 0 * loss + 1 * draws = 3 * 30 + 0 * 3 + 5 * 1 = 95 points
Goal Difference = scored - conceded = 88 - 20 = 68
Examples
champions([
 {
 name: "Manchester United",
 wins: 30,
 loss: 3,
 draws: 5,
 scored: 88,
 conceded: 20,
 },
 {
 name: "Arsenal",
 wins: 24,
 loss: 6,
 draws: 8,
 scored: 98,
 conceded: 29,
 },
 {
 name: "Chelsea",
 wins: 22,
 loss: 8,
 draws: 8,
 scored: 98,
 conceded: 29,
 },
])
➞ "Manchester United"
*/

function champions(arrOfTeams /*args*/) {
  arrOfTeams.forEach((team) => {
    for (let i in team) {
      team["total"] = team["wins"] * 3 + 0 * team["loss"] + 1 * team["draws"];
      team["difference"] = team["scored"] - team["conceded"];
    }
    arrOfTeams.sort((prev, next) => next.total - prev.total);
    if (arrOfTeams[0].total === arrOfTeams[1].total) {
      arrOfTeams.sort((prev, next) => next.difference - prev.difference);
      console.log(arrOfTeams);
      return arrOfTeams[0].name;
    }
  });
  //your code
  return arrOfTeams[0].name;
}

exports.solution = champions;
