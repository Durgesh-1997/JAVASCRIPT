const accountId = 185111
let accountEmail = "durgeshyadav21067@gmail.com"
var accountPassword = "12345"
accountCity = "Jaunpur"
let accountState;
// accountId = 2  //not allowed

accountEmail = "dkboss@gmail.com"
accountPassword = "21212121"
accountCity = "Mumbai"


console.log(accountId);

/*
Prefer not to use var 
because of issue in block scop and functional scop
*/
console.table([accountId,accountEmail,accountPassword,accountCity,accountState]);