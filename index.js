// Iteration 1: Names and Input
let hacker1= "Kirsten"
let hacker2= "Laura"

console.log(`The drivers name is ${hacker1}`)
console.log(`The nevigator's name is ${hacker2}`)

// Iteration 2: Conditionals
if(hacker1.length>hacker2.length){console.log(`The driver has the longest name, it has ${hacker1.length} characters.`)}
if(hacker1.length<hacker2.length){console.log(`It seems that the navigator has the longest name, it has ${hacker2.length} characters.`)}
if(hacker1.length===hacker2.length){console.log(`Wow, you both have equally long names, ${hacker1.length} characters!`)}


// Iteration 3: Loops
let capitalizedDriversName = "";
for(i=0;i<hacker1.length;i++){
  capitalizedDriversName += hacker1[i].toUpperCase() + " ";
}
console.log(capitalizedDriversName)


//3.2 Resolution
let reversedNavigatorsName = "";
const first = hacker2.length-1;
for (let i=first;i>=0;i--){
  reversedNavigatorsName += hacker2[i];
}
console.log(reversedNavigatorsName)


//3.3 Resolution
if(hacker1>hacker2){
  console.log("Yo, the navigator goes first, definitely")
}
else if(hacker2>hacker1){
  console.log("The driver's name goes first.")
}
else if(hacker1===hacker2){
  console.log("What?! You both have the same name?")
}