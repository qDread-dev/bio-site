// js making me add basic functions 🥰🥰🥰
const sleep = ms => new Promise(r => setTimeout(r, ms));

async function animate_title() {
    var title = ["#","1"," ", "y","a","p","p","e","r", " "];
    while (true) {
        document.title = (title.join(''));
        let first_char = title.shift();
        title.push(first_char);
        await sleep(250);
    }
}

document.addEventListener("DOMContentLoaded", () => {




    // will be playing on click
    let audio_player = document.getElementById("audio-player");
    let play_pause = document.getElementById("play-pause");
    let audio_confirm = document.getElementById("audio-start-screen");

    audio_confirm.addEventListener("click", () => {
        audio_confirm.style.display = "none";
        audio_player.play();
    });

    play_pause.addEventListener("click", () => {

    });
    
    // document.title = "se";
    animate_title()

});