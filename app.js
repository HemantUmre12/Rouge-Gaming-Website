
// ********** Navigation Bar toggle ************

const navToggle = document.querySelector(".nav-toggle");
const linksContainer = document.querySelector(".links-container");
const links = document.querySelector(".links");

navToggle.addEventListener("click", () => {

  if(linksContainer.classList.contains("show-links")) {
    linksContainer.classList.remove("show-links");
  }
  else {
    linksContainer.classList.add("show-links");
  }

});

links.addEventListener("click", () => {

  linksContainer.classList.remove("show-links");

});

// ********** Added to the cart ************

let restartButton = document.querySelector('#restartButton');
let addedMessage = document.querySelector('.added-message');
let wrapper = [...document.querySelectorAll('.wrapper')];
const addToCartBtn = [...document.querySelectorAll('.add-to-cart')];

const removeHoverEffectFromWrapper = () => {
  wrapper.forEach((card) => {
    card.style.transition = "none";
    card.style.pointerEvents = "none";
  });
};

const addHoverEffectFromWrapper = () => {
  wrapper.forEach((card) => {
    card.style.transition = "var(--transition)";
    card.style.pointerEvents = "all";
  });
};

addToCartBtn.forEach((btn) => {
  btn.addEventListener("click", () => {
    removeHoverEffectFromWrapper();
    addedMessage.classList.add("show");
  })
});

restartButton.addEventListener("click", () => {
  addHoverEffectFromWrapper();
  addedMessage.classList.remove("show");
});




// ********** Review ************

// local reviews data
const reviews = [
  {
    id: 1,
    name: "susan smith",
    job: "Influencer",
    img:
      "https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883334/person-1_rfzshl.jpg",
    text:
      "Great service, cheapest price & awesome support team. They were happy to answer every single queries I had before buying the product. Plus an option for COD for those who want it."
  },
  {
    id: 2,
    name: "anna johnson",
    job: "web designer",
    img:
      "https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883409/person-2_np9x5l.jpg",
    text:
      "In short pin point delivery, quality to the core, perfect packaging, and worth the price. Really enjoyed the gaming experience and the communication with the team.",
  },
  {
    id: 3,
    name: "peter jones",
    job: "Gamer",
    img:
      "https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883417/person-3_ipa0mj.jpg",
    text:
      "Ordered for the first time from Rouge Gaming and I absolutely loved the experiece. Really fast delivery and excellent condition of the disc, the box etc. Great experience and I recommend it to everyone.",
  },
  {
    id: 4,
    name: "bill anderson",
    job: "the boss",
    img:
      "https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883423/person-4_t9nxjt.jpg",
    text:
      "The whole experience was hassle free and quick. pickup was done in less than 24 hours from blue dart after I made sell order and then it just took 1 and half days for Rouge Gaming to receive the disc, check the disc and transfer the money.",
  },
];

// ! global funtions

const $ = (query) => document.querySelector(query);

// ! variables

const personImage = $("#person-img");
const author = $("#author");
const job = $("#job");
const info = $("#info");
const prevButton = $(".prev-btn");
const nextButton = $(".next-btn");

function displayReview(idx) {
  const currReview = reviews[idx];
  personImage.src = currReview.img;
  author.innerText = currReview.name;
  job.innerText = currReview.job;
  info.innerText = currReview.text;
}

let currentReviewIdx = 0;
const numberOfReviews = reviews.length;

window.addEventListener("DOMContentLoaded", () => {
  console.log("loaded");
  displayReview(0);
})

nextButton.addEventListener("click", () => {
  if(currentReviewIdx === numberOfReviews - 1) {
    currentReviewIdx = 0;
  }
  else {
    currentReviewIdx++;
  }
  displayReview(currentReviewIdx);
})

prevButton.addEventListener("click", () => {
  if(currentReviewIdx === 0) {
    currentReviewIdx = numberOfReviews - 1;
  }
  else {
    currentReviewIdx--;
  }
  displayReview(currentReviewIdx);
})