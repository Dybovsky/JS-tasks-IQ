/*
In this challenge, you are given a date and you have to determine the correspondent season in a certain hemisphere of Earth.

You have to use the ranges given by the meteorological seasons definition, accordingly to the following table:

Start	         End	       North Hemisphere	    South Hemisphere

March,1  	    May, 31	      Spring	           Autumn
June, 1	      August, 31   	Summer	           Winter
September1    November,30	  Autumn	           Spring
December, 1	  February, 28	Winter	           Summer
Given two strings hemisphere (can be "N" for the North hemisphere or "S" for the South hemisphere) and date (name and day of the month), implement a function that returns a string with the season name, accordingly to the above table.

Examples
hemisphereSeason("N", "June, 30") ➞ "Summer"

hemisphereSeason("N", "March, 1") ➞ "Spring"

hemisphereSeason("S", "September, 22") ➞ "Spring"
Notes
During leap years the end date of Winter in the northern hemisphere is the 29th day of February (last day of Summer in the southern hemisphere). In this challenge, years are not used, so the last day of February will always be the 28th.
*/

function hemisphereSeason(hem, date) {
  const obj = {
    1: hem == "N" ? "Winter" : "Summer",
    2: hem == "N" ? "Winter" : "Summer",
    3: hem == "N" ? "Spring" : "Autumn",
    4: hem == "N" ? "Spring" : "Autumn",
    5: hem == "N" ? "Spring" : "Autumn",
    6: hem == "N" ? "Summer" : "Winter",
    7: hem == "N" ? "Summer" : "Winter",
    8: hem == "N" ? "Summer" : "Winter",
    9: hem == "N" ? "Autumn" : "Spring",
    10: hem == "N" ? "Autumn" : "Spring",
    11: hem == "N" ? "Autumn" : "Spring",
    12: hem == "N" ? "Winter" : "Summer",
  };

  const month = new Date(date).getMonth();
  return obj[month + 1];
}

exports.solution = hemisphereSeason;
