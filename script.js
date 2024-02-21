const question1 = document.getElementById("q1");
const answer1 = document.getElementById("a1");
const img1 = document.getElementById("img1");
const question2 = document.getElementById("q2");
const answer2 = document.getElementById("a2");
const img2 = document.getElementById("img2");
const question3 = document.getElementById("q3");
const answer3 = document.getElementById("a3");
const img3 = document.getElementById("img3");
const question4 = document.getElementById("q4");
const answer4 = document.getElementById("a4");
const img4 = document.getElementById("img4");
const question5 = document.getElementById("q5");
const answer5 = document.getElementById("a5");
const img5 = document.getElementById("img5");
const question6 = document.getElementById("q6");
const answer6 = document.getElementById("a6");
const img6 = document.getElementById("img6");

question1.addEventListener('click', () => {
    if(answer1.classList.contains("toggle1")){
        answer1.classList.toggle("toggle"); 
        img1.classList.toggle("rotateAgain");      
    } else{
        answer1.classList.toggle("toggle1");
        img1.classList.toggle("rotate");
    }   
})

question2.addEventListener('click', () => {
    if(answer2.classList.contains("toggle1")){
        answer2.classList.toggle("toggle"); 
        img2.classList.toggle("rotateAgain");      
    } else{
        answer2.classList.toggle("toggle1");
        img2.classList.toggle("rotate");
    }   
})

question3.addEventListener('click', () => {
    if(answer3.classList.contains("toggle1")){
        answer3.classList.toggle("toggle"); 
        img3.classList.toggle("rotateAgain");      
    } else{
        answer3.classList.toggle("toggle1");
        img3.classList.toggle("rotate");
    }   
})

question4.addEventListener('click', () => {
    if(answer4.classList.contains("toggle1")){
        answer4.classList.toggle("toggle"); 
        img4.classList.toggle("rotateAgain");      
    } else{
        answer4.classList.toggle("toggle1");
        img4.classList.toggle("rotate");
    }   
})

question5.addEventListener('click', () => {
    if(answer5.classList.contains("toggle1")){
        answer5.classList.toggle("toggle"); 
        img5.classList.toggle("rotateAgain");      
    } else{
        answer5.classList.toggle("toggle1");
        img5.classList.toggle("rotate");
    }   
})

question6.addEventListener('click', () => {
    if(answer6.classList.contains("toggle1")){
        answer6.classList.toggle("toggle"); 
        img6.classList.toggle("rotateAgain");      
    } else{
        answer6.classList.toggle("toggle1");
        img6.classList.toggle("rotate");
    }   
})

