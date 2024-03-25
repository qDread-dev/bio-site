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
    let progress_bar = document.getElementById("audio-progress")

    // playing audio requires it to be muted, or have user input
    audio_confirm.addEventListener("click", () => {
        audio_confirm.style.display = "none";
        audio_player.play();
        
    });
    play_pause.addEventListener("click", () => {
        console.log()
        if (audio_player.paused) {
            audio_player.play();
        } else {
            audio_player.pause();
        }

    });

    audio_player.addEventListener("loadedmetadata", () => {
        var duration = audio_player.duration;
        var current_time = audio_player.currentTime;
        progress_bar.max = duration;
        progress_bar.value = 0;
    });

    audio_player.addEventListener("timeupdate", () => {
        progress_bar.value = audio_player.currentTime;
    });
    
    animate_title()

});