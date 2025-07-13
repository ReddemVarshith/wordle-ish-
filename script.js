const word = ["start", "boats","mango", "noble", "ocean", "pride", "queen", "river", "storm", "table",
  "urban", "vigor", "waste", "xenon", "yacht", "zebra", "angel", "blush", "climb", "dwarf",
  "every", "fancy", "giant", "heart", "ivory", "joker", "karma", "lunch", "magic", "novel",
  "optic", "peace", "quiet", "risky", "smile", "trend","dodge", "elite", "frost", "glory", "honor", "input", "jelly",
  "kitty", "laugh", "mirth", "ninja", "orbit", "plush", "quilt", "rapid", "shiny", "thorn",
  "upper", "vivid", "woven", "xylem", "young", "zonal", "amend", "basil", "charm", "delay",
  "enjoy", "frame", "ghost", "honey", "ideal", "jelly", "knife", "light", "moral", "nerve",
  "oasis", "polar", "quiet", "relay", "slide", "tower", "usage", "vouch"];
const choicenum = Math.floor(Math.random() * word.length);
const choice = word[choicenum];
console.log(choice);

const b1 = document.getElementById("l1");
const b2 = document.getElementById("l2");
const b3 = document.getElementById("l3");
const b4 = document.getElementById("l4");
const b5 = document.getElementById("l5");

const b6 = document.getElementById("l6");
const b7 = document.getElementById("l7");
const b8 = document.getElementById("l8");
const b9 = document.getElementById("l9");
const b10 = document.getElementById("l10");

const b11 = document.getElementById("l11");
const b12 = document.getElementById("l12");
const b13 = document.getElementById("l13");
const b14 = document.getElementById("l14");
const b15 = document.getElementById("l15");

const b16 = document.getElementById("l16");
const b17 = document.getElementById("l17");
const b18 = document.getElementById("l18");
const b19 = document.getElementById("l19");
const b20 = document.getElementById("l20");

const b21 = document.getElementById("l21");
const b22 = document.getElementById("l22");
const b23 = document.getElementById("l23");
const b24 = document.getElementById("l24");
const b25 = document.getElementById("l25");

var guess1 = "";

b1.addEventListener("keyup", function (event) {
    const value = b1.value;
    if (!/^[a-zA-Z]$/.test(value)) {
        b1.value = "";
        b1.focus();
        return;
    }
    guess1 += b1.value;
    console.log(guess1);
    b2.focus();
});

b2.addEventListener("keyup", function (event) {

    if (event.key==="Backspace") {
        b2.value = "";
        b1.focus();
        return;
    }
    const value = b2.value;
    if (!/^[a-zA-Z]$/.test(value)) {
        b2.value = "";
        b2.focus();
        return;
    }
    
    guess1 += b2.value;
    console.log(guess1);
    b3.focus();
});

b3.addEventListener("keyup", function (event) {
     if (event.key==="Backspace") {
        b3.value = "";
        b2.focus();
        return;
    }
    const value = b3.value;
    if (!/^[a-zA-Z]$/.test(value)) {
        b3.value = "";
        b3.focus();
        return;
    }
    if (event.key === "Backspace")
        b2.focus()
    guess1 += b3.value;
    console.log(guess1);
    b4.focus();
});

b4.addEventListener("keyup", function (event) {
     if (event.key==="Backspace") {
        b4.value = "";
        b3.focus();
        return;
    }
    const value = b4.value;
    if (!/^[a-zA-Z]$/.test(value)) {
        b4.value = "";
        b4.focus();
        return;
    }
    guess1 += b4.value;
    console.log(guess1);
    b5.focus();
});

b5.addEventListener("keyup", function (event) {
     if (event.key==="Backspace") {
        b5.value = "";
        b4.focus();
        return;
    }
    const value = b5.value;
    if (!/^[a-zA-Z]$/.test(value)) {
        b5.value = "";
        b5.focus();
        return;
    }
    guess1 += b5.value;
    console.log(guess1);
    checker(guess1, choice, 0);
    if (guess1 === choice) {
        alert("You win");
        location.reload();
    }
    b6.focus();
    guess1 = "";
});


