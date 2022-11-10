# Tamagotchi-Game
PProject 0
User Story:
 
To start the user should see a start button. When clicked it should prompt the user to name their Tomigotchi
 
After naming the pet, the user should see a Tomagotchi pet in the middle of the screen that displays how it is feeling.
 
There should be 3 values of sleep, Boredom and hungry above the pet for the user to monitor.
 
Three buttons below the pet that correspond with the above values.
 
When buttons are clicked the pet values should lower and make the pet happier. This simulates interaction with the pet.
 
When the pet has no interaction the values go up signifying the level of unhappiness the pet is feeling.
 
If one of the three levels reaches a value of 10. the pet dies.

When the pet dies, the game displays that you are a bad pet owner.



pseudo coding exercise:
 
Start button should prompt to name pet
 
Update pet name from empty string
 
if pet name is entered append:
feed value 0
play value 0
sleep value 0
buttons of:
feed
play
sleep
 
set timer to count up by .5 sec
 
every time timer changes inresses values by 1
if value is under five keep value green
if one of the values reach 5 change background of that value to yellow
if one of the values reach 8 change background of that value to red
if one  value reaches 10:
alert user tamagotchi is dead
stop timer
 
if buttons are pressed decrease values by 1
Stop value from decrease below 0
 
Make tamagotchi
 
Define tamagotchi comprised of face and arms
 
When a value is in a green, yellow or red zone, change the position of face and arms.











