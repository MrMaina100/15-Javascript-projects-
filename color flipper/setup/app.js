const colors = ["green", "red", "rgba(133,122,200)", "#f15025", 'yellow','indigo', 'teal'];

const btn = document.getElementById('btn');
const color = document.querySelector('.color');

btn.addEventListener('click', function(){
    //get random number between 0-3
   const justNumber = getRandomNumber();
   document.body.style.backgroundColor = colors[justNumber];
   color.textContent= colors[justNumber];
})


//how to get a random number

function getRandomNumber(){
    return Math.floor(Math.random() *colors.length);
}
