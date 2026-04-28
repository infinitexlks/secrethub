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
    },
    {
        name: "Extra Link (won't show)",
        url: "https://example.com",
        show: false
    }
];

const container = document.getElementById("linkContainer");

// only show links where show === true
links
    .filter(link => link.show)
    .forEach(link => {
        const a = document.createElement("a");
        a.href = link.url;
        a.textContent = link.name;
        a.target = "_blank";
        a.className = "link";

        container.appendChild(a);
    });
