const closeNav = document.getElementById("closeNavbar");
const mobileNav = document.getElementById("mobileNav");
const openNav = document.querySelector(".openNav");

openNav.addEventListener("click", () => {
  mobileNav.classList.add("translate-y-[0%]");
});

closeNav.addEventListener("click", () => {
  mobileNav.classList.remove("translate-y-[0%]");
});

const featureCards = document.querySelectorAll(".feature");
const featureLabel = document.querySelectorAll(".featureLabel");
const featureTitle = document.querySelector(".feature-title");
const featureText = document.querySelector(".feature-text");
const featureImg = document.querySelector(".feature-img");

const featureData = [
  {
    title: "Book in one click",
    text: "Organize your bookmarks however you like. Our simple drag-and-drop interface gives you complete control over how you manage your favourite sites.",
    img: "/images/illustration-features-tab-1.svg",
  },
  {
    title: "Intelligent search",
    text: "Our powerful search feature will help you find saved sites in no time at all. No need to trawl through all of your bookmarks.",
    img: "/images/illustration-features-tab-2.svg",
  },
  {
    title: "Share your bookmarks",
    text: "Easily share your bookmarks and collections with others. Create a shareable link that you can send at the click of a button.",
    img: "/images/illustration-features-tab-3.svg",
  },
];

// featureCards.forEach((card, index) => {
//   card.addEventListener("click", () => {
//     const data = featureData[index];
//     featureImg.style.backgroundImage = `url(${data.img})`;
//     featureTitle.innerText = data.title;
//     featureText.innerText = data.text;

//     featureLabel.forEach((label) => {
//       label.classList.remove("text-blue-950");
//       label.classList.add("text-gray-500");
//     });

//     featureLabel[index].classList.add("text-blue-950");
//     featureLabel[index].classList.remove("text-gray-500");
//   });
// });

const updateFeature = (index) => {
  const data = featureData[index];

  featureImg.style.backgroundImage = `url(${data.img})`;
  featureTitle.innerText = data.title;
  featureText.innerText = data.text;

  featureLabel.forEach((label) => {
    label.classList.remove("text-blue-950", "after:opacity-100");
    label.classList.add("text-gray-500");
  });

  featureLabel[index].classList.add("text-blue-950", "after:opacity-100");
  featureLabel[index].classList.remove("text-gray-500");
};

featureCards.forEach((card, index) => {
  card.addEventListener("click", () => {
    updateFeature(index);
  });
});

updateFeature(0);

// Making Faq Work
const faqGroup = document.querySelectorAll(".group");

faqGroup.forEach((group) => {
  const currentFaq = group.querySelector(".faq");

  currentFaq.addEventListener("click", () => {
    const isActive = group.classList.contains("active");

    faqGroup.forEach((item) => {
      item.classList.remove("active");
    });

    if (!isActive) {
      group.classList.add("active");
    }
  });
});

//Form Control

// const emailContainer = document.querySelector(".emailContainer");
// const email = document.querySelector(".email");
// const submitEmail = document.querySelector(".submitEmail");
// const errorText = document.querySelector(".errorText");

// submitEmail.addEventListener("click", () => {
//   if (email.value.includes("@")) {
//     errorText.innerHTML = `Thank You!`;
//     emailContainer.classList.remove("bg-transparent"); // added immediately
//     errorText.classList.remove("hidden");

//     setTimeout(() => {
//       emailContainer.classList.add("bg-transparent"); // removed after 2s
//       errorText.classList.add("hidden");
//       email.value = "";
//     }, 3000);
//   } else if (email.value === "") {
//     errorText.innerHTML = `Email is required`;

//     emailContainer.classList.remove("bg-transparent"); // added immediately
//     emailContainer.classList.remove("after:invisible"); // added immediately
//     errorText.classList.remove("hidden");

//     setTimeout(() => {
//       emailContainer.classList.add("bg-transparent"); // removed after 2s
//       emailContainer.classList.add("after:invisible"); // added immediately
//       errorText.classList.add("hidden");
//     }, 3000);
//   } else if (!email.value.includes("@")) {
//     errorText.innerHTML = ` whoops, make sure it's an email`;
//     emailContainer.classList.remove("bg-transparent"); // added immediately
//     emailContainer.classList.remove("after:invisible"); // added immediately
//     errorText.classList.remove("hidden");

//     setTimeout(() => {
//       emailContainer.classList.add("bg-transparent"); // removed after 2s
//       emailContainer.classList.add("after:invisible"); // added immediately
//       errorText.classList.add("hidden");
//     }, 3000);
//   }
// });

const emailContainer = document.querySelector(".emailContainer");
const email = document.querySelector(".email");
const submitEmail = document.querySelector(".submitEmail");
const errorText = document.querySelector(".errorText");

function showMessage(message, isError = true) {
  errorText.innerHTML = message;
  errorText.classList.remove("hidden");

  emailContainer.classList.remove("bg-transparent");
  if (isError) {
    emailContainer.classList.remove("after:invisible");
  }

  setTimeout(() => {
    errorText.classList.add("hidden");
    emailContainer.classList.add("bg-transparent");
    if (isError) {
      emailContainer.classList.add("after:invisible");
    }
    if (!isError) email.value = "";
  }, 3000);
}

submitEmail.addEventListener("click", () => {
  const inputValue = email.value.trim();

  if (inputValue === "") {
    showMessage("Email is required");
  } else if (!inputValue.includes("@")) {
    showMessage("Whoops, make sure it's an email");
  } else {
    showMessage("Thank You!", false);
  }
});

document.addEventListener("DOMContentLoaded", function () {
  const button = document.querySelector(".submitEmail");
  button.addEventListener("click", function (event) {
    event.preventDefault(); // Prevents default form submission
    console.log("Button clicked — default prevented.");
    // You can add your custom logic here
  });
});
