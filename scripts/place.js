
// STATIC WEATHER VALUES FOR ZURICH, SWITZERLAND

const temperatureCelsius = 2;
const windSpeedKmh = 12;

// WIND CHILL CALCULATION FUNCTION

function calculateWindChill(temperature, windSpeed) {

    return temperature <= 10 && windSpeed > 4.8
        ? Number((
            13.12 +
            0.6215 * temperature -
            11.37 * Math.pow(windSpeed, 0.16) +
            0.3965 * temperature *
            Math.pow(windSpeed, 0.16)
        ).toFixed(1))
        : "N/A";
}

// DISPLAY FOOTER AND WEATHER INFORMATION

function displayPageDetails() {

    const yearElement =
        document.querySelector("#current-year");

    const modifiedElement =
        document.querySelector("#last-modified");

    const windChillElement =
        document.querySelector("#wind-chill");

    // DISPLAY CURRENT YEAR

    if (yearElement) {
        yearElement.textContent =
            new Date().getFullYear();
    }

    // DISPLAY LAST MODIFIED DATE

    if (modifiedElement) {

        const modifiedDate =
            new Date(document.lastModified);

        modifiedElement.textContent =
            Number.isNaN(modifiedDate.getTime())
                ? document.lastModified
                : modifiedDate.toLocaleDateString(
                    "en-GB",
                    {
                        year: "numeric",
                        month: "long",
                        day: "numeric"
                    }
                );

        if (!Number.isNaN(modifiedDate.getTime())) {
            modifiedElement.dateTime =
                modifiedDate.toISOString().slice(0, 10);
        }
    }

    // CALCULATE AND DISPLAY WIND CHILL

    if (windChillElement) {

        const windChill =
            calculateWindChill(
                temperatureCelsius,
                windSpeedKmh
            );

        windChillElement.textContent =
            windChill === "N/A"
                ? "N/A"
                : `${windChill} °C`;
    }
}

// RUN WHEN THE PAGE LOADS

displayPageDetails();