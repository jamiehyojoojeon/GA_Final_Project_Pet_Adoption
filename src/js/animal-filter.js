const animalTypeEl = document.getElementById('animal-type');
const animalAgeEl = document.getElementById('age');
const animalGenderEl = document.getElementById('gender');
const animalLocationEl = document.getElementById('location');
const filterableAnimalList = document.getElementById('filterable-animal-list');

// Create elements in html
const addItems = (animalObj, index) => {
	const outerDiv = document.createElement("div");
	outerDiv.className = "adoptable-pet-item";

	const link = document.createElement("a");
	link.href = "pet/?id=" + index;

	const image = document.createElement("img");
	image.setAttribute("src", "../../css/images/" + animalObj.images[0]);

	const infoContainerDiv = document.createElement("div");
	infoContainerDiv.className = "adoptable-pet-info-container";

	const infoDiv = document.createElement("div");
	infoDiv.className = "pet-info";

	const animalName = document.createElement("h3");
	animalName.innerHTML = animalObj.name;

	const animalBreed = document.createElement("p");
	animalBreed.className = "breed";
	animalBreed.innerHTML = animalObj.breed;

	const animalAge = document.createElement("p");
	animalAge.className = "age";
	animalAge.innerHTML = animalObj.lifeStage;

	const animalGender = document.createElement("p");
	animalGender.className = "gender";
	animalGender.innerHTML = animalObj.gender;

	infoDiv.appendChild(animalName);
	infoDiv.appendChild(animalBreed);
	infoDiv.appendChild(animalAge);
	infoDiv.appendChild(animalGender);
	infoContainerDiv.appendChild(infoDiv);
	link.appendChild(image);
	link.appendChild(infoContainerDiv);
	outerDiv.appendChild(link);
	filterableAnimalList.appendChild(outerDiv);
}

//	Returns true when animalType matches the filter or returns true if filter is "all"
const matchesAnimalTypeFilter = (filterAnimalTypeValue, animalObjAnimalType) => {
	if (filterAnimalTypeValue === 'All') {
		return true;
	}
	if (filterAnimalTypeValue.toLowerCase() === animalObjAnimalType) {
		return true;
	}
	return false;
}

const matchesAnimalAgeFilter = (filterAnimalAgeValue, animalObjAnimalAge) => {
	if (filterAnimalAgeValue === 'All') {
		return true;
	}
	if (filterAnimalAgeValue === animalObjAnimalAge) {
		return true;
	}
	if (filterAnimalAgeValue === 'Kitten/Puppy' &&
		(animalObjAnimalAge === "Kitten" || animalObjAnimalAge === "Puppy")) {
		return true;
	}
	return false;
}
const matchesAnimalGenderFilter = (filterAnimalGenderValue, animalObjAnimalGender) => {
	if (filterAnimalGenderValue === 'All') {
		return true;
	}
	if (filterAnimalGenderValue === animalObjAnimalGender) {
		return true;
	}
	return false;
}
const matchesAnimalLocationFilter = (filterAnimalLocationValue, animalObjAnimalLocation) => {
	if (filterAnimalLocationValue === 'All') {
		return true;
	}
	if (filterAnimalLocationValue === animalObjAnimalLocation) {
		return true;
	}
	return false;
}

const filterList = () => {
	filterableAnimalList.innerHTML = "";

	const animalType = animalTypeEl.value;
	const animalAge = animalAgeEl.value;
	const animalGender = animalGenderEl.value;
	const animalLocation = animalLocationEl.value;

	animalInfoList.forEach((animalObj, index) => {
		if (matchesAnimalTypeFilter(animalType, animalObj.animalType) &&
			matchesAnimalAgeFilter(animalAge, animalObj.lifeStage) &&
			matchesAnimalGenderFilter(animalGender, animalObj.gender) &&
			matchesAnimalLocationFilter(animalLocation, animalObj.location))
			addItems(animalObj, index);
	});
}
filterList();
