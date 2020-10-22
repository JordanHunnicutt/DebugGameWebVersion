//actual battling
function Battle(player, enemy)
{
    updateLog("You're in battle");
    
    const buttons = document.getElementsByTagName('button');
            for (const button of buttons){
                if(button.innerHTML.length < 2){
                    button.disabled = false;
                } else {
                    button.disabled = true;
                }
            }
         for (const button of buttons){
            if(button.innerHTML.length < 2){
                button.disabled = true;
            } else {
                button.disabled = false;
            }
        }
        if(enemy.health <= 0){
            for (const button of buttons){
                if(button.innerHTML.length < 2){
                    button.disabled = true;
                } else {
                    button.disabled = false;
                }
            }
            for (const button of buttons){
                if(button.innerHTML.length < 2){
                    button.disabled = false;
                } else {
                    button.disabled = true;
                }
            }
            enemy1.health = 30;
            incrementRoomsCompleted();
        }
        else if(player.health === 0){
            updateLog("You lose.")
        }
}

function PlayerHeal(player)
{
    updateLog("Your current health is " + player.health);

    player.health = Math.round((player.health + (Math.random() * 5)));

    updateLog("\nYour new health is " + player.health);
    EnemyAttack(player1, enemy1)
    Battle(player1, enemy1);
}

function PlayerAttack(player, enemy)
{
    let missChance = Math.random();
    //if you hit...
    if(missChance > 0.2)
    {
        let damage = player.weapon.damage;
        enemy.health -= damage;
        updateLog("You delt " + damage + " damage");
    }
    //if you miss...
    else
    {
        updateLog("Oof. You missed man");
    }

    updateLog("\nThe enemies health is " + enemy.health);
    EnemyAttack(player1, enemy1)
    Battle(player1, enemy1);
}

function EnemyAttack(player, enemy)
{
    let missChance = Math.random();
    //if it hits you...
    if(missChance > 0.5)
    {
        player.health -= enemy.strength;
        updateLog("You took " + enemy.strength + " damage! Ouch");
    }
    //if it misses...
    else
    {
        updateLog("The enemy missed their attack");
    }

    updateLog("\nYour new health is " +player.health);
}