b6.addEventListener("keyup", function (event) {

    const value = b6.value;
    if (!/^[a-zA-Z]$/.test(value)) {
        b6.value = "";
        b6.focus();
        return;
    }
    guess1 += b6.value;
    console.log(guess1);
    b7.focus();
});

b7.addEventListener("keyup", function (event) {
     if (event.key==="Backspace") {
        b7.value = "";
        b6.focus();
        return;
    }
    const value = b7.value;
    if (!/^[a-zA-Z]$/.test(value)) {
        b7.value = "";
        b7.focus();
        return;
    }
    guess1 += b7.value;
    console.log(guess1);
    b8.focus();
});

b8.addEventListener("keyup", function (event) {
     if (event.key==="Backspace") {
        b8.value = "";
        b7.focus();
        return;
    }
    const value = b8.value;
    if (!/^[a-zA-Z]$/.test(value)) {
        b8.value = "";
        b8.focus();
        return;
    }
    guess1 += b8.value;
    console.log(guess1);
    b9.focus();
});

b9.addEventListener("keyup", function (event) {
     if (event.key==="Backspace") {
        b9.value = "";
        b8.focus();
        return;
    }
    const value = b9.value;
    if (!/^[a-zA-Z]$/.test(value)) {
        b9.value = "";
        b9.focus();
        return;
    }
    guess1 += b9.value;
    console.log(guess1);
    b10.focus();
});

b10.addEventListener("keyup", function (event) {
     if (event.key==="Backspace") {
        b10.value = "";
        b9.focus();
        return;
    }
    const value = b10.value;
    if (!/^[a-zA-Z]$/.test(value)) {
        b10.value = "";
        b10.focus();
        return;
    }
    guess1 += b10.value;
    console.log(guess1);
    checker(guess1, choice, 5);
    if (guess1 === choice) {
        alert("You win");
        location.reload();
    }
    b11.focus();
    guess1 = "";
});

b11.addEventListener("keyup", function (event) {

    const value = b11.value;
    if (!/^[a-zA-Z]$/.test(value)) {
        b11.value = "";
        b11.focus();
        return;
    }
    guess1 += b11.value;
    console.log(guess1);
    b12.focus();
});

b12.addEventListener("keyup", function (event) {
     if (event.key==="Backspace") {
        b12.value = "";
        b11.focus();
        return;
    }
    const value = b12.value;
    if (!/^[a-zA-Z]$/.test(value)) {
        b12.value = "";
        b12.focus();
        return;
    }
    guess1 += b12.value;
    console.log(guess1);
    b13.focus();
});

b13.addEventListener("keyup", function (event) {
     if (event.key==="Backspace") {
        b13.value = "";
        b12.focus();
        return;
    }
    const value = b13.value;
    if (!/^[a-zA-Z]$/.test(value)) {
        b13.value = "";
        b13.focus();
        return;
    }
    guess1 += b13.value;
    console.log(guess1);
    b14.focus();
});

b14.addEventListener("keyup", function (event) {
     if (event.key==="Backspace") {
        b14.value = "";
        b13.focus();
        return;
    }
    const value = b14.value;
    if (!/^[a-zA-Z]$/.test(value)) {
        b14.value = "";
        b14.focus();
        return;
    }
    guess1 += b14.value;
    console.log(guess1);
    b15.focus();
});

b15.addEventListener("keyup", function (event) {
     if (event.key==="Backspace") {
        b15.value = "";
        b14.focus();
        return;
    }
    const value = b15.value;
    if (!/^[a-zA-Z]$/.test(value)) {
        b15.value = "";
        b15.focus();
        return;
    }
    guess1 += b15.value;
    console.log(guess1);
    checker(guess1, choice, 10);
    if (guess1 === choice) {
        alert("You win");
        location.reload();
    }
    b16.focus();
    guess1 = "";
});





b16.addEventListener("keyup", function (event) {
    
    const value = b16.value;
    if (!/^[a-zA-Z]$/.test(value)) {
        b16.value = "";
        b16.focus();
        return;
    }
    guess1 += b16.value;
    console.log(guess1);
    b17.focus();
});

b17.addEventListener("keyup", function (event) {
     if (event.key==="Backspace") {
        b17.value = "";
        b16.focus();
        return;
    }
    const value = b17.value;
    if (!/^[a-zA-Z]$/.test(value)) {
        b17.value = "";
        b17.focus();
        return;
    }
    guess1 += b17.value;
    console.log(guess1);
    b18.focus();
});

