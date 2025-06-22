const button = document.querySelectorAll("button");

button.addEventListener("click",updateName);

function updateName(){
	const name = prompt("名前を入力してください");
	button.textContent = `Player 1: ${name}`;
}