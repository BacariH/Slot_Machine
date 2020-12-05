const slotSymbols = document.querySelectorAll('.slot-symbols-content h2');
const scoreNumber = document.querySelector('.score-number');

function rollImages(){
    let slotInnerContent = document.querySelectorAll('.slot-symbols-content');

    let random = Math.floor(Math.random(5) * 5);
    console.log(slotSymbols[random]);

    let random1 = Math.floor(Math.random(5) * 5);
    console.log(slotSymbols[random1]);

    let random2 = Math.floor(Math.random(5) * 5);
    console.log(slotSymbols[random2]);

    slotInnerContent[0].innerHTML = `<h2>${slotSymbols[random].textContent}</h2>`;

    slotInnerContent[1].innerHTML = `<h2>${slotSymbols[random1].textContent}</h2>`;

    slotInnerContent[2].innerHTML = `<h2>${slotSymbols[random2].textContent}</h2>`;

};