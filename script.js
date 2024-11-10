const surahSelector = document.getElementById('surahSelector');
const audioPlayer = document.getElementById('audioPlayer');
const audioSource = document.getElementById('audioSource');
let isRepeat = false;

function playSurah() {
    audioSource.src = surahSelector.value;
    audioPlayer.load();
    audioPlayer.play();
}

function playAudio() {
    audioPlayer.play();
}

function pauseAudio() {
    audioPlayer.pause();
}

function previousSurah() {
    if (surahSelector.selectedIndex > 0) {
        surahSelector.selectedIndex -= 1;
        playSurah();
    }
}

function nextSurah() {
    if (surahSelector.selectedIndex < surahSelector.options.length - 1) {
        surahSelector.selectedIndex += 1;
        playSurah();
    }
}

function toggleRepeat() {
    isRepeat = !isRepeat;
    audioPlayer.loop = isRepeat;
}
