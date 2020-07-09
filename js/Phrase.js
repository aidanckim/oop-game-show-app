/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Phrase.js */

class Phrase {
  constructor(phrase) {
    this.phrase = phrase.toLowerCase()
  }
  /**
  * Display phrase on game board
  */
  addPhraseToDisplay() {
    const renderHTML = document.getElementById('phrase').firstElementChild
    const keyPhrase = [...this.phrase]
    keyPhrase.map((letter) => {
      const content = document.createElement('li')
      if (letter != ' ') {
        renderHTML.appendChild(content)
        content.className = `hide letter ${letter}`
        content.textContent = letter
      } else {
        renderHTML.appendChild(content)
        content.className = 'space'
        content.textContent = ' '
      }
    })
  }
  /**
  * Checks if passed letter is in phrase
  * @param (string) letter - Letter to check
  */
  checkLetter(letter) {
    const arrayPhrase = this.phrase
		return arrayPhrase.includes(letter)
  }
  /**
  * Displays passed letter on screen after a match is found
  * @param (string) letter - Letter to display
  */
  showMatchedLetter(letter) {
    const letters = document.getElementsByClassName(letter)
    Array.from(letters).forEach((letter) => {
      letter.classList.add('show')
      letter.classList.remove('hide')
    })
  }
}