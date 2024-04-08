const displayedImage = document.querySelector('.displayed-img');
const thumbBar = document.querySelector('.thumb-bar');

const btn = document.querySelector('button');
const overlay = document.querySelector('.overlay');


const images = ['pic1.png', 'pic2.jpg', 'pic3.jpeg', 'pic4.jpeg', 'pic5.png'];
const alts = {
  'pic1.png' : 'Flatirons',
  'pic2.jpg' : 'Drawing of frog and pufferfish wearing hats',
  'pic3.jpg' : 'Waterfalls and a ravine',
  'pic4.jpg' : 'drawing of a meadow and pond',
  'pic5.png' : 'a bird with horns'
}

for (const image of images) {
  const newImage = document.createElement('img');
  newImage.setAttribute('src', `images/${image}`);
  newImage.setAttribute('alt', alts[image]);
  thumbBar.appendChild(newImage);
  newImage.addEventListener('click', e => {
    displayedImage.src = e.target.src;
    displayedImage.alt = e.target.alt;
  });
}

btn.addEventListener('click', () => {
  const btnClass = btn.getAttribute('class');
  if (btnClass === 'dark') {
    btn.setAttribute('class','light');
    btn.textContent = 'Lighten';
    overlay.style.backgroundColor = 'rgba(0,0,0,0.5)';
  } else {
    btn.setAttribute('class','dark');
    btn.textContent = 'Darken';
    overlay.style.backgroundColor = 'rgba(0,0,0,0)';
  }
});
