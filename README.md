
## Update the Game component's render function to use the most recent history entry to determine and display the game's status

1) In the render function:

a) Find the last object in the history array. The objects in the history array are square objects. The last object in the history array is placed in the current variable as shown by the code below:
   const current = history[history.length - 1];

b) The next step is to access the given array of the square. This is done by "current.squares" 

c) Pass the array from b) into the calculateWinner function to determine the winner of the game, i.e., calculateWinner(current.squares)

d) If there is a winner, declare the winner else mark the next letter.

e) Return the Board component along with the square array and handleClick function as props in the Board component.

