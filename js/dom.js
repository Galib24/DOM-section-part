const places = document.getElementsByClassName('important-places');
for(const place of places){
    // console.log(place.innerText)
}

const fruitTitle = document.getElementById('fruits-title');
fruitTitle.innerText = 'fruits changed by js';

// querySelectorAll
const someLi = document.querySelectorAll('.fruits-container li')
// console.log(someLi);
for(const li of someLi){
    // console.log(li.innerText);

}

// section site operation
const sections = document.querySelectorAll('section');
for(const section of sections){
    section.style.border = '2px solid steelblue'
    section.style.marginBottom = '5px';
    section.style.borderRadius = '15px';
    section.style.paddingLeft = '7px';
    section.style.backgroundColor = 'lightgray';

}

const placesCOntainer = document.getElementById('places-container');
// placesCOntainer.style.backgroundColor = 'yellow'

const placesContainer = document.getElementById('places-container');
placesCOntainer.classList.add('text-center');
placesContainer.classList.remove('large-text')