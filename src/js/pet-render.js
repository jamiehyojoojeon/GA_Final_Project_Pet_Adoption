// Grab everything after question mark (sending data to web page code)
const queryString = window.location.search; // 'id=#'
const urlParams = new URLSearchParams(queryString);
const index = urlParams.get('id')

// Get pet info for the id given 
const petInfo = animalInfoList[index];

// Get pet info data and populate HTML page with data
const petName = document.getElementById('petName');
const petDesc = document.getElementById('petDesc');
const petBreed = document.getElementById('petBreed');
const petAge = document.getElementById('petAge');
const petGender = document.getElementById('petGender');
const petLocation = document.getElementById('petLocation');

petName.innerHTML = petInfo.name;
petDesc.innerHTML = petInfo.desc;
petBreed.innerHTML = petInfo.breed;
petAge.innerHTML = petInfo.lifeStage;
petGender.innerHTML = petInfo.gender;
petLocation.innerHTML = petInfo.location;

// Get pet images 
const gallery = document.getElementById('gallery');
const fullImage = document.getElementById('full-image');
fullImage.setAttribute('src', '../../../css/images/' + petInfo.images[0]);

petInfo.images.forEach((image) => {
    let thumbImage = document.createElement('img');
    thumbImage.setAttribute('src', '../../../css/images/' + image);

    thumbImage.addEventListener('click', () => {
        fullImage.setAttribute('src', '../../../css/images/' + image);
    })

    gallery.appendChild(thumbImage);
}) 
