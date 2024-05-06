let volume = 50; // Starting volume
let clickCount = 0;
let lastClickTime = 0;

const volumeDisplay = document.getElementById('volumeDisplay');
const volumeBar = document.getElementById('volumeBar');
const volumeUpButton = document.getElementById('volumeUp');
const volumeDownButton = document.getElementById('volumeDown');

function updateVolumeDisplay() {
    volumeDisplay.textContent = `Volume: ${volume.toFixed(1)}%`;
    volumeBar.style.width = `${volume}%`; 
}

function animateButton(button) {
    setTimeout(() => {
        const maxMove = 100; 
        let moveX = (Math.random() * maxMove * 2) - maxMove;
        let moveY = (Math.random() * maxMove * 2) - maxMove;
        button.style.transition = 'transform 1s ease-in-out'; 
        button.style.transform = `translate(${moveX}px, ${moveY}px)`;

        setInterval(() => {
            volumeSlider.value = Math.floor(Math.random() * 201) - 100; // Set slider value to a random position between -100 and 100
            volume = parseFloat(volumeSlider.value) >= 0 ? parseFloat(volumeSlider.value) : 0; // Ensure volume is not negative
            updateVolumeDisplay();
        }, 3000); // Update every 3 seconds
    }, 500); 
}

volumeUpButton.addEventListener('click', function() {
    setTimeout(() => {
        if (volume > 0) {
            volume -= 0.1;
            updateVolumeDisplay();
            animateButton(this);
            checkClicks();
            randomlyChangeVolume();
            randomlyChangeButtonText();
        }
    }, 500); 
});

volumeDownButton.addEventListener('click', function() {
    setTimeout(() => {
        if (volume < 100) {
            volume += 0.1;
            updateVolumeDisplay();
            animateButton(this);
            checkClicks();
            randomlyChangeVolume();
            randomlyChangeButtonText();
        }
    }, 500); 
});

function checkClicks() {
    const currentTime = new Date().getTime();
    if (currentTime - lastClickTime < 1500) {
        clickCount++;
        if (clickCount === 2) {
            alert("You are clicking too fast!");
            clickCount = 0;
            lastClickTime = 0;
        }
    } else {
        clickCount = 1;
    }
    lastClickTime = currentTime;
}

function randomlyChangeVolume() {
    if (Math.random() < 0.2) { 
        volume = Math.random() * 100;
        updateVolumeDisplay();
    }
}

function randomlyChangeButtonText() {
    const buttonTexts = ['-', '+', 'Mute', 'Loud', 'Soft', 'Quieter', 'Louder', 'Volume?'];
    volumeUpButton.textContent = buttonTexts[Math.floor(Math.random() * buttonTexts.length)];
    volumeDownButton.textContent = buttonTexts[Math.floor(Math.random() * buttonTexts.length)];
}

const muteButton = document.getElementById('muteButton');
const unmuteButton = document.getElementById('unmuteButton');
const volumeSlider = document.getElementById('volumeSlider');

muteButton.addEventListener('click', function() {
    volume = 0;
    updateVolumeDisplay();
    animateButton(this);
    randomlyChangeButtonText();
});

unmuteButton.addEventListener('click', function() {
    volume = 100;
    updateVolumeDisplay();
    animateButton(this);
    randomlyChangeButtonText();
});

volumeSlider.addEventListener('input', function() {

volumeSlider.addEventListener('input', function() {
    volume = 100 - parseFloat(this.value);
    updateVolumeDisplay();
});

    updateVolumeDisplay();
});


let sliderTimeout;

volumeSlider.addEventListener('input', function() {
    clearTimeout(sliderTimeout); 
    const newVolume = parseFloat(this.value);
    sliderTimeout = setTimeout(() => {
        volume = newVolume;
        updateVolumeDisplay();
    }, 500); 
});

volumeSlider.addEventListener('mousedown', function() {
    const maxMove = 10; 
    const moveX = (Math.random() * maxMove * 2) - maxMove;
    this.style.transform = `translateX(${moveX}px)`;
});

volumeSlider.addEventListener('mouseup', function() {
    this.style.transform = 'translateX(0)';
});


updateVolumeDisplay();
