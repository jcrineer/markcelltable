var body = document.body;
var fourByFourTable = document.createElement("table");
fourByFourTable.id = "table";
var header = document.createElement("thead");
var headerRow = document.createElement("tr");
var headOne = document.createElement("th");
var headTwo = document.createElement("th");
var headThree = document.createElement("th");
var headFour = document.createElement("th");
var tableBody = document.createElement("tbody");
var rowOne = document.createElement("tr");
var oneOne = document.createElement("td");
oneOne.id = "1,1";
var oneTwo = document.createElement("td");
oneTwo.id = "1,2";
var oneThree = document.createElement("td");
oneThree.id = "1,3";
var oneFour = document.createElement("td");
oneFour.id = "1,4";
var rowTwo = document.createElement("tr");
var twoOne = document.createElement("td");
twoOne.id = "2,1";
var twoTwo = document.createElement("td");
twoTwo.id = "2,2";
var twoThree = document.createElement("td");
twoThree.id = "2,3";
var twoFour = document.createElement("td");
twoFour.id = "2,4";
var rowThree = document.createElement("tr");
var threeOne = document.createElement("td");
threeOne.id = "3,1";
var threeTwo = document.createElement("td");
threeTwo.id = "3,2";
var threeThree = document.createElement("td");
threeThree.id = "3,3";
var threeFour = document.createElement("td");
threeFour.id = "3,4";
var rowFour = document.createElement("tr");
var fourOne = document.createElement("td");
fourOne.id = "4,1";
var fourTwo = document.createElement("td");
fourTwo.id = "4,2";
var fourThree = document.createElement("td");
fourThree.id = "4,3";
var fourFour = document.createElement("td");
fourFour.id = "4,4";
var buttonBox = document.createElement("span")
var buttonUp = document.createElement("button");
buttonUp.id = "up";
var buttonRight = document.createElement("button");
buttonRight.id = "right";
var buttonLeft = document.createElement("button");
buttonLeft.id = "left";
var buttonDown = document.createElement("button");
buttonDown.id = "down";
var buttonMarkCell = document.createElement("button");
buttonMarkCell.id = "mark";
var select = "1,1";
var move = "";



function space() {
	body.appendChild(document.createElement("br"));
	body.appendChild(document.createElement("br"));
}

function selected(){

	
	document.getElementById(select).style.border = "solid black 1px";

	document.getElementById(move).style.border = "solid black 3px";

	select = move;

}

function rightClick(){

	var dir = parseInt(select[2]);

	dir += 1;
	if (dir > 4){

		return;
	}

	move = select.slice(0,2) + dir;

	document.getElementById(select).style.fontWeight = "normal";
	document.getElementById(select).style.border = "solid gray 1px";
	document.getElementById(move).style.border = "solid black 2px";
	document.getElementById(move).style.fontWeight = "bold";
	select = move;
}

function leftClick(){


	var dir = parseInt(select[2]);

	dir -= 1;

	if (dir < 1){

		return;
	}

	move = select.slice(0,2) + dir;

	document.getElementById(select).style.fontWeight = "normal";
	document.getElementById(select).style.border = "solid gray 1px";
	document.getElementById(move).style.border = "solid black 2px";
	document.getElementById(move).style.fontWeight = "bold";
	select = move;
}

function upClick(){

	var dir = parseInt(select[0]);

	dir -= 1;
	sli = select.slice(1);
	move =  dir + sli;

	if (dir < 1){

		return;
	}

	document.getElementById(select).style.fontWeight = "normal";
	document.getElementById(select).style.border = "solid gray 1px";
	document.getElementById(move).style.border = "solid black 2px";
	document.getElementById(move).style.fontWeight = "bold";
	select = move;
}

function downClick(){

	var dir = parseInt(select[0]);

	dir += 1;
	sli = select.slice(1);
	move =  dir + sli;

	if (dir > 3){

		return;
	}
	
	document.getElementById(select).style.fontWeight = "normal";
	document.getElementById(select).style.border = "solid gray 1px";
	document.getElementById(move).style.border = "solid black 2px";
	document.getElementById(move).style.fontWeight = "bold";
	select = move;
}

