var slaying = true;
var youHit = Math.floor(Math.random() * 2);
var damageThisRound = Math.floor(Math.random() * 5 + 1);
var totalDamage = 0;
while(slaying) {
    if (youHit) {
        console.log("You win!");
        totalDamage += damageThisRound;
        if (totalDamage >= 4) {
            console.log("Victory!");
            slaying = false;
        } else {
            youHit = Math.floor(Math.random() * 2);
        }
    } else {
        console.log("You missed!");
    }
    console.log("You suck!");
    slaying = false;
}
