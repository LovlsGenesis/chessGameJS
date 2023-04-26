import Board from "./board.js"

export default class Game {
  constructor() {
    this.board = new Board()
    this.started = false
  }

  start() {
    this.started = true
    this.board.setSquares()
    this.board.createSquareDivs()
  }
}
