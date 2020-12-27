## Give player the ability to mark O inside the squares


1) Go to the Board component.

2) Add a boolean property to the state object called xIsNext and set it to true(xIsNext: true)

3) To achieve the ability to be able to either mark X or O inside the squares, make the following additions in the handleClick method:

   handleClick(i) {
     const squares = this.state.squares.slice();
     squares[i] = this.state.xIsNext ? 'X' : 'O';
     this.setState({
       squares: squares,
       xIsNext: !this.state.xIsNext,
     });
   }

## Create Game component

1) Create a Game component that returns an empty div container.