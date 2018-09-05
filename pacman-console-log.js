console.log('Pac-Man eats ghosts for lunch.');


var ghost = "Blinky!";

var ghosts = ['Inky', 'Blinky', 'Pinky', 'Clyde'];

console.log('There are ' + ghosts.length + ' ghosts.');

console.log('Their names are: ');

console.log(ghosts[0]);
console.log(ghosts[1]);
console.log(ghosts[2]);
console.log(ghosts[3]);

var inky = {};
inky.colour = 'Cayan';
inky.personality = 'Shadow';
console.log(inky)

var ghosts = {inky: 'Cyan', blinky: 'Red', pinky: 'Pink', clyde: 'Orange' };
console.log(ghosts);

console.log(ghosts.inky);  // retrieved the value of these ghosts' colours
console.log(ghosts.blinky);

var ghostName = 'clyde';     // stored property name in variable, accessed with square brackets
console.log(ghosts[ghostName]);

var ghosts = ['Inky', 'Blinky', 'Pinky', 'Clyde'];

for (var index = 0; index < ghosts.length; index++) {    // index++ adds by increments of 1
  console.log('Pac-Man eats ' + ghosts[index]);
}

var powerPelletEaten = false;
var ghosts = 4;

while (true) {
  console.log('Ghosts remaining: ' + ghosts);
  if (powerPelletEaten == false) {
    console.log('Pac-Man eats the power pellet.');
    powerPelletEaten = true;
  } else if (ghosts > 0) {
    console.log('Pac-Man eats a ghost.');
    ghosts --;
  } else {
    break;
  }
}

console.log('Pac-Man returns home after a long day in the maze');

var ghost = 'Blinky';
var colour;

switch (ghost) {
  case 'Inky':
    colour = 'Cyan';
    break;
  case 'Blinky':
    colour = 'Red';
    break;
  case 'Pinky':
    colour = 'Pink';
    break;
  case 'Clyde':
    colour = 'Orange';
    break;
}

console.log(ghost + ' is the colour ' + colour);

function addScore(currentScore, eaten) {
  switch (eaten) {
    case 'dot':
      scoreToAdd = 10;
      break;
    case 'powerPellet':
      scoreToAdd = 50;
      break;
    case 'firstGhost':
      scoreToAdd = 200;
      break;
    case 'secondGhost':
      scoreToAdd = 400;
      break;
  }
  return currentScore + scoreToAdd;
}

var score = 0;

score = addScore(score, 'dot');
score = addScore(score, 'dot');
score = addScore(score, 'dot');
score = addScore(score, 'powerPellet');
score = addScore(score, 'firstGhost');
console.log('Your score: ' + score);
