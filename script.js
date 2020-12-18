let pogingen = 5;
let minimum = 0;
let maximum = 25;

let naam = prompt('Welkom! Wat is je naam?');
if(!naam) {
    naam = 'Gast';
}

alert('Welkom bij Guess The Number, ' + naam + '.');

let inputMinimum = prompt('Wat wordt het laagste nummer? Default: 0');
if(inputMinimum) {
    minimum = parseInt(inputMinimum);
}

let inputMaximum = prompt('Wat wordt het hoogste nummer? Default: 25');
if(inputMaximum) {
    maximum = parseInt(inputMaximum);
}

let inputPogingen = prompt('Hoeveel pogingen krijg je? Default: 5');
if(inputPogingen) {
    pogingen = parseInt(inputPogingen);
}

const getRandomDigit = function(minimum, maximum) {
    let min = Math.ceil(minimum);
    let max = Math.floor(maximum);
    return Math.floor(Math.random() * (max - min) + min);
};

const computerCijfer = getRandomDigit(minimum, maximum);

while(pogingen > 0) {
    let cijfer = prompt('Kies een cijfer tussen de ' + minimum + ' en ' + maximum + '.');
    cijfer = parseInt(cijfer);

    if(cijfer === computerCijfer) {
        alert('Je hebt hetzelfde geraden! Gefeliciteerd!');
        pogingen = 0;

    } else {
        alert('Helaas, je hebt verkeerd gegokt.');
        pogingen--;
        if(pogingen > 0) {
            alert('Je hebt nog ' + pogingen + ' pogingen over.');
        } else {
            alert('Je hebt geen pogingen meer over en dus verloren. Het juiste cijfer was ' + computerCijfer + '.');
        }
    }
}

alert('Dag ' + naam + '! Tot de volgende keer!');