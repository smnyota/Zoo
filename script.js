console.log("script running!");

const button1 = document.querySelector("#button1");
// the # specifies that button1 is an id. Essentially looking for the corresponding id from the html
const button2 = document.querySelector("#button2");
const button3 = document.querySelector("#button3");
const status2 = document.querySelector("#status2");
const status3 = document.querySelector("#status3");
const status4 = document.querySelector("#button4");
const status5 = document.querySelector("#status5");
const button5 = document.querySelector("#button5"); // You are missing the "#" in the query here
//Thank you so much. I can't believe I missed that. It's working well now.
const zoo = document.querySelector(".container");
const button_container = document.querySelector("#button-container1");
console.log(zoo);






button1.addEventListener("click" , e => {
// The "e" just shows a shortened version of a function. Will go into it more in later lessons
  console.log("button 1 clicked");
  alert("Mooooo!");
})

button2.addEventListener("click", e => {
  console.log("button 2 clicked");
  status2.innerHTML = "Thanks for playing with Harry! He looks really happy!"
})

//George the Groundhog
let = num_carrots = 2;


button3.addEventListener("click", e => {
  console.log("button 3 clicked");
   num_carrots = num_carrots +1;
    if (num_carrots > 10) {
      alert ("Too many carrots!");
    }
  console.log(num_carrots);
  status3.innerHTML = "George has had " + num_carrots + " carrots today.";

})


button4.addEventListener("click", (e) => {
  console.log("button 4 pressed!");
  zoo.innerHTML = `<h1 class="title">Due to some dangerous rulebreaking, the petting zoo is temporarily closed</h1>`;
});



function disableButton() {
  button3.disabled = true;
}


let corn = 2;

button5.addEventListener("click", e => {
  console.log("button 5 clicked");
  corn = corn + 1;
    if (corn > 10) {
      alert ("Too much corn!");
    }
  console.log(corn);
  status5.innerHTML = "Buddy has had " + corn + " pieces of corn today.";
  
})