// navbar fixed
window.onscroll = function () {
  const header = document.querySelector("header");
  const fixedNav = header.offsetTop;

  if (window.scrollY > fixedNav) {
    header.classList.add("navbar-fixed");
  } else {
    header.classList.remove("navbar-fixed");
  }
};

// hamburger

const hamburger = document.querySelector("#hamburger");
const navMenu = document.querySelector("#nav-menu");

hamburger.addEventListener("click", function () {
  hamburger.classList.toggle("hamburger-active");
  navMenu.classList.toggle("hidden");
});

// klik diluar humberger
window.addEventListener("click", function (e) {
  if (e.target != hamburger && e.target != navMenu) {
    hamburger.classList.remove("hamburger-active");
    navMenu.classList.add("hidden");
  }
});

// Back to top button
const toTop = document.querySelector("#to-top");

window.addEventListener("scroll", () => {
  if (window.pageYOffset > 100) {
    toTop.classList.remove("hidden");
    toTop.classList.add("flex");
  } else {
    toTop.classList.remove("flex");
    toTop.classList.add("hidden");
  }
});

toTop.addEventListener("click", (e) => {
  e.preventDefault();
  window.scrollTo({ top: 0, behavior: "smooth" });
});

// Dark mode toggle
const darkToggle = document.querySelector("#dark-toggle");
const html = document.querySelector("html");

darkToggle.addEventListener("click", () => {
  if (darkToggle.checked) {
    html.classList.add("dark");
    localStorage.theme = "dark";
  } else {
    html.classList.remove("dark");
    localStorage.theme = "light";
  }
});

// move toggle position
if (
  localStorage.theme === "dark" ||
  (!("theme" in localStorage) &&
    window.matchMedia("(prefers-color-scheme: dark)").matches)
) {
  darkToggle.checked = true;
} else {
  darkToggle.checked = false;
}

function sendWhatsApp() {
  console.log("sendWhatsApp function called");
  const phonenumber = "+6281818494295";

  const nameElement = document.querySelector(".name");
  const emailElement = document.querySelector(".email");
  const messageElement = document.querySelector(".message");

  if (!nameElement || !emailElement || !messageElement) {
    console.error("One or more form elements not found");
    alert("Sorry, there was an error. Please try again later.");
    return;
  }

  const name = nameElement.value.trim();
  const email = emailElement.value.trim();
  const message = messageElement.value.trim();

  if (!name || !email || !message) {
    console.error("One or more form fields are empty");
    alert("Please fill in all fields before sending.");
    return;
  }

  console.log("Name:", name);
  console.log("email:", email);
  console.log("Message:", message);

  const url =
    `https://wa.me/${phonenumber}?text=` +
    encodeURIComponent(
      `*Name:* ${name}\n` +
        `*Subject:* ${email}\n` +
        `*Message:* ${message}\n\n` +
        "Thanks for Your message!!!"
    );

  console.log("WhatsApp URL:", url);

  window.open(url, "_blank");
}
