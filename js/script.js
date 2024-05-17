setCookie = (cName, cValue, expDate) => {
  let date = new Date();
  date.setTime(date.getTime() + expDate * 24 * 60 * 60 * 1000);
  const expires = "expires=" + date.toUTCString();
  document.cookie = cName + "=" + cValue + "; " + expires + "; path=/";
};

getCookie = (cName) => {
  const name = cName + "=";
  const cDecoded = decodeURIComponent(document.cookie);
  const cArr = cDecoded.split("; ");
  let value;
  cArr.forEach((val) => {
    if (val.indexOf(name) === 0) value = val.substring(name.length);
  });

  return value;
};

document.querySelector(".cookie_btn").addEventListener("click", () => {
  document.querySelector(".cookie").classList.add("visually-hidden");

  setCookie("cookie", true, 3);
});

cookieMessage = () => {
  if (!getCookie("cookie")) {
    setTimeout(() => {
      document.querySelector(".cookie").classList.remove("visually-hidden");
    }, 5000);
  }
};

window.addEventListener("load", cookieMessage);

// Form submit

document
  .getElementById("contactForm")
  .addEventListener("submit", function (event) {
    event.preventDefault();

    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const tel = document.getElementById("tel").value;

    localStorage.setItem("contactName", name);
    localStorage.setItem("contactEmail", email);
    localStorage.setItem("contactTelephone", tel);

    window.location.href = "thankyou.html";
  });

// Blog slider

var swiper = new Swiper(".slide-content", {
  slidesPerView: 3,
  spaceBetween: 65,
  loop: true,

  autoplay: {
    delay: 5000,
    disableOnInteraction: false,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  breakpoints: {
    0: {
      slidesPerView: 1,
    },
    768: {
      slidesPerView: 2,
    },
    1200: {
      slidesPerView: 3,
    },
  },
});
