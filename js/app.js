const slotSymbols = document.querySelectorAll('.slot-symbols-content h2');
const scoreNumber = document.querySelector('.score-number');
const body = document.querySelector('body');
var score = 0;
function rollImages(){
    let slotInnerContent = document.querySelectorAll('.slot-symbols-content');

    let random = Math.floor(Math.random(5) * 5);
    console.log(random);

    let random1 = Math.floor(Math.random(5) * 5);
    console.log(random1);

    let random2 = Math.floor(Math.random(5) * 5);
    console.log(random2);

    let randomRgb = Math.floor(Math.random(256) * 256);
    let randomRgb2 = Math.floor(Math.random(256) * 256);
    let randomRgb3 = Math.floor(Math.random(256) * 256);

    slotInnerContent[0].innerHTML = `<h2>${slotSymbols[random].textContent}</h2>`;

    slotInnerContent[1].innerHTML = `<h2>${slotSymbols[random1].textContent}</h2>`;

    slotInnerContent[2].innerHTML = `<h2>${slotSymbols[random2].textContent}</h2>`;

    if(random === 0 && random1 === 0 && random2 === 0){
        score = score + 6;
        scoreNumber.textContent = score;
        alert('Jackpot!!!!');
    } else if(random === 1 && random1 === 1 && random2 === 1){
        score = score + 3;
        scoreNumber.textContent = score;
        body.style.backgroundColor = `rgb(${randomRgb}, ${randomRgb2}, ${randomRgb3} )`;
        alert('Jackpot!!!')
    }

    else if(random === 2 && random1 === 2 && random2 === 2){
        score = score + 9;
        scoreNumber.textContent = score;
        body.style.backgroundColor = `rgb(${randomRgb}, ${randomRgb2}, ${randomRgb3} )`;
        alert('Jackpot!!!')
    }

    else if(random === 3 && random1 === 3 && random2 === 3){
        score = score + 9;
        scoreNumber.textContent = score;
        body.style.backgroundColor = `rgb(${randomRgb}, ${randomRgb2}, ${randomRgb3} )`;
        alert('Jackpot!!!')
    }

    else if(random === 4 && random1 === 4 && random2 === 4){
        score = score + 15;
        scoreNumber.textContent = score;
        body.style.backgroundColor = `rgb(${randomRgb}, ${randomRgb2}, ${randomRgb3} )`;
        alert('Jackpot!!!')
    }
};