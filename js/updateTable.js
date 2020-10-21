let gameMap = [
  [0, 0, "r", 0, 0],
  [0, 0, 0, 0, 0],
  ["r", 0, "P", 0, "r"],
  [0, 0, 0, 0, 0],
  [0, 0, "r", 0, 0],
];

let currentPos = [2, 2];
let prevPos = [2,2];

function initialize(){
  renderTable(gameMap);
}

function updateMap(newX = currentPos[0], newY = currentPos[1]) {
// "P" player
  // "x" = visited spot
  //  0 = not visited spot
  // "r" = room
  // "c" = closed room
  console.log(newX);
  console.log(newY);
  if (map[(prevPos[0], prevPos[1])] != 'r' || map[(prevPos[0], prevPos[1])] != 'c') {
    map[(currentPos[0], currentPos[1])] === "x";
  } else if (map[(prevPos[0], prevPos[1])] === "r") {
    map[(currentPos[0], currentPos[1])] === "c";
  }

  gameMap[newX, newY] = "P";
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
  prevPos = currentPos;
  currentPos[0] -= 1;
  updateMap(currentPos[0] ,)
}
function moveDown() {
    prevPos = currentPos;

    currentPos[0] += 1;
  updateMap(currentPos[0],)
}
function moveLeft() {
    prevPos = currentPos;

    currentPos[1] -= 1;
  updateMap(currentPos[0],currentPos[1])
}
function moveRight() {
    prevPos = currentPos;

    currentPos[1] += 1;
    updateMap(currentPos[0],currentPos[1])
}


function move(){
  
  decrementPlayerScore();
}