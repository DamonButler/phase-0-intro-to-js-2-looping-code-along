const names = ["Charlie", "Samip", "Ali"]

function writeCards(names, event) {
    let thankYouCards = []

   for(let i = 0; i < names.length; i++) {
    thankYouCards.push(`Thank you, ${names[i]}, for the wonderful ${event} gift!`)
}
return thankYouCards;
}

function countDown(down) {

    while(down >= 0){ 
        console.log(down); down--
    }
    return down
}
