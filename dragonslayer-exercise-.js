var slaying = true;
var youHit = Math.floor(Math.random() * 2);
var damageThisRound = Math.floor(Math.random() * 5 + 1);
var totalDamage = 0;
while(slaying) {
    switch ("slaying") {
        case "youHit":
            console.log("You win!");
            totalDamage += damageThisRound;
            youHit = Math.floor(Math.random() * 4);
            break;
        case "totalDamage >= 4":
            console.log("Victory!");
            slaying = false;
            break;
        case "You whiffed":
            console.log("You whiffed!");
            break;
        case "You suck!":
            console.log("You suck!");
            slaying = false;
            break;
    }
    //if (youHit) {//
       // console.log("You win!");
        //totalDamage += damageThisRound;
        //if (totalDamage >= 4) {
          ///  console.log("Victory!");
            //slaying = false;
        //} else {
        //    youHit = Math.floor(Math.random() * 4);
        //}
   // } else {
   //     console.log("You whiffed!");
    //}
    //console.log("You suck!");
    //slaying = false;
//}