function markCell(){


	document.getElementById(select).style.backgroundColor = "yellow";

}


// CREATE TABLE
body.appendChild(fourByFourTable);
fourByFourTable.style.border = "solid gray 1px";
fourByFourTable.style.tableLayout = "fixed"
fourByFourTable.style.width = "400px"
fourByFourTable.style.height = "150px"
fourByFourTable.style.borderCollapse = "collapse"
fourByFourTable.style.textAlign = "center"



// HEADER ROW
fourByFourTable.appendChild(header);
header.appendChild(headerRow);
headerRow.appendChild(headOne);
headerRow.appendChild(headTwo);
headerRow.appendChild(headThree);
headerRow.appendChild(headFour);
headOne.style.border = "solid black 1px";
headTwo.style.border = "solid black 1px";
headThree.style.border = "solid black 1px";
headFour.style.border = "solid black 1px";
headOne.textContent += "Header 1";
headTwo.textContent += "Header 2";
headThree.textContent += "Header 3";
headFour.textContent += "Header 4";

// BODY
fourByFourTable.appendChild(tableBody);

// ROW ONE
tableBody.appendChild(rowOne);
rowOne.appendChild(oneOne);
oneOne.style.border = "solid gray 1px";
oneOne.textContent += "1,1";
rowOne.appendChild(oneTwo);
oneTwo.style.border = "solid gray 1px";
oneTwo.textContent += "1,2";
rowOne.appendChild(oneThree);
oneThree.style.border = "solid gray 1px";
oneThree.textContent += "1,3";
rowOne.appendChild(oneFour);
oneFour.style.border = "solid gray 1px";
oneFour.textContent += "1,4";

// ROW TWO
tableBody.appendChild(rowTwo);
rowTwo.appendChild(twoOne);
twoOne.style.border = "solid gray 1px";
twoOne.textContent += "2,1";
rowTwo.appendChild(twoTwo);
twoTwo.style.border = "solid gray 1px";
twoTwo.textContent += "2,2";
rowTwo.appendChild(twoThree);
twoThree.style.border = "solid gray 1px";
twoThree.textContent += "2,3";
rowTwo.appendChild(twoFour);
twoFour.style.border = "solid gray 1px";
twoFour.textContent += "2,4";


// ROW THREE
tableBody.appendChild(rowThree);
rowThree.appendChild(threeOne);
threeOne.style.border = "solid gray 1px";
threeOne.textContent += "3,1";
rowThree.appendChild(threeTwo);
threeTwo.style.border = "solid gray 1px";
threeTwo.textContent += "3,2";
rowThree.appendChild(threeThree);
threeThree.style.border = "solid gray 1px";
threeThree.textContent += "3,3";
rowThree.appendChild(threeFour);
threeFour.style.border = "solid gray 1px";
threeFour.textContent += "3,4";



space();

// DIRECTIONAL BUTTONS

body.appendChild(buttonBox);
buttonBox.appendChild(buttonUp);
buttonBox.style.border = "1px solid"
buttonBox.style.padding = "5px"
buttonUp.appendChild(document.createTextNode("UP"));
space();
buttonBox.appendChild(buttonLeft);
buttonLeft.appendChild(document.createTextNode("LEFT"));
buttonBox.appendChild(buttonRight);
buttonRight.appendChild(document.createTextNode("RIGHT"));
space();
buttonBox.appendChild(buttonDown);
buttonDown.appendChild(document.createTextNode("DOWN"));


// MARK CELL

body.appendChild(buttonMarkCell);
buttonMarkCell.appendChild(document.createTextNode("MARK CELL"));

document.getElementById(select).style.fontWeight = "bold";
document.getElementById(select).style.border = "solid black 2px";


document.getElementById("right").addEventListener("click",rightClick);
document.getElementById("left").addEventListener("click",leftClick);
document.getElementById("up").addEventListener("click",upClick);
document.getElementById("down").addEventListener("click",downClick);
document.getElementById("mark").addEventListener("click",markCell);
