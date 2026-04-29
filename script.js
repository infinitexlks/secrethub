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
];

const container = document.getElementById('linkContainer');
const toggleButton = document.getElementById('toggleButton');

let linksShown = false; // track current state

// Generate links
links.forEach(link => {
  if (link.show) {
    const a = document.createElement('a');
    a.href = link.url;
    a.target = '_blank';
    a.textContent = link.name;
    a.className = 'link';

    container.appendChild(a);
  }
});

// Event listener for toggle button
toggleButton.addEventListener('click', () => {
  linksShown = !linksShown;
  if (linksShown) {
    container.style.display = 'flex';
    toggleButton.textContent = 'Hide Links';
  } else {
    container.style.display = 'none';
    toggleButton.textContent = 'Show Links';
  }
});
