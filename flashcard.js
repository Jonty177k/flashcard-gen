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
	var m = 0;

	//name bank
	var bank = [];
	var card_;

	for (var i=0; i < 50; i++) {
		bank[i] = card_+i;
	};

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
			m++;
			var bank[m] = new BasicCard(answers.front, answers.back);
			//console.log(cardName);
			console.log("\n");
			console.log("You created a new card called: " + bank[m]);
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
		messagge: "What's your partial?"
	}]).then(function(answers) {
		m++ 
		var bank[m] = new ClozeCard(answers.cloze, answers.partial);
		bank[m].text = answers.cloze + " " + answers.partial;
	});
	function viewCards() {
		inquirer.prompt([
		{
			name: "input",
			message: "Call your card:"
		}]).then(function(answers) {
			var input = answers.input;
			console.log(eval(input));
		})
	}

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
			console.log("\n");
			console.log("    example of card call: 'card_#.front' OR 'card_#.cloze'");
			console.log("\n");
			viewCards();
		}
	});
}

startSetup();








