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
    card.className = 'card col-md-4 flip-card';

    const cardInner = document.createElement('div');
    cardInner.className = 'flip-card-inner';
    
    const cardFront = document.createElement('div');
    cardFront.className = 'card-body flip-card-front';

    const cardTitle = document.createElement('h5');
    cardTitle.className = 'card-title';
    cardTitle.textContent = park.LocationName;

    const cardImg = document.createElement('img');
    cardImg.src = park.img;
    cardImg.className = 'card-img-top';

    cardFront.appendChild(cardImg);
    cardFront.appendChild(cardTitle);

    const cardBack = document.createElement('div');
    cardBack.className = 'card-body flip-card-back';

    const cardText = document.createElement('p');
    cardText.className = 'card-text';
    cardText.textContent = `${park.Address}, ${park.City}, ${park.State}, ${park.ZipCode}`;

    cardBack.appendChild(cardText);

    cardInner.appendChild(cardFront);
    cardInner.appendChild(cardBack);

    card.appendChild(cardInner);

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
