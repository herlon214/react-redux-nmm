import React from 'react'
import DuckImage from '../assets/Duck.jpg'
import './HomeView.scss'

export const HomeView = () => (
  <div>
    <h4>Rules</h4>
    <p>
    The board consists of a grid with twenty-four intersections or points. Each player has nine pieces, or "men", usually coloured black and white. Players try to form 'mills'—three of their own men lined horizontally or vertically—allowing a player to remove an opponent's man from the game. A player wins by reducing the opponent to two pieces (where he could no longer form mills and thus be unable to win), or by leaving him without a legal move.
    </p>

    <hr/>

    <small>made with <span>♥</span> by Herlon Aguiar</small>
  </div>
)

export default HomeView
