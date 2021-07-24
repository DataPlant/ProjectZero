///////////Textbox
const textBox = document.querySelector('#text');
const petName = document.querySelector('#petName')
const changeName = document.querySelector('#name')
const userButton = document.querySelector('#nameRef')
///////////Images
const image = document.querySelector('#image')
///////////Bars
const hungerBar = document.querySelector('#test1')
const sleepBar = document.querySelector('#test2')
const boredomBar = document.querySelector('#test3')
const sanityBar = document.querySelector('#test4')
///////////Query Selection for display statistics on page about the pet.
const countEl = document.querySelector('#counter');
const hungerCt = document.querySelector('#hunger');
const sleepCt = document.querySelector('#sleep');
const boredomCt = document.querySelector('#boredom');
const sanityCt = document.querySelector('#sanity');
///////////Query Selection for buttons.
const feedStat = document.querySelector('#feedStat')
const portalStat = document.querySelector('#portalStat')
const sleepStat = document.querySelector('#sleepStat')
const boredomStat = document.querySelector('#boredomStat')
const treatButton = document.querySelector('#treatButton')
///////////Setting Stuff
const foodSupply = document.querySelector('#supply')
const sanityRate = document.querySelector('#sanityRate')
const treatSupply = document.querySelector('#treats')
///////////Setting variables used as counters
let count = 0;
let interval = null;
let mod = [0, 0, 0, 0];
let base = [99, 99, 99, 99]
let stress = 0;
let supply = 0;
let treats = 0;
///////////Setting intervals for calling functions.
let dHungerV = setInterval(dHunger, 5000)
let dSleepV = setInterval(dSleep, 8000)
let dBoredomV = setInterval(dBoredom, 5000)
let dSanityV = setInterval(dSanity, 8000)
let rateV = setInterval(rate, 1000)
//said functions defined for the intervals.
function dHunger(){
    mod[0] = mod[0] + 6;
    if(mod[0] >= 99){
        clearInterval(dHungerV);
        clearInterval(dSleepV);
        clearInterval(dBoredomV);
        clearInterval(dSanityV);
        clearInterval(rateV)
        image.src = 'https://www.novaragnarok.com/forum/uploads/monthly_2018_03/Poring.gif.2977b0a8bc4311870e139a93da5a0d20.gif'
        textBox.textContent = "Game Over!"
    }
    hungerBar.value = base[0] - mod[0];
    hungerCt.textContent = base[0] - mod[0];
}
function dSleep(){
    mod[1] = mod[1] + 4;
    if(mod[1] >= 99){
        clearInterval(dHungerV);
        clearInterval(dSleepV);
        clearInterval(dBoredomV);
        clearInterval(dSanityV);
        clearInterval(rateV)
        image.src = 'https://www.novaragnarok.com/forum/uploads/monthly_2018_03/Poring.gif.2977b0a8bc4311870e139a93da5a0d20.gif'
        textBox.textContent = "Game Over!"
    }
    sleepBar.value = base[1] - mod[1];
    sleepCt.textContent = base[1] - mod[1];
}
function dBoredom(){
    mod[2]++;
    if(mod[2] >= 99){
        mod[2] = 99;
        mod[3] = mod[3] + 20;
        textBox.textContent = "Your pet is neglected. +20 rate"
    }
    boredomBar.value = base[2] - mod[2];
    boredomCt.textContent = base[2] - mod[2];
}
function dSanity(){
    if(mod[1] >= 60){
        stress++;
    }else if(mod[1] < 60){
        stress = 0;
    }
    base[3] = base[3] - mod[3] - stress;
    if(base[3] === 0){
        clearInterval(dHungerV);
        clearInterval(dSleepV);
        clearInterval(dBoredomV);
        clearInterval(dSanityV);
        clearInterval(rateV)
        image.src = 'https://www.novaragnarok.com/forum/uploads/monthly_2018_03/Poring.gif.2977b0a8bc4311870e139a93da5a0d20.gif'
        textBox.textContent = "Your pet went insane. Game Over!"
    }
    sanityBar.value = base[3];
    sanityCt.textContent = base[3];
}
function rate(){
    let temp = mod[3] + stress;
    sanityRate.textContent = 'Sanity Rate: ' + temp;
}

//Said functions defined for the event listeners.
function nameChange(){
    let newName = changeName.value;
    petName.textContent = newName;
}
function feedAct(){
    if(supply > 0){
        supply--;
        mod[0] = mod[0] - 15;
        foodSupply.textContent = "Food Supplies: " + supply;
    }else if(supply === 0){
        textBox.textContent = "You have no food, dumdum."
    }
    hungerBar.value = base[0] - mod[0];
    hungerCt.textContent = base[0] - mod[0];
}
function sleepAct(){
    mod[1] = 0;
    hungerBar.value = base[1] - mod[1];
    sleepCt.textContent = base[1] - mod[1];
}
function boredomAct(){
    mod[2] = mod[2] - 2;
    hungerBar.value = base[2] - mod[2];
    boredomCt.textContent = base[2] - mod[2];
}
function portalAct(){
    let randNum = Math.floor(Math.random()*10)
    if(randNum < 2){
        mod[3] = mod[3] + 1;
        textBox.textContent = "You have been cursed, sanity loss rate +" + mod[3];
    }else if(randNum >= 2 && randNum < 3){
        mod[3] = 0;
        textBox.textContent = "You have been cured of all curses.";
    }else if(randNum >= 3 && randNum < 6){
        supply = supply + Math.floor(Math.random()*3) + 1;
        foodSupply.textContent = "Food Supplies: " + supply;
        textBox.textContent = "You found some food supplies.";
    }else if(randNum ===6){
        treats = treats + 1;
        treatSupply.textContent = "Sanity Treats: " + treats;
        textBox.textContent = "You found some sanity treats.";
    }else{
        textBox.textContent = "You found nothing.";
    }
        sanityCt.textContent = base[3];
}
function treatAct(){
    --treats;
    treatSupply.textContent = "Sanity Treats: " + treats;
    base[3] = base[3] + 15;
    sanityBar.value = base[3];
    sanityCt.textContent = base[3];
}
///////////Button event listeners.
feedStat.addEventListener('click', feedAct);
portalStat.addEventListener('click', portalAct);
sleepStat.addEventListener('click', sleepAct);
boredomStat.addEventListener('click', boredomAct);
userButton.addEventListener('click', nameChange)
treatButton.addEventListener('click', treatAct)
///////////Age of creature setup
let age = 0;
function ager(){
    interval = setInterval(function() {
        count++;
        // display the new count on the page
        if(count >= 100){
            count = 0;
            age++;
            countEl.textContent = 'Age: ' + age;
        }
      }, 1000);
}
ager();
////////////
