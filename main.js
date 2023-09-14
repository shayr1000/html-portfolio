



/* btnP, btnM, btnZ go to the html and search the (#plus, #minus, #zero => ID's buttons and put inside the strings ) also count get the 0 number, and paragraph get p    => the p tag <p>  */ 
let btnP = document.querySelector('#plus');
let btnM = document.querySelector('#minus');
let btnZ = document.querySelector('#zero');
let count = 0;
let paragraph = document.querySelector('p');

/* pluse - incriment (to add more), text that i choose, to anderstand what will the function will do. 
count is the text that will get in to him the calculation, than in the <p> at the HTML,   */
function increment() {
  count += 1; //add number

  paragraph.innerHTML="This is the counter number: "+count
};
// get call the function to run, and add number if the user click on the '+' icon 
btnP.onclick = increment; 

// minus
function decrement(url) {
  count -= 1;  //minus number

  paragraph.innerHTML="This is the counter number: "+count
  
};
btnM.onclick = decrement;

// zero - function called zero get count 0 and in the <p> in the HTML text + get in to  the count string the new number here Clear to 0 
function zero() {
  count = 0;  //clear number

  paragraph.innerHTML="This is the counter number: "+count
  
};
btnZ.onclick = zero; // if you click on the button it will zeroed the number of counting




/*
var button = document.querySelector('button'),
  count = 0;

button.onclick = function() {
  count += 1;
  button.innerHTML = "p" + count;
};

*/



// var btn = document.querySelector('button'),
// count = 0;

// var paragraph = document.querySelector('p');


// function increment() {
//   count += 1;
//   alert(paragraph.innerHTML)
  
// };


// btn.onclick = increment; 