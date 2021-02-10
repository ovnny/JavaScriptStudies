const time = `00h34m, 00h14m, 06h16m, 01h27m, 03h02m, 03h04m, 02h07m, 03h38m, 
              03h08m, 02h54m, 04h43m, 07h13m, 03h30m, 01h51m, 02h34m, 01h01m,
              03h16m, 02h24m, 01h08m, 01h27m, 01h17m, 01h29m, 06h32m, 02h47m, 
              01h31m, 02h00m`

let counter = 1
let matches;
const hour = /(\d{2}h)/gm;

while ((matches = hour.exec(time)) !== null) {
    // This is necessary to avoid infinite loops with zero-width matches
    if (matches.index === hour.lastIndex) {
        hour.lastIndex++;
    }
    
    // The result can be accessed through the `m`-variable.
    matches.forEach((match, groupindex => {
        console.log(counter++, matches[0]);
    }
}