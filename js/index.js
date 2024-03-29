
// js making me add basic functions 🥰🥰🥰
const sleep = ms => new Promise(r => setTimeout(r, ms));

async function animate_title() {
    var title = ["#","1"," ", "y","a","p","p","e","r", " "];
    var counter = 0
    while (true) {
        counter++;
        if (counter % 11 == 0) {
            await sleep(1000);
        }
        await sleep(250);
        document.title = (title.join(''));
        let first_char = title.shift();
        title.push(first_char);
    }
}

function convert_time(inSeconds) {
    var seconds = Math.floor(inSeconds % 60);
    if (seconds < 10) {
        seconds = "0"+seconds
    }
    var minutes = Math.floor(inSeconds / 60);
    return minutes+":"+seconds
}
window.mobileCheck = function() {
    let check = false;
    (function(a){if(/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i.test(a)||/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(a.substr(0,4))) check = true;})(navigator.userAgent||navigator.vendor||window.opera);
    return check;
};

document.addEventListener("DOMContentLoaded", () => {

    // will be playing on click
    let audio_player = document.getElementById("audio-player");
    let play_pause = document.getElementById("play-pause");
    let audio_confirm = document.getElementById("audio-start-screen");
    let progress_bar = document.getElementById("audio-progress");
    // the actual icon
    let volume_button = document.getElementById("volume-control-text");
    var volume_slider = document.getElementById('volume-slider');
    var is_dragging = false;

    

    // playing audio requires it to be muted, or have user input
    audio_confirm.addEventListener("click", () => {
        audio_player.muted = false;
        audio_confirm.style.display = "none";
        audio_player.play();
        
    });
    play_pause.addEventListener("click", () => {
        if (audio_player.paused) {
            audio_player.play();
            document.getElementById("play-pause-text").innerText = "pause";
        } else {
            audio_player.pause();
            document.getElementById("play-pause-text").innerText = "play_arrow";
        }

    });

    

    progress_bar.addEventListener("mousedown", () => {
        is_dragging = true;
    });

    progress_bar.addEventListener("mouseup", () => {
        is_dragging = false;
    });

    audio_player.addEventListener("loadedmetadata", () => {
        var duration = audio_player.duration;
        progress_bar.max = duration;
        progress_bar.value = 0;
        document.getElementById("duration").innerText = convert_time(duration);
        document.getElementById("audio-start-text").innerText = "click";
    });

    audio_player.addEventListener("timeupdate", () => {
        if (!is_dragging) {
            progress_bar.value = audio_player.currentTime;
        }
        document.getElementById("current-time").innerText = convert_time(audio_player.currentTime);   
    });

    progress_bar.addEventListener("change", () => {
        audio_player.currentTime = progress_bar.value;
    });

    particlesJS.load('particles-js', './assets/particles.json', function() {
        console.log('callback - particles.js config loaded');
    });

    
    document.addEventListener("keydown", (event) => {
        if (event.isComposing || event.key == " ") {
            if (audio_player.paused) {
                audio_player.play();
                document.getElementById("play-pause-text").innerText = "pause";
            } else {
                audio_player.pause();
                document.getElementById("play-pause-text").innerText = "play_arrow";
            }
        };
        if (event.isComposing || event.key == "m") {
            audio_player.muted = !audio_player.muted;
        if (audio_player.muted == true) {
            volume_button.innerText = "volume_off";
        } else {
            if (parseFloat(volume_slider.value) > .50) {
                volume_button.innerText = "volume_up";
            } else if (parseFloat(volume_slider.value) <= .5) {
                volume_button.innerText = "volume_down";
            }
            if (parseFloat(volume_slider.value) == 0) {
                volume_button.innerText = "volume_off";
            }
        }
        }
    }); 
    


    volume_button.addEventListener("click", () => {
        audio_player.muted = !audio_player.muted;
        if (audio_player.muted == true) {
            volume_button.innerText = "volume_off";
        } else {
            if (parseFloat(volume_slider.value) > .50) {
                volume_button.innerText = "volume_up";
            } else if (parseFloat(volume_slider.value) <= .5) {
                volume_button.innerText = "volume_down";
            }
            if (parseFloat(volume_slider.value) == 0) {
                volume_button.innerText = "volume_off";
            }
        }
    });


    volume_slider.addEventListener('input', function() {
        audio_player.volume = volume_slider.value;

        if (parseFloat(volume_slider.value) > .50) {
            volume_button.innerText = "volume_up";
        } else if (parseFloat(volume_slider.value) <= .5) {
            volume_button.innerText = "volume_down";
        }
        if (parseFloat(volume_slider.value) == 0) {
            volume_button.innerText = "volume_off";
        }
        
    });


});
if (!window.mobileCheck()) {
    animate_title()
}