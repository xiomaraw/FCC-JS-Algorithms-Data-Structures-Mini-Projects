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


## Record Collection
You are given a JSON object representing a part of your musical album collection. Each album has a unique id number as its key and several other properties. Not all albums have complete information.

You start with an updateRecords function that takes an object like collection, an id, a prop (like artist or tracks), and a value. Complete the function using the rules below to modify the object passed to the function.

Your function must always return the entire object.
- If prop isn't tracks and value isn't an empty string, update or set that album's prop to value.
- If prop is tracks but the album doesn't have a tracks property, create an empty array and add value to it.
- If prop is tracks and value isn't an empty string, add value to the end of the album's existing tracks array.
- If value is an empty string, delete the given prop property from the album.
- Note: A copy of the collection object is used for the tests.

## Profile Lookup
We have an array of objects representing different people in our contacts lists.
A lookUpProfile function that takes name and a property (prop) as arguments has been pre-written for you.
The function should check if name is an actual contact's firstName and the given property (prop) is a property of that contact.

- If both are true, then return the "value" of that property.
- If name does not correspond to any contacts then return "No such contact".
- If prop does not correspond to any valid properties of a contact found to match name then return "No such property".
