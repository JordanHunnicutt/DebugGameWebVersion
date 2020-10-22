let gameMap = [
  ['X', 'X', "r", 'X', 'X'],
  ['X', 'X', 'X', 'X', 'X'],
  ["r", 'X', "P", 'X', "r"],
  ['X', 'X', 'X', 'X', 'X'],
  ['X', 'X', "r", 'X', 'X'],
];

let currentPos = [2, 2];
let prevPos = [2,2];

function initialize(){
  renderTable(gameMap);
  initializeConditions();
}

function updateMap(newX = currentPos[0], newY = currentPos[1]) {
// "P" player
  // "O" = visited spot
  // 'X' = not visited spot
  // "R" = room
  // "S" = Safe room
  console.log(prevPos[0] + 'prevpos 0');
  console.log(prevPos[1] + 'prevpos 1');
  if(gameMap[prevPos[0]][prevPos[1]] != 'R'){
    gameMap[prevPos[0]][prevPos[1]]='O';
  }

  gameMap[newX][newY] = "P";
  renderTable(gameMap);

  
}

function renderTable(GameMap){
  
  const tbody = document.getElementById("mapbody");
  tbody.innerText = " ";

  console.log(GameMap);
  for(const row of GameMap){

    const tr = document.createElement('tr');
    const td0 = document.createElement('td');
    const td1 = document.createElement('td');
    const td2 = document.createElement('td');
    const td3 = document.createElement('td');
    const td4 = document.createElement('td');

    td0.innerText = row[0];
    td1.innerText = row[1];
    td2.innerText = row[2];
    td3.innerText = row[3];
    td4.innerText = row[4];
    
    tr.append(td0);
    tr.append(td1);
    tr.append(td2);
    tr.append(td3);
    tr.append(td4);

    tbody.append(tr);
  }
}
function moveUp() {
  prevPos[0] = currentPos[0];
  prevPos[1] = currentPos[1];
  currentPos[0] -= 1;
  updateMap(currentPos[0] ,);
  decrementPlayerScore();
  checkScore(getScore());
  updateLog('You moved up');
}
function moveDown() {
  prevPos[0] = currentPos[0];
  prevPos[1] = currentPos[1];
  currentPos[0] += 1;
  updateMap(currentPos[0],);
  decrementPlayerScore();
  checkScore(getScore());
  updateLog('You moved down');

}
function moveLeft() {
  prevPos[0] = currentPos[0];
  prevPos[1] = currentPos[1];
  currentPos[1] -= 1;
  updateMap(currentPos[0],currentPos[1]);
  decrementPlayerScore();
  checkScore(getScore());
  updateLog('You moved left');

}
function moveRight() {
    prevPos[0] = currentPos[0];
    prevPos[1] = currentPos[1];
    currentPos[1] += 1;
    updateMap(currentPos[0],currentPos[1]);
    decrementPlayerScore();
    checkScore(getScore());
    updateLog('You moved right');
}


function move(){
  
  decrementPlayerScore();
}