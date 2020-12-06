const slotSymbols = document.querySelectorAll('.slot-symbols-content h2');
const scoreNumber = document.querySelector('.score-number');
var score = 0;
function rollImages(){
    let slotInnerContent = document.querySelectorAll('.slot-symbols-content');

    let random = Math.floor(Math.random(4) * 4);
    console.log(random);

    let random1 = Math.floor(Math.random(4) * 4);
    console.log(random1);

    let random2 = Math.floor(Math.random(4) * 4);
    console.log(random2);

    slotInnerContent[0].innerHTML = `<h2>${slotSymbols[random].textContent}</h2>`;

    slotInnerContent[1].innerHTML = `<h2>${slotSymbols[random1].textContent}</h2>`;

    slotInnerContent[2].innerHTML = `<h2>${slotSymbols[random2].textContent}</h2>`;

    if(random === 0 && random1 === 0 && random2 === 0){
        score = score + 6;
        scoreNumber.textContent = score;
        alert('Jackpot!!!!');
    } else if(random === 1 && random1 == 1 && random2 === 1){
        score = score + 3;
        scoreNumber.textContent = score;
        alert('Jackpot!!!')
    }
};