//actual battling
function Battle(player, enemy, log)
{
    if(enemy.health >0)
    {

        while(enemy.health > 0 && player.health > 0)
        {
            log.innerText = "Current health: " + player.health +
            "\nHeal or Attack?";
            
            function Heal()
            {
                PlayerHeal(player,log);
            }
            function Attack()
            {
                PlayerAttack(player, enemy, log)
            }
            EnemyAttack(player, enemy,log);
        }
    }
    return false;
}

function PlayerHeal(player, log)
{
    log.innerText = "Your current health is " + 
    player.health;

    player.health = Math.round((player.health + (Math.random() * 5)));

    log.innerText += "\nYour new health is " +
    player.health;
}

function PlayerAttack(player, enemy, log)
{
    let missChance = Math.random();
    //if you hit...
    if(missChance > 0.2)
    {
        let damage = player.weapon.damage;
        enemy.health -= damage;
        log.innerText = "You delt " + damage + " damage";
    }
    //if you miss...
    else
    {
        log.innerText = "Oof. You missed man";
    }

    log.innerText += "\nThe enemies health is " +
    enemy.health;
}

function EnemyAttack(player, enemy, log)
{
    let missChance = Math.random();
    //if it hits you...
    if(missChance > 0.5)
    {
        player.health -= enemy.strength;
        log.innerText = "You took " + enemy.strength + " damage! Ouch";
    }
    //if it misses...
    else
    {
        log.innerText = "The enemy missed their attack";
    }

    log.innerText += "\nYour new health is " +
    player.health;
}