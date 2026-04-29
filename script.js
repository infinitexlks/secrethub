/* =========================
   LINK DATA
========================= */
const links = [
  {
    name: "Ruby",
    url: "https://misterge-laoshi.global.ssl.fastly.net/?utm_source=ubghub.org&utm_medium=referral&utm_campaign=ubghub.org",
    show: true
  },
  {
    name: "PeteZah",
    url: "https://petezahgames.com/?utm_source=ubghub.org&utm_medium=referral&utm_campaign=ubghub.org",
    show: true
  },
  {
    name: "EliteGamez",
    url: "https://elite-gamez.github.io/?utm_source=ubghub.org&utm_medium=referral&utm_campaign=ubghub.org",
    show: true
  },
  {
    name: "PizaGame",
    url: "https://pizagame.com/?utm_source=ubghub.org&utm_medium=referral&utm_campaign=ubghub.org",
    show: true
  },
  {
    name: "FrogArcade",
    url: "https://frogiesarcade.win/?utm_source=ubghub.org&utm_medium=referral&utm_campaign=ubghub.org",
    show: true
  }
];

/* =========================
   ELEMENTS
========================= */
const container = document.getElementById("linkContainer");
const toggleButton = document.getElementById("toggleButton");

let linksVisible = false;

/* =========================
   BUILD LINKS
========================= */
function createLinks() {
  container.innerHTML = ""; // safety reset

  links.forEach(link => {
    if (!link.show) return;

    const a = document.createElement("a");
    a.href = link.url;
    a.target = "_blank";
    a.textContent = link.name;
    a.className = "link";

    container.appendChild(a);
  });
}

/* =========================
   TOGGLE FUNCTION
========================= */
function toggleLinks() {
  linksVisible = !linksVisible;

  if (linksVisible) {
    container.classList.add("show");
    container.classList.remove("hide");
    toggleButton.textContent = "Hide Links";
  } else {
    container.classList.remove("show");
    container.classList.add("hide");
    toggleButton.textContent = "Show Links";
  }
}

/* =========================
   INIT
========================= */
createLinks();
toggleButton.addEventListener("click", toggleLinks);
