// If else Statement

// const access = false;

// if(access){ // Checks if value is true
//     console.log('Hey mom im tik tok famous');
// }else{
//     console.log('hey i dont have access')
// }

// ex:2-with && and
// const age = 20;
// const bank = 50;

// if(age >= 18 && bank >= 50){ // && checks both values are true
//     console.log('You are qualified');
// } else {
//     console.log('you are not qualified');
// }

// ex:3-with || or
// const age = 15;
// const bank = 9999999;

// if(age >= 18 || bank >= 1000000){ // || checks if at least one of the values are true
//     console.log('You are qualified');
// } else {
//     console.log('you are not qualified');
// }

//ex:4-with != not equal
// const age = 15;

// if(age != 15){ // || checks if at least one of the values are true
//     console.log('You are qualified');
// } else {
//     console.log('you are not qualified');
// }

// ex:5- else if
// as soon as one statement is correct nothing else in the block is exicuted
const age = 15;
const bank = 1;

if (age >= 18) {
  console.log("you are old enough you can enter");
} else if (bank > 30) {
  console.log("cool you have enough money");
} else {
  console.log("You are too young and too broke");
}
