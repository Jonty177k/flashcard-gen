//npm install inquirer
var inquirer = require("inquirer");

function BasicCard (font, back) {
	this.front = front;
	this.back = back;
}

function ClozeCard (cloze, partial, text) {
	this.cloze = cloze;	
	this.partial = "_________" + partial;
	this.text = function(partial, cloze) {
		var cardText = partial + " " + cloze;
		return cardText;
	};
}

console.log("--------------------------");
console.log("----Matthews Card App!----");
console.log("--------------------------");

//var cardArray = [];

function startSetup() {
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
		}
		if (answers.choose === "Create Cloze Deleted Card") {
			clozeSetup();
		}
		if (answers.choose === "Use Cards") {
			useCards();
		}
	});
}

function basicSetUp() {
	//console.log("hello basic");
	inquirer.prompt([
	{
		type: "input",
		name: "card",
		message: "Name your card:"
	},{
		type: "input",
		name: "front",
		message: "Write question that will display on front of card:"
	},{
		type: "input",
		name: "back",
		message: "Write answer that will display on back of card:"
	}]).then(function(answers){

		var str(answers.card) = new BasicCard(answers.front, answers.back);
		console.log("You created a new card!");
	});
	startSetup();
}

function clozeSetup() {
	//console.log("hello cloze");
}

function viewCards() {

}

startSetup();