let playerScore;
let roomsCompleted;

function initializeConditions(){
    playerScore = 30;
    roomsCompleted = 0;
}

function decrementPlayerScore(){
    playerScore = playerScore - 1;

    checkScore(playerScore);
}

function checkScore(score){
    if(score <= 0){
        const buttons = document.getElementsByTagName('button');
        for(const button of buttons){
            button.disabled = true;
        }
        updateLog("You ran out of points, you lose!")
    } else{
        updateLog("You have "+score+" points.");
    }
}

function incrementRoomsCompleted(){
    roomsCompleted = roomsCompleted + 1;

    checkRooms(roomsCompleted)
}

function checkRooms(numRooms){
    if(numRooms === 4){
        const buttons = document.getElementsByTagName('button');
        for(const button of buttons){
            button.disabled = true;
        }
        updateLog("You have completed the game, good job!")
    } else{
        numRooms = 4 - numRooms;
        updateLog("You have "+numRooms+" enemies to defeat");
    }
}

function getScore(){
    return playerScore;
}
