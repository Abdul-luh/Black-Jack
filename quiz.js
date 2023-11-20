let cards = [7, 3, 9];
// for (let i = 0; i < cards.length; i++) {
// 	console.log(cards[i]);
// }

// let sntc = ["h", "m", 5, 7, 7, 33, 4, 4, 72, 3, 4, 5];
// let greetingEl;

// for (let i = 0; i < sntc.length; i++) {
// 	greetingEl += " " + sntc[i];
// 	console.log(greetingEl);
// }

let player1Time = 102;
let player2Time = 102;

// function getFastestRaceTime() {
// 	if (player1Time < player2Time) {
// 		return player1Time;
// 	} else if (player2Time < player1Time) {
// 		return player2Time;
// 	}
// 	return "player 1 time = player 2 time";
// }

// console.log(getFastestRaceTime());

// --------------------------------------------------------------------

// function getTotalRaceTime() {
// 	return player1Time + player1Time;
// }
// let totalRaceTime = getTotalRaceTime();
// console.log(totalRaceTime);

// --------------------------------------------------------------------

// check if a person is old enought to enter a night club 21
// log a suitable to the console

// let age = 100.0;

// if (age < 21) {
// 	console.log("You cannot enter the club!");
// } else {
// 	console.log("Welcome!");
// }

// if (age < 100) {
// 	console.log("Not eligible");
// } else if (age === 100) {
// 	console.log("Here is your birthday card from the King!");
// } else {
// 	console.log("Not eligible, You have already gotten one!");
// }

// --------------------------------------------------------------------

// let randNum = Math.floor(Math.random() * 10) + 2;
// console.log(randNum);

// --------------------------------------------------------------------

// let course = {
// 	title: "learn CSS grid for free",
// 	lessons: 16,
// 	length: 62,
// 	creator: "pre Herald Borgen",
// 	level: 2,
// 	isFree: true,
// 	tags: ["html", "css"],
// };

// console.log(course.length);

// --------------------------------------------------------------------

// const person = {
// 	name: "Abdullah",
// 	age: 20,
// 	country: "Nigeria",
// };
// function logData() {
// 	return (
// 		person.name +
// 		" is " +
// 		person.age +
// 		" years old and live in " +
// 		person.country
// 	);
// }

// console.log(logData());

// --------------------------------------------------------------------

let age = 15;
let ticketprice = "";

if (age < 6) {
	ticketprice = "free";
} else if (age < 18) {
	ticketprice = "child discount";
} else if (age < 27) {
	ticketprice = "student discount";
} else if (age < 67) {
	ticketprice = "full price";
} else {
	ticketprice = "senior citizen discount";
}

// --------------------------------------------------------------------
