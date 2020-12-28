# Implementing time travel

We are to add a stepNumber to the Game component's state to indicate which step is currently
being viewed as shown below:

1) First, add a stepNumber: 0 to the initial state in Game's constructor.

2) Next, define the "jumpTo" method in Game to update that stepNumber. 

3) Also in the state, set xIsNext to true if stepNumber changes to an even number

