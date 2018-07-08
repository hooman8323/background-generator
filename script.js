var cssText = document.querySelector("h3");
var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var body = document.getElementById("gradient");

color1.addEventListener("input", changeBackgroundColor)

color2.addEventListener("input", changeBackgroundColor)

function changeBackgroundColor() {
	body.style.background = 
	"linear-gradient(to right, " +
	 color1.value + ", " + 
	 color2.value+ ")" ;

	 cssText.textContent = body.style.background + ";";
}

function generateRandomColor() {
	var randomColor = 'rgb(' + (Math.floor(Math.random() * 256)) + ","
	+(Math.floor(Math.random() * 256)) + ","
	+(Math.floor(Math.random() * 256)) + ")";

	body.style.background = randomColor;
}

body.addEventListener("click", generateRandomColor);
