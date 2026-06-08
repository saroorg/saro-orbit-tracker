async function getISS() {

    try {

        const response =
            await fetch(
                "https://api.wheretheiss.at/v1/satellites/25544"
            );

        const data = await response.json();

        document.getElementById("lat").innerText =
            "Latitude: " + data.latitude.toFixed(4);

        document.getElementById("lon").innerText =
            "Longitude: " + data.longitude.toFixed(4);

    } catch(error) {

        console.error(error);

    }

}

getISS();
