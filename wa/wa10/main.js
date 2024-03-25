const customName = document.getElementById('customname');
const randomize = document.querySelector('.randomize');
const story = document.querySelector('.story');

function randomValueFromArray(array){
  const random = Math.floor(Math.random()*array.length);
  return array[random];
}

const insertX = ['Perry the Big Bird', 'Ricky', 'Julian'];
const insertY = ['iced coffee', 'iced macchiato', 'iced latte'];
const insertZ = ['back home', 'on their desk', 'in their backyard'];

randomize.addEventListener('click', result);

function result() {
  let newStory = "It was pretty early in the morning, so :insertx: went to get some coffee from this new shop in town. When they tried to order a :inserty:, they realized they forgot their wallet at home. Luckily, the barista, Bob, said it's on the house. But Bob made an awful mistake and accidentally made the drink at a whopping 500 degrees fahrenheit!";

  if(customName.value !== '') {
    const name = customName.value;
    newStory = newStory.replace(/Bob/g, name);
  }

  if(document.getElementById("uk").checked) {
    const temperature =  Math.round((94 - 32) * (5/9)); 
    newStory = newStory.replace(/500 degrees fahrenheit/g, temperature + " degrees centigrade");
  }

  newStory = newStory.replace(':insertx:', randomValueFromArray(insertX));
  newStory = newStory.replace(':inserty:', randomValueFromArray(insertY));
  newStory = newStory.replace(':insertz:', randomValueFromArray(insertZ));

  story.textContent = newStory;
  story.style.visibility = 'visible';
}

