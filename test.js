//place holder array for 30 dr. seuss quotes

const drSeussQuotes = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12', '13', '14', '15', '16', '17', '18', '19', '20', '21', '22', '23', '24', '25', '26', '27', '28', '29', '30', ]

//place holder array for 30 other quotes

const badQuotes = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12', '13', '14', '15', '16', '17', '18', '19', '20', '21', '22', '23', '24', '25', '26', '27', '28', '29', '30', ]


function randomQuote(arr){
    let randomIndex = Math.floor(Math.random()*arr.length);
    let randomString = arr[randomIndex];
        return randomString;
    
}

randomQuote([drSeussQuotes]);
randomQuote([badQuotes]);


console.log(`A random Dr. Seuss quote is ${randomQuote(drSeussQuotes)} and a random bad quote is ${randomQuote(badQuotes)}.`)