var numberOfAdvice = document.getElementById("textAdviceID");
var textOfAdvice = document.getElementById("textAdvicetext");

var bouton = document.getElementById("bouton");
fetch("https://api.adviceslip.com/advice")
.then(res => res.json())
.then(data => {
    numberOfAdvice.innerHTML =" Advice # " + data.slip.id 
     textOfAdvice.innerHTML = data.slip.advice;
});

bouton.addEventListener('click', function() {        
    fetch("https://api.adviceslip.com/advice")
    .then(res => res.json())
    .then(data => {
        numberOfAdvice.innerHTML =" Advice # " + data.slip.id 
         textOfAdvice.innerHTML = data.slip.advice;
    });       
});