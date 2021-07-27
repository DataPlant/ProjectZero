///////////Setting intervals for calling function.
// let dHungerV = null
// let dSleepV = null
// let dBoredomV = null
// let dSanityV = null
// let rateV = null
///////////Class Setup
class Creature {
    constructor(name, stat, mod, stress, supply, treats){
        this.name = name;
        this.stat = stat;
        this.mod = mod;
        this.stress = stress;
        this.supply = supply;
        this.treats = treats;
    }
    intervalSet(){
        this.dHungerV = setInterval(this.dHunger, 5000)
        this.dSleepV = setInterval(this.dSleep, 8000)
        this.dBoredomV = setInterval(this.dBoredom, 5000)
        this.dSanityV = setInterval(this.dSanity, 8000)
        this.rateV = setInterval(this.rate, 1000)
    }
    dHunger(){
        pet.mod[0] = pet.mod[0] + 6;
        if(pet.mod[0] >= 99){
            clearInterval(pet.dHungerV);
            clearInterval(pet.dSleepV);
            clearInterval(pet.dBoredomV);
            clearInterval(pet.dSanityV);
            clearInterval(pet.rateV)
            image.src = 'https://www.novaragnarok.com/forum/uploads/monthly_2018_03/Poring.gif.2977b0a8bc4311870e139a93da5a0d20.gif';
            image.width = '300';
            textBox.textContent = "Game Over!"
        }
        hungerBar.value = pet.stat[0] - pet.mod[0];
        hungerCt.textContent = pet.stat[0] - pet.mod[0];
    }
    dSleep(){
        pet.mod[1] = pet.mod[1] + 4;
        if(pet.mod[1] >= 99){
            clearInterval(pet.dHungerV);
            clearInterval(pet.dSleepV);
            clearInterval(pet.dBoredomV);
            clearInterval(pet.dSanityV);
            clearInterval(pet.rateV)
            image.src = 'https://www.novaragnarok.com/forum/uploads/monthly_2018_03/Poring.gif.2977b0a8bc4311870e139a93da5a0d20.gif'
            textBox.textContent = "Game Over!"
        }
        sleepBar.value = pet.stat[1] - pet.mod[1];
        sleepCt.textContent = pet.stat[1] - pet.mod[1];
    }
    dBoredom(){
        pet.mod[2]++;
        if(pet.mod[2] >= 99){
            pet.mod[2] = 99;
            pet.mod[3] = pet.mod[3] + 20;
            textBox.textContent = "Your pet is neglected. +20 rate"
        }
        boredomBar.value = pet.stat[2] - pet.mod[2];
        boredomCt.textContent = pet.stat[2] - pet.mod[2];
    }
    dSanity(){
        if(pet.mod[1] >= 60){
            pet.stress++;
        }else if(pet.mod[1] < 60){
            pet.stress = 0;
        }
        pet.stat[3] = pet.stat[3] - pet.mod[3] - pet.stress;
        if(pet.stat[3] === 0){
            clearInterval(pet.dHungerV);
            clearInterval(pet.dSleepV);
            clearInterval(pet.dBoredomV);
            clearInterval(pet.dSanityV);
            clearInterval(pet.rateV)
            image.src = 'https://www.novaragnarok.com/forum/uploads/monthly_2018_03/Poring.gif.2977b0a8bc4311870e139a93da5a0d20.gif'
            textBox.textContent = "Your pet went insane. Game Over!"
        }
        sanityBar.value = pet.stat[3];
        sanityCt.textContent = pet.stat[3];
    }
    rate(){
        let temp = pet.mod[3] + pet.stress;
        sanityRate.textContent = 'Sanity Rate: ' + temp;
    }
    ////NameChange
    nameChange(){
        petName.textContent = changeName.value;
    }
    ///////////Adding event functions
    feedAct(){
        if(pet.supply > 0){
            pet.supply--;
            pet.mod[0] = pet.mod[0] - 15;
            foodSupply.textContent = "Food Supplies: " + pet.supply;
        }else if(pet.supply === 0){
            textBox.textContent = "You have no food, dumdum."
        }
        hungerBar.value = pet.stat[0] - pet.mod[0];
        hungerCt.textContent = pet.stat[0] - pet.mod[0];
    }
    sleepAct(){
        pet.mod[1] = 0;
        sleepBar.value = pet.stat[1] - pet.mod[1];
        sleepCt.textContent = pet.stat[1] - pet.mod[1];
    }
    boredomAct(){
        pet.mod[2] = pet.mod[2] - 2;
        hungerBar.value = pet.stat[2] - pet.mod[2];
        boredomCt.textContent = pet.stat[2] - pet.mod[2];
    }
    portalAct(){
        let randNum = Math.floor(Math.random()*10)
        if(randNum < 2){
            pet.mod[3] = pet.mod[3] + 1;
            textBox.textContent = "You have been cursed, sanity loss rate +" + pet.mod[3];
        }else if(randNum >= 2 && randNum < 3){
            pet.mod[3] = 0;
            textBox.textContent = "You have been cured of all curses.";
        }else if(randNum >= 3 && randNum < 6){
            pet.supply = pet.supply + Math.floor(Math.random()*3) + 1;
            foodSupply.textContent = "Food Supplies: " + pet.supply;
            textBox.textContent = "You found some food supplies.";
        }else if(randNum ===6){
            pet.treats = pet.treats + 1;
            treatSupply.textContent = "Sanity Treats: " + pet.treats;
            textBox.textContent = "You found some sanity treats.";
        }else{
            textBox.textContent = "You found nothing.";
        }
            sanityCt.textContent = pet.stat[3];
    }
    treatAct(){
        --pet.treats;
        treatSupply.textContent = "Sanity Treats: " + pet.treats;
        pet.stat[3] = pet.stat[3] + 15;
        sanityBar.value = pet.stat[3];
        sanityCt.textContent = pet.stat[3];
    }
    ///////////Button event listeners.
    addingListeners(){
        feedStat.addEventListener('click', pet.feedAct);
        portalStat.addEventListener('click', pet.portalAct);
        sleepStat.addEventListener('click', pet.sleepAct);
        boredomStat.addEventListener('click', pet.boredomAct);
        userButton.addEventListener('click', pet.nameChange)
        treatButton.addEventListener('click', pet.treatAct)
    }
}
///////////Functions defined for Pet choice event listeners.
let pet = {};
function type1f(){
    image.src = 'https://tataromhome.files.wordpress.com/2018/11/ro-poring.gif?w=200';
    pet = new Creature('Poring', [99,99,99,99], [0,0,0,0], 0, 0, 0);
    petName.textContent = pet.name;
    pet.intervalSet();
    pet.addingListeners();
}
function type2f(){
    image.src = 'https://lh5.googleusercontent.com/-aYBsxblX1cI/VArWJHoic-I/AAAAAAAAABU/wBtt8zUALP8/s0-U-I/king_deviling.gif'
    pet = new Creature('King Poring', [150,99,99,50], [0,0,0,0], 0, 0, 0);
    petName.textContent = pet.name;
    pet.intervalSet();
    pet.addingListeners();
}
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
///////////Query Selection for Pet Choice
const type1 = document.querySelector('#type1')
const type2 = document.querySelector('#type2')
const type3 = document.querySelector('#type3')
const type4 = document.querySelector('#type4')
///////////Pet Choice event listeners
type1.addEventListener('click', type1f)
type2.addEventListener('click', type2f)
// type3.addEventListener('click',)
// type4.addEventListener('click',)
///////////Setting Stuff
const foodSupply = document.querySelector('#supply')
const sanityRate = document.querySelector('#sanityRate')
const treatSupply = document.querySelector('#treats')
///////////Setting variables used as counters
let count = 0;
///////////Age of creature setup
let age = 0;
let interval = null;
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

