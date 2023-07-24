//Example:
// const gifts = ["teddy bear", "drone", "doll"];

// function wrapGifts(gifts){
//     for (let i = 0; i < gifts.length; i++){
//         console.log(`Wrapped ${gifts[i]} and added a bow!`);
//         debugger;
//     };
//     return gifts;
// };
// wrapGifts(gifts);


//1st Assignment:
const messages = [];

function writeCards (people) {
    for (let i = 0; i < people.length; i++){
        messages.push(`Thank you, ${people[i]}, for the wonderful surprise gift!`);
    };
    return messages;
};

//2nd Assignment:
function countDown(number){
    while (number > -1) {
        console.log(number);
        number--;
    };
};