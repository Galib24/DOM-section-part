// where to added
const placeList = document.getElementById('places-list');
// what to be added
const li = document.createElement('li');
li.innerText = 'pahartoli bon';
// add the child
placeList.appendChild(li);



// section added 
// where to add 
const mainContainer = document.getElementById('main-container');

// what to be added
const section = document.createElement('section');
const h1 = document.createElement('h1');
h1.innerText = 'My food list'
section.appendChild(h1);

const ul = document.createElement('ul');
const li1 = document.createElement('li');
li1.innerText = 'briany'
ul.appendChild(li1);

const li2 = document.createElement('li');
li2.innerText = 'borhani'
ul.appendChild(li2);

const li3 = document.createElement('li');
li3.innerText = 'salad'
ul.appendChild(li3);

section.appendChild(ul);

// add the child
mainContainer.appendChild(section);


// set innerHtml directly
const sectionDress = document.createElement('section');
sectionDress.innerHTML = `
<h1>my dress section </h1>
<ul>
   <li> T-shirt </li>
   <li>lungi </li>
   <li> sando ganji </li>
</ul>
`
mainContainer.appendChild(sectionDress);