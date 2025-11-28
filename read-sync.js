const fs = require("fs");

console.log("Start Reading...");

try {
    const data = fs.readFileSync("./data/entries/diary.txt", "utf-8");
    console.log(data)
}
catch {
    console.log(error.message)
}

console.log("Finished");