/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * app.js */

let game

const button = document.getElementById('btn__reset')

button.addEventListener('click', (e) => {
	game = new Game()
	game.startGame();
})

const letters = document.getElementsByClassName('key')

for (let i = 0; i < letters.length; i++) {
	const alpha = letters[i]
	alpha.addEventListener('click', (e) => {
		game.handleInteraction(e.target)
	})
}
