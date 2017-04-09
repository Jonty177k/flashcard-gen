//npm install inquirer
var inquirer = require("inquirer");

function BasicCard (front, back) {
	this.front = front;
	this.back = back;
}

function ClozeCard (cloze, partial) {
	this.cloze = cloze;	
	this.partial = partial;
}

	//card index
	// var m = 0;

	// //name bank
	// var bank = [];
	// var card_;

	// for (var i=0; i < 50; i++) {
	// 	bank[i] = card_+i;
	// };

console.log("\n");
console.log("--------------------------");
console.log("----Matthews Card App!----");
console.log("--------------------------");
console.log("\n");

//var cardArray = [];

function startSetup() {

	function basicSetUp() {
		//console.log("hello basic");
		inquirer.prompt([
		{
			type: "input",
			name: "front",
			message: "Write question that will display on front of card:"
		},{
			type: "input",
			name: "back",
			message: "Write answer that will display on back of card:"
		}]).then(function(answers){
			card_name = new BasicCard(answers.front, answers.back);
			//console.log(cardName);
			console.log("\n");
			console.log("You created a new card object!");
			console.log("\n");
			console.log("Front: " + card_name.front);
			console.log("Back: " + card_name.back);
			console.log("\n");

			startSetup();
		});
	}

	function clozeSetup() {
		inquirer.prompt([
	{
		name: "cloze",
		type: "input",
		message: "What's your cloze?"
	}, {
		name: "partial",
		type: "input",
		message: "What's your partial?"
	}]).then(function(answers) {
		 
		cloze_name = new ClozeCard(answers.cloze, answers.partial);
		cloze_name.text = answers.cloze + " " + answers.partial;
		console.log("\n");
		console.log("You created a new card object!");
		console.log("\n");
		console.log("Cloze: " + cloze_name.cloze);
		console.log("Partial: " + "__________ " + cloze_name.partial);
		console.log("\n");
		console.log("Full Text: " + cloze_name.text);
		console.log("\n");

		startSetup();
	});
	}	
	function viewCards() {
		inquirer.prompt([
		{
			name: "input",
			message: "Call your card:"
		}]).then(function(answers) {
			var input = answers.input;
			console.log("\n");
			console.log(eval(input));
			console.log("\n");
			startSetup();
		})
	};

	inquirer.prompt([
	{
		name: "choose",
		type: "list",
		message: "What do you want to do?:",
		choices: [
			"Create Basic Card",
			"Create Cloze Deleted Card",
			"Use Cards"
		]
	}]).then(function(answers) {

		if (answers.choose === "Create Basic Card") {
			basicSetUp();
		};
		if (answers.choose === "Create Cloze Deleted Card") {
			clozeSetup();
		};
		if (answers.choose === "Use Cards") {
			console.log("\n");
			console.log("	ex - To call basic cards: 'card_name.front' OR 'card_name.back'");
			console.log("	ex - To call cloze cards: 'cloze_name.text' OR 'cloze_name.partial'");
			console.log("\n");
			viewCards();
		};
	});
}

startSetup();