// Critical path analysis generator prototype
// Activity, Preceeding Event, Expected Duration
// SIGINT C
// Early/Late start, Early/Late finish, Slack, Critical Path.

// type definitions
const readline = require("readline-sync");
interface Path {
  activity_id: number;
  precedent: string;
  expected_duration: number;
}
const hash: Map<string, Path> = new Map();

// main loop
while (1) {
    const n: string = readline.question("Activity Name (q to exit): ");
    if (n === "q") break;
    const id: number = readline.question("Activity Number: ");
    const preq: string = readline.question("Activity's Precedent: ");
    const dur: number = readline.question("Expected Duration: ");

    const object = <Path> {
      activity_id: id,
      precedent: preq,
      expected_duration: dur,
    };

    hash.set(n, object);
}
// calculations
console.log(hash);
