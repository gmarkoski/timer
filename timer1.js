const argv = process.argv;

//const beep = "\x07";
let delay = 0;
let occurence = 0;

if (!Number.isInteger(occurence) || occurence < 0) {
  return "invalid";
}
console.log(argv);

let args = argv.slice(2).sort();
for (let arg of args) {
  setTimeout(() => {
    process.stdout.write('\x07');
    //console.log("I got here", arg);
  }, parseInt(arg));
}
             



//node timer1.js 10 3 5 15 9