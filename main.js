/* main.js */

var field = document.getElementById("displayField");

const str = "きょうは２０２０年１月２８日かようびです";

str.split("").forEach(w => {
	displayWord(w);
});

function displayWord(word) {
	let planeText = document.createElement("p");
	planeText.setAttribute("class", "word");
	planeText.textContent = word;
	field.appendChild(planeText);
}
