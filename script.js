function openLetter(){

document.querySelector(".container").innerHTML=`

<video id="birthdayVideo" autoplay muted playsinline>

<source src="video.mp4" type="video/mp4">

</video>

<div class="overlay">

<h2 id="story"></h2>

</div>

`;

const text=`

Dear Parth... 💜

Aaj sirf birthday nahi hai...

Aaj woh din hai jab duniya ko ek amazing insan mila.

Har smile...
Har dream...
Har memory...

Aaj ke din aur bhi special lagti hai.

Enjoy this little surprise...

✨

`;

typeWriter(
document.getElementById("story"),
text,
40,
showContinue
);

}

function showContinue(){

document.querySelector(".overlay").innerHTML+=`

<br><br>

<button onclick="showFinalMessage()">

Continue ✨

</button>

`;

}

function showFinalMessage(){

document.querySelector(".overlay").innerHTML=`

<h1>🎂 Happy Birthday Parth 💜</h1>

<p>

May your life always be filled with...

💜 Happiness

⭐ Success

🌌 Beautiful Memories

✨ Endless Smiles

Never stop believing in yourself.

You deserve the best.

Happy Birthday Once Again! 🎉

</p>

`;

}

function typeWriter(el,text,speed,callback){

el.innerHTML="";

let i=0;

function typing(){

if(i<text.length){

el.innerHTML+=text.charAt(i);

i++;

setTimeout(typing,speed);

}else{

if(callback) callback();

}

}

typing();

}
// ===== DAY 10 PART 4 =====

// Background Music
const music = new Audio("music.mp3");
music.loop = true;
music.volume = 0.4;

// Music starts when envelope opens
const oldOpenLetter = openLetter;

openLetter = function () {
    music.play().catch(() => {});
    oldOpenLetter();
};

// Floating Hearts
function createHeart() {

    const heart = document.createElement("div");

    heart.className = "heartFloat";

    heart.innerHTML = "💜";

    heart.style.left = Math.random() * 100 + "vw";

    document.body.appendChild(heart);

    setTimeout(() => {
        heart.remove();
    }, 5000);
}

// Create hearts every 2 seconds
setInterval(createHeart, 2000);

// Fireworks
function fireworks() {

    for (let i = 0; i < 30; i++) {

        let spark = document.createElement("div");

        spark.className = "spark";

        spark.style.left = Math.random() * 100 + "vw";
        spark.style.top = Math.random() * 100 + "vh";

        document.body.appendChild(spark);

        setTimeout(() => spark.remove(), 1500);
    }
}
// ===============================
// DAY 10 FINAL ENDING
// ===============================

function finalScene(){

document.body.style.transition="3s";

document.body.style.filter="brightness(1.3)";

setTimeout(()=>{

document.body.style.filter="brightness(.15)";

},2500);

setTimeout(()=>{

document.querySelector(".overlay").innerHTML=`

<h1 style="font-size:65px;">🌌</h1>

<h2 style="color:#d8b4fe;">
One Last Message...
</h2>

<p>

Some people become memories...

Some become lessons...

But a few become stars...

The kind you never stop looking at.

✨

Happy Birthday Parth 💜

May every dream you chase become reality.

Never stop smiling.

Never stop believing.

The Universe is cheering for you.

⭐

THE END

</p>

`;

},4000);

}

// Auto start after birthday message

const oldFinal=showFinalMessage;

showFinalMessage=function(){

oldFinal();

setTimeout(finalScene,8000);

}