
const temples = [
    {
        templeName: "Aba Nigeria",
        location: "Aba, Nigeria",
        dedicated: "2005, August, 7",
        area: 11500,
        imageUrl: "images/sandiego-temple.jpg"
    },
    {
        templeName: "Manti Utah",
        location: "Manti, Utah",
        dedicated: "1888, May, 21",
        area: 74792,
        imageUrl: "images/sandiego-temple.jpg"
    },
    {
        templeName: "Payson Utah",
        location: "Payson, Utah",
        dedicated: "2015, June, 7",
        area: 96630,
        imageUrl: "images/sandiego-temple.jpg"
    },
    {
        templeName: "Yigo Guam",
        location: "Yigo, Guam",
        dedicated: "2020, May, 2",
        area: 6861,
        imageUrl: "images/sandiego-temple.jpg"
    },
    {
        templeName: "Washington D.C.",
        location: "Kensington, Maryland",
        dedicated: "1974, November, 19",
        area: 156558,
        imageUrl: "images/sandiego-temple.jpg"
    },
    {
        templeName: "Lima Peru",
        location: "Lima, Peru",
        dedicated: "1986, January, 10",
        area: 9600,
        imageUrl: "images/sandiego-temple.jpg"
    },
    {
        templeName: "San Diego California",
        location: "San Diego, California",
        dedicated: "1993, April, 25",
        area: 72000,
        imageUrl: "images/sandiego-temple.jpg"
    },
    {
        templeName: "London England",
        location: "London, England",
        dedicated: "1958, September, 7",
        area: 42000,
        imageUrl: "images/sandiego-temple.jpg"
    },
    {
        templeName: "Rome Italy",
        location: "Rome, Italy",
        dedicated: "2019, March, 10",
        area: 41010,
        imageUrl: "images/sandiego-temple.jpg"
    }
];

// Select HTML elements

const templeGrid = document.getElementById("templeGrid");
const galleryTitle = document.getElementById("galleryTitle");

const navLinks = document.querySelectorAll("#primaryNav a");

const hamburgerBtn = document.getElementById("hamburgerBtn");
const primaryNav = document.getElementById("primaryNav");

// Display temple cards

function displayTemples(templeList) {

    templeGrid.innerHTML = "";

    if (templeList.length === 0) {
        templeGrid.innerHTML = "<p>No temples found.</p>";
        return;
    }

    templeList.forEach((temple) => {

        const card = document.createElement("article");

        card.classList.add("temple-card");

        const name = document.createElement("h3");
        name.textContent = temple.templeName;

        const location = document.createElement("p");
        location.innerHTML =
            `<strong>Location:</strong> ${temple.location}`;

        const dedicated = document.createElement("p");
        dedicated.innerHTML =
            `<strong>Dedicated:</strong> ${temple.dedicated}`;

        const area = document.createElement("p");
        area.innerHTML =
            `<strong>Area:</strong> ${temple.area.toLocaleString()} sq ft`;

        const image = document.createElement("img");
        image.src = temple.imageUrl;
        image.alt = `${temple.templeName} Temple`;
        image.loading = "lazy";
        image.width = 400;
        image.height = 220;

        card.append(name, location, dedicated, area, image);

        templeGrid.appendChild(card);

    });
}

// Filter temples

function filterTemples(category) {

    let filteredTemples = temples;

    if (category === "old") {

        filteredTemples = temples.filter((temple) => {
            const year = Number(temple.dedicated.split(",")[0]);
            return year < 1900;
        });

    } else if (category === "new") {

        filteredTemples = temples.filter((temple) => {
            const year = Number(temple.dedicated.split(",")[0]);
            return year > 2000;
        });

    } else if (category === "large") {

        filteredTemples = temples.filter((temple) => {
            return temple.area > 90000;
        });

    } else if (category === "small") {

        filteredTemples = temples.filter((temple) => {
            return temple.area < 10000;
        });

    }

    galleryTitle.textContent =
        category.charAt(0).toUpperCase() + category.slice(1);

    displayTemples(filteredTemples);

    navLinks.forEach((link) => {

        const selected = link.dataset.filter === category;

        link.classList.toggle("active", selected);

        if (selected) {
            link.setAttribute("aria-current", "page");
        } else {
            link.removeAttribute("aria-current");
        }

    });
}

// Navigation links

navLinks.forEach((link) => {

    link.addEventListener("click", (event) => {

        event.preventDefault();

        filterTemples(link.dataset.filter);

        primaryNav.classList.remove("open");

        hamburgerBtn.setAttribute("aria-expanded", "false");

    });

});

// Dynamic copyright year

document.getElementById("copyrightYear").textContent =
    new Date().getFullYear();

// Dynamic last modified date

document.getElementById("lastModifiedDate").textContent =
    document.lastModified;

// Hamburger menu

hamburgerBtn.addEventListener("click", () => {

    const isOpen = primaryNav.classList.toggle("open");

    hamburgerBtn.setAttribute("aria-expanded", isOpen);

});

// Display all temples when page loads

displayTemples(temples);
