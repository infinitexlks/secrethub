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

const container = document.getElementById('linkContainer');
const toggleButton = document.getElementById('toggleButton');

let linksVisible = false; // track current state

// Generate links
links.forEach(link => {
  if (link.show) {
    const a = document.createElement('a');
    a.href = link.url;
    a.target = '_blank';
    a.textContent = link.name;
    a.className = 'link';

    // Optional: add a hover effect or animation on each link
    a.addEventListener('mouseenter', () => {
      a.style.transform = 'scale(1.05)';
    });
    a.addEventListener('mouseleave', () => {
      a.style.transform = 'scale(1)';
    });

    container.appendChild(a);
  }
});

// Toggle display on button click
toggleButton.addEventListener('click', () => {
  linksVisible = !linksVisible;
  if (linksVisible) {
    container.classList.remove('hide');
    container.classList.add('show');
    container.style.display = 'flex'; // ensure it's visible
    toggleButton.textContent = 'Hide Links';
  } else {
    // Animate fade out
    container.classList.remove('show');
    container.classList.add('hide');
    // Hide after transition
    setTimeout(() => {
      container.style.display = 'none';
    }, 300);
    toggleButton.textContent = 'Show Links';
  }
});
