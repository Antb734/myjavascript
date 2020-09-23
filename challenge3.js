/*******************************
* Tip Calculator Challenge.
 */



// Tip calculator function

console.log(' ');
console.log('--------------------------------------------------------------------');
console.log('Anthony\'s bill total including tip');
console.log('--------------------------------------------------------------------');
console.log(' ');

var firstName = 'Anthony';

function tipCalculator(bill) {
	var percentage;
	if (bill < 50) {
		percentage = .2;
	} else if (bill >= 50 && bill < 200) {
		percentage = .15;
	} else {
		percentage = .1;
	}
	return percentage * bill;
}

var bills = [124, 48, 268];
var tips = [tipCalculator(bills[0]),
			tipCalculator(bills[1]),
			tipCalculator(bills[2])];
var finalTotal = [bills[0] + tips[0],
				  bills[1] + tips[1],
				  bills[2] + tips[2]];

console.log(firstName + '\'s 1st bill total is ' + finalTotal[0] + ' including the tip!');
console.log(firstName + '\'s 2nd bill total including the tip is ' + finalTotal[1] + '!');
console.log(firstName + '\'s 3rd bill total plus the tip is ' + finalTotal[2] + '!');

// My code for determining field goal percentage for....
// Anthony Bryant based on shots taken per game.

var name = 'Anthony Bryant';

function shootingPercentage(fieldGoals) {
	if (fieldGoals < 10) {
		percentage = .63;
	} else if (fieldGoals >= 10 && fieldGoals < 17) {
		percentage = .52;
	} else if (fieldGoals >= 17 && fieldGoals < 23) {
		percentage = .48;
	} else if (fieldGoals >= 23 && fieldGoals < 31) {
		percentage = .46;
	} else {
		percentage = .40;
	}
	return percentage;
}

console.log(' ');
console.log('--------------------------------------------------------------------');
console.log('Anthony\'s field goal attempts and percentage break down per game!');
console.log('--------------------------------------------------------------------');
console.log(' ');

var name = 'Anthony Bryant';

var fieldGoals = [12, 14, 27, 16, 23, 21, 18, 31];
var fgPercentage = [shootingPercentage(fieldGoals[0]) +
					shootingPercentage(fieldGoals[1]) +
					shootingPercentage(fieldGoals[2]) +
					shootingPercentage(fieldGoals[3]) +
					shootingPercentage(fieldGoals[4]) +
					shootingPercentage(fieldGoals[5]) +
					shootingPercentage(fieldGoals[6]) +
					shootingPercentage(fieldGoals[7])];
// Log Results.
console.log(name + '\'s shot a FG% of ' + shootingPercentage(fieldGoals[0]) + ' in his 1st game.');
console.log(name + '\'s shot a FG% of ' + shootingPercentage(fieldGoals[1]) + ' in his 2nd game.');
console.log(name + '\'s shot a FG% of ' + shootingPercentage(fieldGoals[2]) + ' in his 3rd game.');
console.log(name + '\'s shot a FG% of ' + shootingPercentage(fieldGoals[3]) + ' in his 4th game.');
console.log(name + '\'s shot a FG% of ' + shootingPercentage(fieldGoals[4]) + ' in his 5th game.');
console.log(name + '\'s shot a FG% of ' + shootingPercentage(fieldGoals[5]) + ' in his 6th game.');
console.log(name + '\'s shot a FG% of ' + shootingPercentage(fieldGoals[6]) + ' in his 7th game.');
console.log(name + '\'s shot a FG% of ' + shootingPercentage(fieldGoals[7]) + '0 in his 8th game.');
console.log('In his first 8 games ' + name + '\'s average FG% was ' + fgPercentage / 8 + '%!');

// Points scored and field goals made function to determine scoring average.

console.log(' ');
console.log('--------------------------------------------------------------------');
console.log('Anthony\'s points each game and scoring average after first 8 games.');
console.log('--------------------------------------------------------------------');
console.log(' ');

var pointsScored = [14, 17, 30, 20, 26, 23, 19, 31];

function score(pointsScored) {
	if (pointsScored >= 14 && pointsScored < 17) {
		score = pointsScored +3;
	} else if (pointsScored >= 17 && pointsScored < 30) {
		score = pointsScored +5;
	} else if (pointsScored >= 30 && pointsScored < 31) {
		score = pointsScored +7;
	} else if (pointsScored >= 26 && pointsScored < 30) {
		score = pointsScored +4;
	} else {
		score = pointsScored +6;
	}
	return score;
}

// Variable to store the scoring average of the first eight games using score function.
var scoringAvg = score(pointsScored[0] +
					   pointsScored[1] +
					   pointsScored[2] +
					   pointsScored[3] +
					   pointsScored[4] +
					   pointsScored[5] +
					   pointsScored[6] +
		               pointsScored[7]) / 8;

console.log('Over the first 8 games ' + name + ' is scoring an average of ' + scoringAvg + ' PPG with a FG% of ' + fgPercentage / 8 + '%!');










