// Populate the dropdown
const mountainSelect = document.getElementById('mountainSelect');
mountainsArray.forEach(mountain => {
    const option = document.createElement('option');
    option.value = mountain.name;
    option.text = mountain.name;
    mountainSelect.appendChild(option);
});

// Function to display mountain details
function displayMountainDetails() {
    // Get the selected mountain
    const selectedMountainName = mountainSelect.value;
    const selectedMountain = mountainsArray.find(mountain => mountain.name === selectedMountainName);

    // Get elements to update
    const mountainCard = document.getElementById('mountainCard');
    const mountainImg = document.getElementById('mountainImg');
    const mountainName = document.getElementById('mountainName');
    const mountainElevation = document.getElementById('mountainElevation');
    const mountainEffort = document.getElementById('mountainEffort');
    const mountainDesc = document.getElementById('mountainDesc');
    const mountainCoords = document.getElementById('mountainCoords');

    // Update elements
    mountainImg.src = selectedMountain.img;
    mountainName.textContent = selectedMountain.name;
    mountainElevation.textContent = `Elevation: ${selectedMountain.elevation} feet`;
    mountainEffort.textContent = `Effort: ${selectedMountain.effort}`;
    mountainDesc.textContent = selectedMountain.desc;
    mountainCoords.textContent = `Coordinates: Lat: ${selectedMountain.coords.lat}, Lng: ${selectedMountain.coords.lng}`;

    // Show the card
    mountainCard.style.display = 'block';
}