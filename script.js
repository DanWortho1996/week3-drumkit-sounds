//This will play sound when clicked on button on Audio 1

//Audio1 Drumbass Sound
document.getElementById('button1').addEventListener('click', () => {
    let audio = document.getElementById('boomSound');
    audio.play();
});

//This is keyboard press, i.e, Q = boom sound and will play when pressed
document.addEventListener('keydown', (event) => {
    let audio = document.getElementById('boomSound');
    if (event.code === 'KeyQ') {
        audio.play();
    }
});

//This is image audio on press
document.getElementById('drumBassI').addEventListener('click', () => {
    let audio = document.getElementById('boomSound');
    audio.play();
});
//All shown above will be able to click on button or press letter or click image for audio/sound to play

//Audio 2 Clap sound
document.getElementById('button2').addEventListener('click', () => {
    let audio = document.getElementById('clapSound');
    audio.play();
});

document.addEventListener('keydown', (event) => {
    let audio = document.getElementById('clapSound');
    if (event.code === 'KeyW') {
        audio.play();
    }
});

document.getElementById('clapHandsI').addEventListener('click', () => {
    let audio = document.getElementById('clapSound');
    audio.play();
});

//Audio 3 HiHat Sound
document.getElementById('button3').addEventListener('click', () => {
    let audio = document.getElementById('hihatSound');
    audio.play();
});

document.addEventListener('keydown', (event) => {
    let audio = document.getElementById('hihatSound');
    if (event.code === 'KeyE') {
        audio.play();
    }
});

document.getElementById('hiHatDrumKitI').addEventListener('click', () => {
    let audio = document.getElementById('hihatSound');
    audio.play();
});

//Audio 4 Kick sound
document.getElementById('button4').addEventListener('click', () => {
    let audio = document.getElementById('kickSound');
    audio.play();
});

document.addEventListener('keydown', (event) => {
    let audio = document.getElementById('kickSound');
    if (event.code === 'KeyR') {
        audio.play();
    }
});

document.getElementById('kickDrumKitI').addEventListener('click', () => {
    let audio = document.getElementById('kickSound');
    audio.play();
});

//Audio 5 OpenHat sound
document.getElementById('button5').addEventListener('click', () => {
    let audio = document.getElementById('openhatSound');
    audio.play();
});

document.addEventListener('keydown', (event) => {
    let audio = document.getElementById('openhatSound');
    if (event.code === 'KeyT') {
        audio.play();
    }
});

document.getElementById('openHatDrumKitI').addEventListener('click', () => {
    let audio = document.getElementById('openhatSound');
    audio.play();
});

//Audio 6 Ride sound
document.getElementById('button6').addEventListener('click', () => {
    let audio = document.getElementById('rideSound');
    audio.play();
});

document.addEventListener('keydown', (event) => {
    let audio = document.getElementById('rideSound');
    if (event.code === 'KeyY') {
        audio.play();
    }
});

document.getElementById('rideDrumKitI').addEventListener('click', () => {
    let audio = document.getElementById('rideSound');
    audio.play();
});

//Audio 7 Snare sound
document.getElementById('button7').addEventListener('click', () => {
    let audio = document.getElementById('snareSound');
    audio.play();
});


document.addEventListener('keydown', (event) => {
    let audio = document.getElementById('snareSound');
    if (event.code === 'KeyU') {
        audio.play();
    }
});

document.getElementById('snareDrumKitI').addEventListener('click', () => {
    let audio = document.getElementById('snareSound');
    audio.play();
});

//Audio 8 Tink sound
document.getElementById('button8').addEventListener('click', () => {
    let audio = document.getElementById('tinkSound');
    audio.play();
});

document.addEventListener('keydown', (event) => {
    let audio = document.getElementById('tinkSound');
    if (event.code === 'KeyI') {
        audio.play();
    }
});

document.getElementById('tinkDrumKitI').addEventListener('click', () => {
    let audio = document.getElementById('tinkSound');
    audio.play();
});

//Audio 9 Tom sound
document.getElementById('button9').addEventListener('click', () => {
    let audio = document.getElementById('tomSound');
    audio.play();
});

document.addEventListener('keydown', (event) => {
    let audio = document.getElementById('tomSound');
    if (event.code === 'KeyO') {
        audio.play();
    }
});

document.getElementById('tomDrumKitI').addEventListener('click', () => {
    let audio = document.getElementById('tomSound');
    audio.play();
});