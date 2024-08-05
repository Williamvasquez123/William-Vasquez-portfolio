console.log('hello world!')

// create a variable and assign it a prompt
// put the mall inside the mailbox
// var prompt=prompt('what is your name?')

// display the letter that we saved in the mailbox in the console

// console.log (prompt)
// if (10 > 9) {
//   console.log('yes 10 is greater than 9')
// }

var age = prompt('what is your age?');

if (age < 18 && typeof age === "string") {
  alert('you are a minor');
} 
else if(age >= 18 && age <= 60){
  alert('you are an adult get a life ')
}
else{
  alert('dam your old')
}