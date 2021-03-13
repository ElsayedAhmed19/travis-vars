require('dotenv').config()

function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

async function main() {
  while(true) {
    console.log(process.env.NAME)
    console.log("Microservices rock!");
    await sleep(5000);
  }
}

main();
