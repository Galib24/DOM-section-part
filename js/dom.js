const places = document.getElementsByClassName('important-places');
for(const place of places){
    console.log(place.innerText)
}

const fruitTitle = document.getElementById('fruits-title');
fruitTitle.innerText = 'fruits changed by js';

// querySelectorAll
const someLi = document.querySelectorAll('.fruits-container li')
// console.log(someLi);
for(const li of someLi){
    console.log(li.innerText);

}