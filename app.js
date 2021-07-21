///////////Textbox
const textBox = document.querySelector('#text');
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
///////////Setting Stuff
///////////Setting variables used as counters
let count = 0;
let interval = null;
let mod = [0, 0, 0, 0];
let base = [100, 100, 100, 100]
let stress = 0;
///////////Setting intervals for calling functions.
setInterval(dHunger, 5000)
setInterval(dSleep, 8000)
setInterval(dBoredom, 5000)
setInterval(dSanity, 8000)
//said functions defined for the intervals.
function dHunger(){
    mod[0] = mod[0] + 4;
    hungerCt.textContent = 'Hunger: ' + (base[0] - mod[0]);
}
function dSleep(){
    mod[1] = mod[1] + 6;
    sleepCt.textContent = 'Sleep: ' + (base[1] - mod[1]);
}
function dBoredom(){
    mod[2]++;
    boredomCt.textContent = 'Boredom: ' + (base[2] - mod[2]);
}
function dSanity(){
    if(mod[1] >= 40){
        stress++;
    }
    base[3] = base[3] - mod[3] - stress;
    sanityCt.textContent = 'Sanity: ' + (base[3]);
}
///////////Button event listeners.
feedStat.addEventListener('click', feedAct);
portalStat.addEventListener('click', portalAct);
sleepStat.addEventListener('click', sleepAct);
boredomStat.addEventListener('click', boredomAct);
//said functions defined for the event listeners.
function feedAct(){
        mod[0] = mod[0] - 2;
        hungerCt.textContent = 'Hunger: ' + (base[0] - mod[0]);
}
function portalAct(){
    let randNum = Math.floor(Math.random()*10)
    if(randNum < 5){
        mod[3] = mod[3] + 2;
        textBox.textContent = "You have been cursed, sanity loss rate +" + mod[3];
    }
        sanityCt.textContent = 'Sanity: ' + base[3];
}
function sleepAct(){
        mod[1] = 0;
        sleepCt.textContent = 'Sleep: ' + (base[1] - mod[1]);
}
function boredomAct(){
        mod[2] = mod[2] - 2;
        boredomCt.textContent = 'Boredom: ' + (base[2] - mod[2]);
}
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

