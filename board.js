const BOARD = []
const LINES = 8
let START = false

// Get Alphabet from A to H
// String.fromCharCode(...[...Array('H'.charCodeAt(0) - 'A'.charCodeAt(0) + 1).keys()].map(i => i + 'A'.charCodeAt(0)));
// [...Array(8)].map((_, i) => String.fromCharCode(i + 65));
// Get number from 1 to 8
// Array.from({length: 8}, (_, i) => `${char}${i + 1}`)

const setSquares = () => {
   const chars = [...Array(LINES)].map((_, i) => String.fromCharCode(i + 65));
  chars.forEach((char) => {
    BOARD.push(Array.from({ length: LINES }, (_, i) => `${char}${i + 1}`))
  })
  // const numbers = Array.from({ length: LINES }, (_, i) => `${i + 1}`)
  // numbers.forEach((number) => {
  //   BOARD.push([...Array(LINES)].map((_, i) => `${String.fromCharCode(i + 65)}${number}`))
  // })
  return BOARD;
}

const createSquareDivs = () => {
  const boardEl = createNewHTMLElement('div', 'board', null, null)
  BOARD.forEach((lines, lineIndex) => {
    const charLine = createNewHTMLElement('div', 'char', null, `<p> ${String.fromCharCode(65 + lineIndex)}</p>`)
    lines.forEach((square) => {
      const newSquare = createNewHTMLElement('div', `square`, square)
      charLine.appendChild(newSquare)
    })
    boardEl.appendChild(charLine)
    if (lineIndex === (lines.length - 1)) {
      const legendLine = createNewHTMLElement('div', 'char', null, '')
      for ( let i = 0; i <= LINES; i++) {
        const nbrLine = createNewHTMLElement('div', 'legend', null, i)
        legendLine.appendChild(nbrLine)
        boardEl.appendChild(legendLine)
      }
    }
  })
  document.body.appendChild(boardEl)
}

const createNewHTMLElement = (elementType, className, id, html) => {
  const element = document.createElement(elementType)
  if (id)
    element.id = id
  if (className)
    element.className = className
  if (html)
    element.innerHTML = html

  return element
}

const button = document.querySelector('#start')
button.addEventListener('click', () => {
  START = !START
  if (!document.querySelector('.board')) {
    setSquares()
    createSquareDivs()
  }
})


/* TODO

define all squares on the board from a1 to h8
return array ?
[[ a1, a2, a3, ..],
...,
[ h1, h2, h3, ..]]
define squares' color


*/
