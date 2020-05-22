$$ = sel => document.querySelector(sel);

let btnPlay = $$("#btnPlay");
let btnLeave = $$("#btnLeave");
let aEl = $$("a");

const suits = ["Spades", "Hearts", "Clubs", "Diamonds"];

let ace = 1;
let jack = 11;
let queen = 12;
let king = 13;

const rank = [ace, 2, 3, 4, 5, 6, 7, 8, 9, 10, jack, queen, king];

function Player(_firstName, _lastName, _username, _phoneNumber, _city, _email, _postalCode, _bank, _bet) {
    this.firstName = _firstName;
    this.lastName = _lastName;
    this.username = _username;
    this.phoneNumber = _phoneNumber;
    this.city = _city;
    this.email = _email;
    this.postalCode = _postalCode;
    this.bank = _bank;
    this.bet = _bet;

    this.getInfo = function () {

        return `First name: ${this.firstName}
                Last name : ${this.lastName}
                Username: ${this.username}
                Phone Number: ${this.phoneNumber}
                City: ${this.city}
                E-mail: ${this.email}
                Postal Code: ${this.postalCode}
                Bank: ${this.bank}
                Bet: ${this.bet}`

    }


    this.makeBet = function (amt) {

        this.bet = amt;
    }


    this.updateBank = function (amt) {

        this.bank += amt;

    }

}

function Card(_suit, _rank) {
    this.suit = _suit;
    this.rank = _rank;

    // this.drawCard = () => `${this.rank} of ${this.suits}`;

    // this.drawCard = function()
    // {
    //     return `${this.rank} of ${this.suits}`;
    // }

}

function getBetValue()
{
    let betField = $$("#betAmt").value;
    console.log(`Bet: $${betField}`);
}


function Deck() {
    this.Cards = [];

    this.createDeck = function () {
        this.Cards = [];

        for (let i = 0; i < suits.length; i++) {
            for (let j = 0; j < rank.length; j++) {
                this.Cards[this.Cards.length] = new Card(suits[i], rank[j]);
            }
        }

        return this.Cards;
    }

    this.shuffleDeck = function () {

        for (let i = 0; i < this.Cards.length; i++) {
            let random = Math.floor((Math.random() * this.Cards.length));
            let random2 = Math.floor((Math.random() * this.Cards.length));

            let temp = this.Cards[random];

            this.Cards[random] = this.Cards[random2];
            this.Cards[random2] = temp;
        }
        return this.Cards;
    }

    this.dealCards = function () {
        let card1 = this.Cards[Math.floor(Math.random() * this.Cards.length)];
        let card2 = this.Cards[Math.floor(Math.random() * this.Cards.length)];

        if (card1.rank > card2.rank) //swap card1 with card2 when card1 higher value than card2
            {
                console.log(`before swap card1: ${card1.rank} card2: ${card2.rank}`);
                card2 = [card1, card1 = card2][0];
                console.log(`after swap card1: ${card1.rank} card2: ${card2.rank}`);
            }

        console.log(`Dealing the first card:`);
        console.log(card1);
        console.log(`Dealing the second card:`);
        console.log(card2);

        this.gameRules = function () {
            let card3 = this.Cards[Math.floor(Math.random() * this.Cards.length)];
            console.log("Dealing the third card");
            console.log(card3);


            console.log(`Value of the first card: ${card1.rank}`);
            console.log(`Value of the second card: ${card2.rank}`);
            console.log(`Value of the third card: ${card3.rank}`);


            if (card1.rank < card3.rank && card2.rank > card3.rank) {
                console.log("Player wins");
                alert("You won!");
            }
            else if ((card1.rank1 - card2.rank) === 1 || (card1.rank - card2.rank) === -1) {
                console.log("Cards re-dealt");
                alert("The first card and the second card are consecutive, dealing another two cards...");

                card1 = this.Cards[Math.floor(Math.random() * this.Cards.length)];
                card2 = this.Cards[Math.floor(Math.random() * this.Cards.length)];

                console.log(`Value of the re-dealt first card: ${card1.rank}`);
                console.log(`Value of the re-dealt second card: ${card2.rank}`);
            } 
            else if (card1.rank <= card3.rank && card2.rank >= card3.rank) {
                console.log("Player loses (1)");
                alert("You lost!");
            }
            else if (card1.rank >= card3.rank && card2.rank <= card3.rank) {
                console.log("Player loses (2)");
                alert("You lost!");
            }
            else if (card1.rank === card3.rank && card2.rank === card3.rank) {
                console.log("Player loses (3)");
                alert("You lost!");
            }

            else if (card1.rank === card2.rank)
            {
                let highOrLow = confirm("The first card and the second card are a pair, the bet will be whether the third card will be higher or lower. Select 'OK' to bet that the third card will be higher. Select 'Cancel' to bet that it will be lower.");
                if(highOrLow == true)
                {
                    if(card3.rank > card1.rank)
                    {
                        alert("You won!");
                    }
                    else
                    {
                        alert("You lost!");
                    }
                }
                else
                {
                    if(card3.rank < card1.rank)
                    {
                        alert("You won!");
                    }
                    else
                    {
                        alert("You lost!");  
                    }     
                }
            }

            else if (card1.rank > card3.rank && card2.rank > card3.rank)
            {
                console.log("Player loses (4)");
                alert("You lost!");
            }
            else if (card1.rank < card3.rank && card2.rank < card3.rank)
            {
                console.log("Player loses (5)");
                alert("You lost!");
            }
        }
    }

}


