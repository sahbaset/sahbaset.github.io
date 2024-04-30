let volume = 50; // Starting volume
let clickCount = 0;
let lastClickTime = 0;

const volumeDisplay = document.getElementById('volumeDisplay');
const volumeBar = document.getElementById('volumeBar');
const volumeUpButton = document.getElementById('volumeUp');
const volumeDownButton = document.getElementById('volumeDown');

function updateVolumeDisplay() {
    volumeDisplay.textContent = `Volume: ${volume.toFixed(1)}%`;
    volumeBar.style.width = `${volume}%`; // Update volume bar width
}

function animateButton(button) {
    const maxMove = 100; // Increase the maximum movement range further
    let moveX = (Math.random() * maxMove * 2) - maxMove;
    let moveY = (Math.random() * maxMove * 2) - maxMove;
    button.style.transition = 'transform 0.3s ease-in-out'; // Keep the animation duration relatively short
    button.style.transform = `translate(${moveX}px, ${moveY}px)`;
}

volumeUpButton.addEventListener('click', function() {
    if (volume < 100) {
        volume += 0.1;
        updateVolumeDisplay();
        animateButton(this);
        checkClicks();
    }
});

volumeDownButton.addEventListener('click', function() {
    if (volume > 0) {
        volume -= 0.1;
        updateVolumeDisplay();
        animateButton(this);
        checkClicks();
    }
});

function checkClicks() {
    const currentTime = new Date().getTime();
    if (currentTime - lastClickTime < 1500) {
        clickCount++;
        if (clickCount === 2) {
            alert("WARNING: You are clicking too fast. Please slow down.");
            clickCount = 0;
            lastClickTime = 0;
        }
    } else {
        clickCount = 1;
    }
    lastClickTime = currentTime;
}

updateVolumeDisplay();