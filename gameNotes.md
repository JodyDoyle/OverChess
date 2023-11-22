Overchess

18/10/2023

- I need to put all of the code into appropriate folders so that it is easier to navigate.

- I need to sort out the firebase stuff as I am getting an uncaught reference error and it is messing up my code.


24/10/2023

- I got Firebase working again and I will try tomorrow to add functionality for placing 2+ creatures in the starting phase


02/11/2023

- I got the game to have the ability to place more than one piece, but it sort of breaks a lot of stuff, so I need to work on fixing that.


03/11/2023

- I fixed a lot of the issues that arose from allowing the player to play multiple creatures which caused more problems that I need to fix (Problems 2)


04/11/2023

- I fixed most of the remaining problems, I need to fix the remaining problems and perhaps work on the opponent being able to place a second creature


05/11/2023

- I made it so that the opponent places 2 creatures, I need to make it so that other creatures can move as well


21/11/2023

- I fixed a lot of the code so that it works with adding more creatures to the game, need to fix the player death function so that the opponent can kill player's creatures

22/11/2023

- I built the player damage and player death functions, still some bugs with it especially around the poison damage messaging.




Completed Problems (1):

- When the battle starts the creatures are still shown where the moves are

- The game devolves into an infinite loop of placing creatures, the battle never starts

- When placing creatures the place where you have already placed a creature is still highlighted as a possible place to place them

- The creatures get highlighted on the grid when you are still placing creatures

- You can still select a creature that has already been placed

- The opponent still only places 1 creature



Problems (2):

- The display function seems confused about what to display (Displays hybrid info about both creatures)



Completed Problems (2):

- When you move a creature the board doesn't highlight the correct places where the creatures are (It highlights where the creature was) (And sometimes it's just random)

- Sometimes when you move Red Dragon it turns into Bloba and vice versa

- When you move one creature the other creature remains highlighted during the opponents turn



Problems (3):

- The display function doesn't seem to be picking up the tra constant even though it is picking up the cre const and they are declared in the same place



Completed Problems (3):

- When the moves appear they are all xerr class when the usable ones should be xer (they should look different)



Problems(4):

- I need to change the bite function so that when it's looking for an adjacent target it appropriately ignores friendly creatures

- I need to code the moves for blue dog

- I need to make it so that a random one of the opponents piecs makes a move (Not always just packun)


Problems(5):

- I need to sort out the sequencing of the 'hurt by poison' messaging so that it doesn't show when it's not supposed to

- Apparantly when a creature dies it says a different creature dies

- Sometimes my creatures still turn into the other creature (very rare, hard to recreate, could be related to the last point)

- Still need to program Blue dog's moves and for him to use them sometimes




5 traits:

Bulk
Movement
Range
Damage
Utility

Each trait is rated out of 5 stars and each creature should have about 13/25 stars "bst"



Creature ideas:

- Creature that shoots a rocket that does splash damage to anything left, right, up or down from the target that was hit

- Creature that gets a buff from being closs to the player

- Creature that changes form based on proximity to the player