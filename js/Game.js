/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Game.js */

class Game {
  constructor() {
    this.missed = 0
    this.phrases = this.createPhrases()
    this.activePhrase = null
  }
  /**
  * Creates phrases for use in game
  * @return {array} An array of phrases that could be used in the game
  */
  createPhrases() {
    const phrases = [
			new Phrase('Hypertext Markup Language'),
			new Phrase('Cascading Style Sheets'),
			new Phrase('JavaScript'),
			new Phrase('Python'),
			new Phrase('Hypertext Preprocessor')
		]
		return phrases
  }
  /**
  * Selects random phrase from phrases property
  * @return {Object} Phrase object chosen to be used
  */
  getRandomPhrase() {
    const randomPhrase = this.phrases[Math.floor(Math.random() * this.phrases.length)]
    return randomPhrase
  }
  /**
  * Begins game by selecting a random phrase and displaying it to user
  */
  startGame() {
    const screenOverlay = document.getElementById('overlay')
    screenOverlay.style.display = 'none'
    
    this.resetGame()
    this.activePhrase = this.getRandomPhrase()
    this.activePhrase.addPhraseToDisplay(Phrase)
  }
  /**
  * Checks for winning move
  * @return {boolean} True if game has been won, false if game wasn't won
  */
  checkForWin() {
    const hiddenLetters = document.getElementsByClassName('hide').length

		if (hiddenLetters === 0) {
			return true
		} else {
			return false
		}
  }
  /**
  * Increases the value of the missed property
  * Removes a life from the scoreboard
  * Checks if player has remaining lives and ends game if player is out
  */
  removeLife() {
    const userLives = document.querySelectorAll('img')
    userLives[this.missed].src = 'images/lostHeart.png'
    this.missed ++
  
    if (this.missed >= 5) {
      this.gameOver(false)
    }
  }
  /**
  * Displays game over message
  * @param {boolean} gameWon - Whether or not the user won the game
  */
  gameOver(gameWon) {
    const overlayMsg = document.querySelector('#overlay')
    overlayMsg.style.display = ''
    
    if (gameWon) {
      overlayMsg.querySelector('h1').innerHTML = 'Great job!'
      overlayMsg.className = 'win'
    } else {
      overlayMsg.className = 'lose'
      overlayMsg.querySelector('h1').innerHTML = 'Sorry, better luck next time!'
    }
  }
  /**
  * Handles onscreen keyboard button clicks
  * @param (HTMLButtonElement) button - The clicked button element
  */
  handleInteraction(button) {
    const userSelection = button.innerHTML
    const activePhrase = this.activePhrase
    
    if (activePhrase.checkLetter(userSelection)) {
      activePhrase.showMatchedLetter(userSelection)
      button.classList.add('chosen')
      button.disabled = true
      if (this.checkForWin()) {
        this.gameOver(true)
      }
    } else {
      button.classList.add('wrong');
      if (button.disabled === false) {
        this.removeLife()
        button.disabled = true
      }
    }
  }
  /**
  * Resets entire game once user wins or loses previous game
  */
  resetGame() {
		const phrase = document.getElementById('phrase').firstElementChild
    phrase.innerHTML = ' '

    const resetHearts = document.querySelectorAll('img')
		resetHearts.forEach(heart => heart.src = 'images/liveHeartNew.png')
    
    this.missed = 0
		this.phrases = this.createPhrases()
		this.activePhrase = null

    const keys = [...letters]
		keys.forEach(key => {
      key.removeAttribute('disabled')
      key.className = 'key'
		})
  }
}