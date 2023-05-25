// Populate the location dropdown
const locationSelect = document.getElementById('locationSelect');
locationsArray.forEach(location => {
    const option = document.createElement('option');
    option.value = location;
    option.text = location;
    locationSelect.appendChild(option);
});

// Populate the park type dropdown
const parkTypeSelect = document.getElementById('parkTypeSelect');
parkTypesArray.forEach(parkType => {
    const option = document.createElement('option');
    option.value = parkType;
    option.text = parkType;
    parkTypeSelect.appendChild(option);
});

// Display all parks initially
const parksContainer = document.getElementById('parksContainer');
nationalParksArray.forEach(park => {
    parksContainer.appendChild(createParkCard(park));
});

// Function to create a Bootstrap card for a park
function createParkCard(park) {
    const card = document.createElement('div');
    card.className = 'card col-md-4';

    const cardBody = document.createElement('div');
    cardBody.className = 'card-body';

    const cardTitle = document.createElement('h5');
    cardTitle.className = 'card-title';
    cardTitle.textContent = park.LocationName;

    const cardText = document.createElement('p');
    cardText.className = 'card-text';
    cardText.textContent = `${park.Address}, ${park.City}, ${park.State}, ${park.ZipCode}`;

    cardBody.appendChild(cardTitle);
    cardBody.appendChild(cardText);
    card.appendChild(cardBody);

    return card;
}

// Function to filter parks by location and type
function filterParks() {
    const selectedLocation = locationSelect.value;
    const selectedParkType = parkTypeSelect.value;

    // Clear the current cards
    while (parksContainer.firstChild) {
        parksContainer.removeChild(parksContainer.firstChild);
    }

    // Display cards for parks that match the selected location and park type
    nationalParksArray.forEach(park => {
        if ((!selectedLocation || park.State === selectedLocation) &&
            (!selectedParkType || park.LocationName.includes(selectedParkType))) {
            parksContainer.appendChild(createParkCard(park));
        }
    });
}

// Initial call to display all parks
filterParks();
