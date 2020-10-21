let gameMap = [
  [0, 0, "r", 0, 0],
  [0, 0, 0, 0, 0],
  ["r", 0, "P", 0, "r"],
  [0, 0, 0, 0, 0],
  [0, 0, "r", 0, 0],
];

let currentPos = [2, 2];
let prevPost = [2,2];

function updateMap(newX = currentPos[0], newY = currentPos[1]) {
// "P" player
  // "x" = visited spot
  //  0 = not visited spot
  // "r" = room
  // "c" = closed room
  
  if (map[(prevPos[0], prevPos[1])] != 'r' || map[(prevPos[0], prevPos[1])] != 'c') {
    map[(currentPos[0], currentPos[1])] === "x";
  } else if (map[(prevPos[0], prevPos[1])] === "r") {
    map[(currentPos[0], currentPos[1])] === "c";
  }

  gameMap[(newX, newY)] = "P";
}

function moveUp() {
  prevPost = currentPos;
  currentPos[0] += 1;
  updateMap(currentPos[0] ,)
}
function moveDown() {
    prevPost = currentPos;

    currentPos[0] -= 1;
  updateMap(currentPos[0],)
}
function moveLeft() {
    prevPost = currentPos;

    currentPos[1] -= 1;
  updateMap(,currentPos[1])
}
function moveRight() {
    prevPost = currentPos;

    currentPos[1] += 1;
    updateMap(,currentPos[1])
}


function move(){
  
  decrementPlayerScore();
}