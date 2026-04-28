const links = [
    { name: "Ruby", url: "https://misterge-laoshi.global.ssl.fastly.net/?utm_source=ubghub.org&utm_medium=referral&utm_campaign=ubghub.org" },
    { name: "PeteZah", url: "https://petezahgames.com/?utm_source=ubghub.org&utm_medium=referral&utm_campaign=ubghub.org" },
    { name: "EliteGamez", url: "https://elite-gamez.github.io/?utm_source=ubghub.org&utm_medium=referral&utm_campaign=ubghub.org" },
    { name: "PizaGame", url: "https://pizagame.com/?utm_source=ubghub.org&utm_medium=referral&utm_campaign=ubghub.org" },
    { name: "FrogArcade", url: "https://frogiesarcade.win/?utm_source=ubghub.org&utm_medium=referral&utm_campaign=ubghub.org" },
    { name: "Extra Link (won't show)", url: "https://example.com" }
];

// 5 links cuz i cant find more
const limitedLinks = links.slice(0, 5);

const container = document.getElementById("linkContainer");

limitedLinks.forEach(link => {
    const a = document.createElement("a");
    a.href = link.url;
    a.textContent = link.name;
    a.target = "_blank";
    a.className = "link";

    container.appendChild(a);
});