function exitGame()
{
    this.exit = confirm("Do you want to leave the current game?");
    if (this.exit === true)
    {
        alert(`Thank you for playing Ace Ventura Casino's Acey Deucey!`);
        location.href = "https://www.google.ca";
    }
}


function playGame()
{
    let myDeck = new Deck();
    myDeck.createDeck();
    myDeck.shuffleDeck();
    myDeck.dealCards();
    myDeck.gameRules();
}

function displayValues()
{
    let info1 = $$('#qInfo1');
    let info2 = $$('#qInfo2');
    let info3 = $$('#qInfo3');
    let info4 = $$('#qInfo4');
    let info5 = $$('#qInfo5');

    let firstNameVal = localStorage.firstName;
    let lastNameVal = localStorage.lastName;
    let usernameVal = localStorage.username;
    let phoneVal = localStorage.phoneNum;
    let cityVal = localStorage.city;
    let emailVal = localStorage.email;
    let bankVal = localStorage.bankRoll;
    let timeVal = localStorage.lastVisit;

    info1.innerHTML = `Welcome back, ${usernameVal} aka ${firstNameVal} ${lastNameVal} (${emailVal})`;

    info2.innerHTML = `Your phone number is: ${phoneVal} and you live in ${cityVal}`;

    info3.innerHTML = `You have ${bankVal} left in your bank roll`;
    
    info4.innerHTML = `Your last visit was ${timeVal}`;

    let currentDate = new Date();
    let month = monthNames[currentDate.getMonth()];
    let day = currentDate.getDate();
    let year = currentDate.getFullYear();
    let hour = currentDate.getHours();
    let minutes = ('0' + currentDate.getMinutes()).slice(-2);

    timeVal = `${month} ${day}, ${year} at ${hour}:${minutes}`;

    info5.innerHTML += `Not ${firstNameVal} ${lastNameVal}? `;

    aEl.addEventListener('click', changeCreds);
}


function changeCreds()
{
    localStorage.removeItem("firstName");
    localStorage.removeItem("lastName");
    localStorage.removeItem("username");
    localStorage.removeItem("phoneNum");
    localStorage.removeItem("city");
    localStorage.removeItem("email");
    localStorage.removeItem("bankRoll");
    localStorage.removeItem("lastVisit");

    location.href = "intro.html";
}

function updateTime()
{
    let newDate = new Date();
    let month = monthNames[newDate.getMonth()];
    let day = newDate.getDate();
    let year = newDate.getFullYear();
    let hour = newDate.getHours();
    let minutes = ('0' + newDate.getMinutes()).slice(-2);  

    localStorage.lastVisit = `${month} ${day}, ${year} at ${hour}:${minutes}`;
}

window.addEventListener('load', displayValues);
window.addEventListener('load', updateTime);

btnPlay.addEventListener('click', getBetValue);
btnPlay.addEventListener('click', playGame);
btnLeave.addEventListener('click', exitGame);