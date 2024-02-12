import './style.css';
const btnYes = document.getElementById("btn1");
const btnNo = document.getElementById("btn2");
const allBoxes = document.querySelectorAll(".box");
const finalButton = document.querySelector(".finalButton");
const gifYay = document.querySelector(".boxAfterYes");
let noCount = 0;


btnYes.onclick = function() {
    allBoxes.forEach(box => {box.style.display = "none"});
    gifYay.style.display = "flex";
}

btnNo.onclick = function () {
    noCount++;
        if(noCount === 1){
            btnYes.textContent = "Wait, What Bebe?";
        }
        if(noCount === 2){
            btnYes.textContent = "No Bebe, Please";
            btnYes.style.fontSize = "1.2rem";
            btnYes.style.height = "3rem";
            btnYes.style.width = "10rem";
        }
        if(noCount === 3){
            btnYes.textContent = "LOVE ME BEBE";
            btnYes.style.fontSize = "1.6rem";
            btnYes.style.height = "5rem";
            btnYes.style.width = "13rem";
        }
        if(noCount === 4){
            btnYes.textContent = "YOU'RE SUPPOSED TO BE MY VALENTINE";
            btnYes.style.fontSize = "1.7rem";
            btnYes.style.height = "8rem";
            btnYes.style.width = "16rem";
        }
        if(noCount === 5){
            btnYes.textContent = "IS THERE ANOTHER BOY!?";
            btnYes.style.fontSize = "2.3rem";
            btnYes.style.height = "12rem";
            btnYes.style.width = "20rem";
        }
        if(noCount === 6){
            btnYes.textContent = "WHY ARE YOU STILL CLICK NO?";
            btnYes.style.fontSize = "2.5rem";
            btnYes.style.height = "16rem";
            btnYes.style.width = "24rem";
        }
        if(noCount === 7){
            btnYes.textContent = "I THOUGHT YOU WOULD CLICK YES BY NOW";
            btnYes.style.fontSize = "2.8rem";
            btnYes.style.height = "18rem";
            btnYes.style.width = "26rem";
        }
        if(noCount === 8){
            btnYes.textContent = "HOW MUCH BIGGER DO I HAVE TO MAKE THIS BUTTON!?";
            btnYes.style.fontSize = "4rem";
            btnYes.style.height = "24rem";
            btnYes.style.width = "34rem";
        }
        if(noCount === 9){
            btnYes.textContent = "Baby I Loves You So Much I Want To Spend The Rest Of My Life With You, You Make Me So Incredibly Happy Will You Please Let Me Be Your Valentine?";
            btnYes.style.fontSize = "2.8rem";
            btnYes.style.height = "28rem";
            btnYes.style.width = "48rem";
        }
        if(noCount === 10){
            btnYes.textContent = "STILL NO!?!?!? OH GIRL THIS BUTTON IS GOING TO GET HUGE";
            btnYes.style.fontSize = "5rem";
            btnYes.style.height = "38rem";
            btnYes.style.width = "56rem";
        }if(noCount === 11){
            btnYes.textContent = "BEBE I LOVES YOU PLEASE";
            btnYes.style.fontSize = "10rem";
            btnYes.style.height = "48rem";
            btnYes.style.width = "60rem";
        }
        if(noCount === 12){
            btnYes.textContent = "Fine, I Will Do What I Must";
            btnYes.style.fontSize = "1.7rem";
            btnYes.style.height = "8rem";
            btnYes.style.width = "16rem";
        }
        if(noCount === 13){
            btnYes.style.display = "none";
            btnNo.style.display = "none";
            finalButton.style.display = "inline-flex";
                finalButton.onclick = function() {
                    allBoxes.forEach(box => {box.style.display = "none"});
                    gifYay.style.display = "flex";
                }
        }
    
}
