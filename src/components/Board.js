import React from 'react';
import Square from './Square';

class Board extends React.Component {
   constructor(props) {
      super(props);
      this.state = {
         squares: Array(9).fill(null),
      };
   }

   // The function replaces the content of a square with X
   handleClick(i) {
      const squares = this.state.squares.slice();
      squares[i] = 'X';
      this.setState({ squares: squares });
   }

   // renderSquare function takes a number as input, then passes this number to a square in the array, & the handleClick function replaces that number with an X when the square is clicked.
   renderSquare(i) {
      return (
         <Square value={this.state.squares[i]}
            onClick={() => this.handleClick(i)}
         />
      );
   }
   
   // The render function renders all the 9 squares along with the status of the player which is hard coded
   render() {
      const status = 'Next player: X';
      return (
         <div className="center">
            <div className="status">{status}</div>
            <div className="board-row">
               {this.renderSquare(0)}
               {this.renderSquare(1)}
               {this.renderSquare(2)}
            </div>
            <div className="board-row">
               {this.renderSquare(3)}
               {this.renderSquare(4)}
               {this.renderSquare(5)}
            </div>
            <div className="board-row">
               {this.renderSquare(6)}
               {this.renderSquare(7)}
               {this.renderSquare(8)}
            </div>
         </div>
     )
   }
}

export default Board