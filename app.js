const reviews = [
    {
        id: 1,
        name: "susan smith",
        job: "web developer",
        img: "images/img-3.jpeg",
        text: "I'm baby meggings twee health goth +1. Bicycle rights tumeric charteruse before they sold out chambray pop-up. Shaman humblebrag pickled coloring book salvia hoodie, cold-pressed four dollar toast everyday carry",
    },
    {
        id: 2,
        name: "maria senica",
        job: "the boss",
        img: "images/pic-4.webp",
        text: "Edison bulb put a bird on it humblebrag, marfa pok pok heirloon fashion axe cray stumptown venmo actually seitan. VHS farm-to-table schiltz, edison bulb pop-up 3 wolf moon tate bag street art shabby chic. ",
    },
    {
        id: 3,
        name: "aena johnson",
        job: "web designer",
        img: "images/img-1.webp",
        text: "Helvetica artisan kinfolk thundercats lumbersexual blue bottle. Disrupt glossier gastropub deep v vice franzen hell of brookiyn twee enamel pin fashion axe.photo booth jean shorts artisan narwhal.",
    },
    {
        id: 4,
        name: "cary jones",
        job: "intern",
        img: "images/img-2.jpg",
        text: "Sriracha literally flexitarian irony, vape marfa unicorn. Glossier tattooed 8-bit, fixie waistcoat offal activated charcoal slow-carb marfa hell of pabst raclette post-ironic jianbing swag",
    },
];

const img = document.getElementById("person-img");
const author = document.getElementById("author");
const job = document.getElementById("job");
const info = document.getElementById("info");

const prevBtn = document.querySelector(".prev-btn");
const nextBtn = document.querySelector(".next-btn");
const randomBtn = document.querySelector(".random-btn");

let currentItem = 0;

window.addEventListener('DOMContentLoaded', function () {
    showPerson();
});

function showPerson() {
    const item = reviews[currentItem];
    img.src = item.img;
    author.textContent = item.name;
    job.textContent = item.job;
    info.textContent = item.text;
}

nextBtn.addEventListener('click', function () {
    currentItem++;
    if (currentItem > reviews.length - 1) {
        currentItem = 0;
    }
    showPerson();
});

prevBtn.addEventListener('click', function () {
    currentItem--;
    if (currentItem < 0) {
        currentItem = reviews.length - 1;
    }
    showPerson();
});

randomBtn.addEventListener('click', function () {
    currentItem = Math.floor(Math.random() * reviews.length);
    showPerson();
})
