"use strict";
// let alert massig with the user inbot

let score = 0;
let Similarity = 0;
let userName = prompt("Your Name ?");
console.log(userName);
alert("wellcome " + userName);

// yes or no (Q)
function q1() {
  let q1 = prompt("Do you like physics?");
  console.log(q1);
  // ANOTHER WAY IN SWITCH
  switch (q1.toLocaleLowerCase()) {
    case "yes":
    case "y":
      // case 'YES':
      // case 'Y':
      alert(" We are the same in that ");
      score++;
      Similarity++;
      
      break;
    case "no":
    case "n":
      // case 'NO':
      //  case 'N':
      alert("You are not like me");
      break;

    default:
      alert("Nice to meet you " + userName);
  }
  // //use .tolowerCse() method
  // if(q1.toLowerCase() === 'yes' || q1.toLowerCase() === 'y'){
  //     alert(' We are the same in that ');
  //     score++;
  //     Similarity++;
  // }else if(q1.toLowerCase() ==='no'|| q1.toLowerCase() === 'n'){
  // alert('You are not like me');
  // }else{
  //     alert('Nice to meet you ' + userName);
  // }

  return;
}
q1();

function q2() {
  let q2 = prompt("Do you like sports ?");
  console.log(q2);
  switch (q2.toLocaleLowerCase()) {
    case "yes":
    case "y":
      alert("We are the same in that");
      score++;
      Similarity++;
      break;
    case "no":
    case "n":
      alert("You are not like me");
      break;
    default:
      alert("Nice to meet you " + userName);
  }

  // if(q2.toLowerCase() === 'yes' || q2.toLowerCase() === 'y'){
  //     alert('We are the same in that');
  //     score++;
  //     Similarity++;
  // }else if(q2.toLowerCase() ==='no'|| q2.toLowerCase() === 'n'){
  // alert('You are not like me');
  // }else{
  //     alert('Nice to meet you ' + userName);
  // }
  return;
}
q2();

function q3() {
  let q3 = prompt("Do you like fighting games?");
  console.log(q3);

  switch (q3.toLocaleLowerCase()) {
    case "yes":
    case "y":
      alert("We are the same in that");
      score++;
      Similarity++;
      break;
    case "no":
    case "n":
      alert("You are not like me");
      break;
    default:
      alert("Nice to meet you " + userName);
  }

  // if(q3.toLowerCase() === 'yes' || q3.toLowerCase() === 'y'){
  //     alert('We are the same in that');
  //     score++;
  //     Similarity++;
  // }else if(q3.toLowerCase() ==='no'|| q3.toLowerCase() === 'n'){
  // alert('You are not like me');
  // }else{
  //     alert('Nice to meet you ' + userName);
  // }
  return;
}
q3();

function q4() {
  let q4 = prompt("do you like drawing ?");
  console.log(q4);

  switch (q4.toLocaleLowerCase()) {
    case "yes":
    case "y":
      alert("We are the same in that");
      score++;
      Similarity++;
      break;
    case "no":
    case "n":
      alert("You are not like me");
      break;
    default:
      alert("Nice to meet you " + userName);
  }

  //    if(q4.toLowerCase() === 'yes' || q4.toLowerCase() === 'y'){
  //        alert('We are the same in that');
  //        score++;
  //        Similarity++;
  //    }else if(q4.toLowerCase() ==='no'|| q4.toLowerCase() === 'n'){
  //    alert('You are not like me');
  //    }else{
  //        alert('Nice to meet you ' + userName);
  //    }
  return;
}
q4();

function q5() {
  let q5 = prompt("Do you want to be a programmer?");
  console.log(q5);

  switch (q5.toLocaleLowerCase()) {
    case "yes":
    case "y":
      alert("We are the same in that");
      score++;
      Similarity++;
      break;
    case "no":
    case "n":
      alert("You are not like me");
      break;
    default:
      alert("Nice to meet you " + userName);
  }

  // if(q5.toLowerCase() === 'yes' || q5.toLowerCase() === 'y'){
  //     alert('We are the same in that');
  //     score++;
  //     Similarity++;
  // }else if(q5.toLowerCase() ==='no'|| q5.toLowerCase() === 'n'){
  // alert('You are not like me');
  // }else{
  //     alert('Nice to meet you ' + userName);
  // }
  return;
}
q5();
alert("Similarity ratio = " + Similarity + "%");

// document.write("Similarity ratio = " + Similarity + "%");

function q6() {
  let myAge = prompt("Guess how old am I?");
  myAge = parseInt(myAge);
  console.log(myAge);
  // while(myAge<30){
  //     console.log(myAge);
  // }
  let m1 = 1;
  while (m1 !== 4) {
    if (myAge > 30) {
      alert("TOO HIGH");
    } else if (myAge < 30) {
      alert("TOO LOW");
    } else {
      alert("correct answer my age = 30");
      score++;

      // document.write('correct answer my age = 30 you got a point (1)');

      break;
    }
    myAge = prompt("Guess how old am I?");

    m1++;
  }

  alert("the correct answer is = 30 ");
  return;
}
q6();

function q7() {
  let arrayAnsw = ["pizza", "burger"];
  let falsy = false;

  for (let i = 0; i < 6; i++) {
    let fav = prompt("Guess my favorite meal?");
    fav = fav.toLowerCase();

    for (let j = 0; j < arrayAnsw.length; j++) {
      if (fav === arrayAnsw[j]) {
        falsy = true;

        alert("correct answer");
        score++;
        break;
      }
    }
    if (falsy === true) {
      break;
    }
  }
  alert(arrayAnsw);
  alert("your  score " + score);
  document.write("your  score" + score + " and your Similarity ratio = " + Similarity + "%");


  return;
}
q7();
