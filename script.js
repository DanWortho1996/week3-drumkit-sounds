document.getElementById('button1').addEventListener('click', () => {
    let audio = document.getElementById('boomSound');
    audio.play();
});

document.addEventListener('keydown', (event) => {
    let audio = document.getElementById('boomSound');
    if (event.code === 'KeyQ') {
        audio.play();
    }
});


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
