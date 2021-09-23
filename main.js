// reviews object

const reviews = [
    {
        id: 1,
        name: 'susan smith',
        job: 'web developer',
        img: "img/anastasia.jpg",
        text: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Optio alias dicta, earum amet minus velit quam nisi quas! Minus nulla quidem rem hic nisi doloremque.'
    },
    {
        id: 2,
        name: 'boris johnson',
        job: 'data analyst',
        img: 'img/mateus.jpg',
        text: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Optio alias dicta'
    },
    {
        id: 3,
        name: 'david beckham',
        job: 'DevOps Engineer',
        img: 'img/vaznik.jpg',
        text: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Optio alias dicta, earum amet minus velit quam nisi quas! Minus nulla quidem rem hic nisi doloremque. adipisicing elit. Optio alias dicta, ea'
    },
    {
        id: 4,
        name: 'sara jones',
        job: 'UX designer',
        img: 'img/alena.jpg',
        text: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Optio alias dicta??'
    }
];

// select items

const img = document.getElementById('person-img');
const author = document.getElementById('author');
const job = document.getElementById('job');
const info = document.getElementById('info');

const prevButton = document.querySelector('.prev-button');

const nextButton = document.querySelector('.next-button')

const randomButton = document.querySelector('.random-btn');

// set initial value of the reviews

let currentItem = 0;

// load initial item

window.addEventListener('DOMContentLoaded', ()=>{
    showPerson(currentItem);
});

// capitalize name

function capitalize(phrase){
    let separateWords = phrase.toLowerCase().split(' ');
    for (let i=0; i<separateWords.length;i++){
        separateWords[i] = separateWords[i].charAt(0).toUpperCase() + separateWords[i].slice(1);
    }
    return separateWords.join(' ');
}

// show person based on item

function showPerson(person){
    img.src = reviews[person].img;
    author.textContent = capitalize(reviews[person].name);
    job.textContent = reviews[person].job.toUpperCase();
    info.textContent = reviews[person].text;
}

// change currentItem

nextButton.addEventListener('click', () =>{
    if (currentItem < reviews.length - 1){
        currentItem+=1;
    }else {
        currentItem = 0;
    }
    showPerson(currentItem);
});

prevButton.addEventListener('click', () =>{
    if (currentItem > 0){
        currentItem-=1;
    }else {
        currentItem = reviews.length - 1;
    }
    showPerson(currentItem);
});

randomButton.addEventListener('click', () =>{
    let randomNumber = Math.floor(Math.random() * 
    (reviews.length));
    showPerson(randomNumber);
});