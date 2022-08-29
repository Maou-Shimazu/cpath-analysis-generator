// Critical path analysis generator prototype
// Activity, Preceeding Event, Expected Duration
// SIGINT C
// Early/Late start, Early/Late finish, Slack, Critical Path.
// type definitions
var readline = require("readline-sync");
var hash = new Map();
// main loop
while (1) {
    var n = readline.question("Activity Name (q to exit): ");
    if (n === "q")
        break;
    var id = readline.question("Activity Number: ");
    var preq = readline.question("Activity's Precedent: ");
    var dur = readline.question("Expected Duration: ");
    var object = {
        activity_id: id,
        precedent: preq,
        expected_duration: dur
    };
    hash.set(n, object);
}
// calculations
console.log(hash);
