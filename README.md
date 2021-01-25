# JS-Algorithms-Data-Structures-Mini-Projects
Free Code Camp JavaScript, Algorithms, and Data Structures Certification Mini Projects 

## Counting Cards
In the casino game Blackjack, a player can gain an advantage over the house by keeping track of the relative number of high and low cards remaining in the deck. This is called Card Counting.
Having more high cards remaining in the deck favors the player. Each card is assigned a value according to the table below. When the count is positive, the player should bet high. When the count is zero or negative, the player should bet low.

        Count Change   (Cards)
            +1	   (2, 3, 4, 5, 6)
             0	   (7, 8, 9)
            -1	   (10, 'J', 'Q', 'K', 'A')

You will write a card counting function. It will receive a card parameter, which can be a number or a string, and increment or decrement the global count variable according to the card's value (see table). The function will then return a string with the current count and the string Bet if the count is positive, or Hold if the count is zero or negative. The current count and the player's decision (Bet or Hold) should be separated by a single space.

    Example Output 
     -3 Hold 
      5 Bet

Hint: 
- Do NOT reset count to 0 when value is 7, 8, or 9.
- Do NOT return an array.
- Do NOT include quotes (single or double) in the output.

## Golf Code
In the game of golf each hole has a par meaning the average number of strokes a golfer is expected to make in order to sink the ball in a hole to complete the play. Depending on how far above or below par your strokes are, there is a different nickname.

Your function will be passed par and strokes arguments. Return the correct string according to this table which lists the strokes in order of priority; top (highest) to bottom (lowest):

        Strokes	        Return
           1	        "Hole-in-one!"
        <= par - 2	        "Eagle"
         par - 1	        "Birdie"
          par	        "Par"
         par + 1	        "Bogey"
         par + 2	        "Double Bogey"
        >= par + 3	        "Go Home!"
        
