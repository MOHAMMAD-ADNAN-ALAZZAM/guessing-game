'use strict';
// let alert massig with the user inbot 
let userName = prompt('Your Name ?');
console.log(userName);
alert('wellcome '+ userName);

// yes or no (Q)

let q1 = prompt('Do you like physics?');
console.log(q1);
//use .tolowerCse() method
if(q1.toLowerCase() === 'yes' || q1.toLowerCase() === 'y'){
    alert('You are look like me');
}else if(q1.toLowerCase() ==='no'|| q1.toLowerCase() === 'n'){
alert('You are not like me');
}else{
    alert('Nice to meet you ' + userName);
}


let q2= prompt('Do you like sports ?');
console.log(q2);
if(q2.toLowerCase() === 'yes' || q2.toLowerCase() === 'y'){
    alert('You are look like me');
}else if(q2.toLowerCase() ==='no'|| q2.toLowerCase() === 'n'){
alert('You are not like me');
}else{
    alert('Nice to meet you ' + userName);
}


 let q3 = prompt('Do you like fighting games?');
 console.log(q3);
 if(q3.toLowerCase() === 'yes' || q3.toLowerCase() === 'y'){
     alert('You are look like me');
 }else if(q3.toLowerCase() ==='no'|| q3.toLowerCase() === 'n'){
 alert('You are not like me');
 }else{
     alert('Nice to meet you ' + userName);
 }

 let q4 = prompt('do you like drawing ?');
 console.log(q4);
if(q4.toLowerCase() === 'yes' || q4.toLowerCase() === 'y'){
    alert('You are look like me');
}else if(q4.toLowerCase() ==='no'|| q4.toLowerCase() === 'n'){
alert('You are not like me');
}else{
    alert('Nice to meet you ' + userName);
}

let q5 = prompt('Do you want to be a programmer?');
console.log(q5);
if(q5.toLowerCase() === 'yes' || q5.toLowerCase() === 'y'){
    alert('You are look like me');
}else if(q5.toLowerCase() ==='no'|| q5.toLowerCase() === 'n'){
alert('You are not like me');
}else{
    alert('Nice to meet you ' + userName);
}

let myAge = prompt('Guess how old am I?');
myAge =parseInt(myAge);
console.log(myAge);
// while(myAge<30){
//     console.log(myAge);
// }
let m1 = 1;
while(m1!==4){
   
        if(myAge>30){

            alert('TOO HIGH');
           
        }else if(myAge<30){

            alert('TOO LOW');
        }else{
            
            
            alert('correct answer my age = 30');
            
            document.write('correct answer my age = 30 you got a point (1)');

             break;
        }
       myAge = prompt('Guess how old am I?');

       m1++;
       
    
    }
    
    alert('the correct answer is = 30');


    
    let arr =['Pizza','Burger'];
    let fav = false;

    for (let i = 0; i <6 ; i++){
        let fav =prompt('Guess my favorite meal?');
        for (let j = 0; j < arr.length; j++) {
            if (fav.tolowerCase() === arr[j]){
                fav = true;
                alert('correct answer');
                
                break;
                
            }
           
            
        }
        if (fav === true){
            break;
        }

          fav=prompt('wrong answer! try again ?');  
    }

    document.write(arr);
   
    













