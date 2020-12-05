const slotSymbols = document.querySelectorAll('.slot-symbols-content h2');


function rollImages(){
    let slotInnerContent = document.querySelectorAll('.slot-symbols-content');
    let random = Math.floor(Math.random(4) * 5);
    console.log(slotSymbols[random]);

    let random1 = Math.floor(Math.random(4) * 5);
    console.log(slotSymbols[random]);

    let random2 = Math.floor(Math.random(4) * 5);
    console.log(slotSymbols[random]);

    slotInnerContent[0].innerHTML = `<h2>${slotSymbols[random].textContent}</h2>`;

    slotInnerContent[1].innerHTML = `<h2>${slotSymbols[random1].textContent}</h2>`;

    slotInnerContent[2].innerHTML = `<h2>${slotSymbols[random2].textContent}</h2>`;

}