b18.addEventListener("keyup", function (event) {
     if (event.key==="Backspace") {
        b18.value = "";
        b17.focus();
        return;
    }
    const value = b18.value;
    if (!/^[a-zA-Z]$/.test(value)) {
        b18.value = "";
        b18.focus();
        return;
    }
    guess1 += b18.value;
    console.log(guess1);
    b19.focus();
});

b19.addEventListener("keyup", function (event) {
     if (event.key==="Backspace") {
        b19.value = "";
        b18.focus();
        return;
    }
    const value = b19.value;
    if (!/^[a-zA-Z]$/.test(value)) {
        b19.value = "";
        b19.focus();
        return;
    }
    guess1 += b19.value;
    console.log(guess1);
    b20.focus();
});

b20.addEventListener("keyup", function (event) {
     if (event.key==="Backspace") {
        b20.value = "";
        b19.focus();
        return;
    }
    const value = b20.value;
    if (!/^[a-zA-Z]$/.test(value)) {
        b20.value = "";
        b20.focus();
        return;
    }
    guess1 += b20.value;
    console.log(guess1);
    checker(guess1, choice, 15);
    if (guess1 === choice) {
        alert("You win");
        location.reload();
    }
    b21.focus();
    guess1 = "";
});



b21.addEventListener("keyup", function (event) {

    const value = b21.value;
    if (!/^[a-zA-Z]$/.test(value)) {
        b21.value = "";
        b21.focus();
        return;
    }
    guess1 += b21.value;
    console.log(guess1);
    b22.focus();
});

b22.addEventListener("keyup", function (event) {
     if (event.key==="Backspace") {
        b22.value = "";
        b21.focus();
        return;
    }
    const value = b22.value;
    if (!/^[a-zA-Z]$/.test(value)) {
        b22.value = "";
        b22.focus();
        return;
    }
    guess1 += b22.value;
    console.log(guess1);
    b23.focus();
});

b23.addEventListener("keyup", function (event) {
     if (event.key==="Backspace") {
        b23.value = "";
        b22.focus();
        return;
    }
    const value = b23.value;
    if (!/^[a-zA-Z]$/.test(value)) {
        b23.value = "";
        b23.focus();
        return;
    }
    guess1 += b23.value;
    console.log(guess1);
    b24.focus();
});

b24.addEventListener("keyup", function (event) {
     if (event.key==="Backspace") {
        b24.value = "";
        b23.focus();
        return;
    }
    const value = b24.value;
    if (!/^[a-zA-Z]$/.test(value)) {
        b24.value = "";
        b24.focus();
        return;
    }
    guess1 += b24.value;
    console.log(guess1);
    b25.focus();
});

b25.addEventListener("keyup", function (event) {
     if (event.key==="Backspace") {
        b25.value = "";
        b24.focus();
        return;
    }
    const value = b25.value;
    if (!/^[a-zA-Z]$/.test(value)) {
        b25.value = "";
        b25.focus();
        return;
    }
    guess1 += b25.value;
    console.log(guess1);
    checker(guess1, choice, 20);
    if (guess1 === choice) {
        alert("You win");
        location.reload();
    }
    if (guess1 !== choice) {
        alert("You lost");
        location.reload();
    }
});












function checker(guesschecker, choice, index) {
    const choiceLetters = choice.split('');
    const guessLetters = guesschecker.split('');
    const resultColors = new Array(5).fill("red"); 

    
    for (let i = 0; i < 5; i++) {
        if (guessLetters[i] === choiceLetters[i]) {
            resultColors[i] = "green";
            choiceLetters[i] = null; 
            guessLetters[i] = null;  
        }
    }
 
    for (let i = 0; i < 5; i++) {
        if (guessLetters[i] && choiceLetters.includes(guessLetters[i])) {
            resultColors[i] = "yellow";
            const indexInChoice = choiceLetters.indexOf(guessLetters[i]);
            choiceLetters[indexInChoice] = null; 
        }
    }
    for (let i = 0; i < 5; i++) {
        const buttonChecker = document.getElementById("l" + (index + i + 1));
        buttonChecker.style.backgroundColor = resultColors[i];
    }
}

