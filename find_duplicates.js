const fs = require("fs");

const filePath = "frontend/src/data/notificationsData.js";
const content = fs.readFileSync(filePath, "utf8");

// Extract all title values
const titleRegex = /title:\s*"([^"]+)"/g;
const titles = {};
let match;

while ((match = titleRegex.exec(content)) !== null) {
  const title = match[1];
  if (titles[title]) {
    titles[title]++;
  } else {
    titles[title] = 1;
  }
}

// Print duplicates
console.log("Duplicate titles found:");
for (const [title, count] of Object.entries(titles)) {
  if (count > 1) {
    console.log(`\n"${title}" appears ${count} times`);
  }
}
