import React from 'react';
import Board from './Board';

class Game extends React.Component {
   constructor(props) {
      super(props);
      //Create "history" state in Game and lift state up from Board to Game.
      this.state = {
         history: [{
            squares: Array(9).fill(null),
         }],
         xIsNext: true,
       };
   }
   render() {
      return (
         <div className="game">
            <div className="game-board">
               <Board />
            </div>
        </div>
     );
   }
}

export default Game