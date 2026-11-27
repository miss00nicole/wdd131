
// Product Array
const products = [
    {
        id: "fc-1888",
        name: "flux capacitor",
        averagerating: 4.5
    },
    {
        id: "fc-2050",
        name: "power laces",
        averagerating: 4.7
    },
    {
        id: "fs-1987",
        name: "time circuits",
        averagerating: 3.5
    },
    {
        id: "ac-2000",
        name: "low voltage reactor",
        averagerating: 3.9
    },
    {
        id: "jj-1969",
        name: "warp equalizer",
        averagerating: 5.0
    }
];

// Populate Product Select Options
const productSelect = document.querySelector("#productName");

if (productSelect) {
    products.forEach((product) => {
        const option = document.createElement("option");

        option.value = product.name;
        option.textContent = product.name;

        productSelect.appendChild(option);
    });
}

// Display Last Modified Date
const lastModified = document.querySelector("#lastModified");

if (lastModified) {
    const modifiedDate = new Date(document.lastModified);
    lastModified.textContent = modifiedDate.toLocaleString();
}

// Review Confirmation Page
const reviewCountElement = document.querySelector("#reviewCount");

if (reviewCountElement) {

    // Get submitted form // Display Last Modified Date
const lastModified = document.querySelector("#lastModified");

if (lastModified) {
    lastModified.textContent = document.lastModified;
}information
    const params = new URLSearchParams(window.location.search);

    const product = params.get("productName");
    const rating = params.get("rating");
    const date = params.get("installDate");
    const features = params.getAll("features");
    const writtenReview = params.get("writtenReview");
    const userName = params.get("userName");

    // Check that the form was submitted successfully
    if (product && rating && date) {

        // Display submitted information
        document.querySelector("#displayProduct").textContent =
            product;

        document.querySelector("#displayRating").textContent =
            rating + " out of 5 stars";

        document.querySelector("#displayDate").textContent =
            date;

        document.querySelector("#displayFeatures").textContent =
            features.length > 0
                ? features.join(", ")
                : "No features selected";

        document.querySelector("#displayReview").textContent =
            writtenReview || "No written review provided";

        document.querySelector("#displayName").textContent =
            userName || "Anonymous";

        // Get the existing review count
        let reviewCount =
            Number(localStorage.getItem("reviewCount")) || 0;

        // Increase review count by one
        reviewCount++;

        // Save updated count in localStorage
        localStorage.setItem("reviewCount", reviewCount);

        // Display updated count
        reviewCountElement.textContent = reviewCount;

    } else {

        // No valid submission
        document.querySelector(".confirmation").innerHTML =
            "<h2>No review information found.</h2>" +
            '<p>Please submit a review first.</p>' +
            '<a href="form.html" class="back-btn">Go to Review Form</a>';

    }
}
