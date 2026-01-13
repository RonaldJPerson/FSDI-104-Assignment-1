// Create pet objects
const pet1 = {
    name: "Whiskers",
    age: 3,
    gender: "Female",
    service: "Grooming",
    breed: "Persian Cat"
};

const pet2 = {
    name: "Buddy",
    age: 5,
    gender: "Male",
    service: "Bath",
    breed: "Golden Retriever"
};

const pet3 = {
    name: "Mittens",
    age: 2,
    gender: "Female",
    service: "Nail Trim",
    breed: "Tabby Cat"
};

// Create array with pet objects
const petsList = [pet1, pet2, pet3];

// Function to display pet names
function displayPets() {
    const petNamesDiv = document.getElementById("petNames");
    const olList = document.createElement("ol");
    
    for (let i = 0; i < petsList.length; i++) {
        const listItem = document.createElement("li");
        listItem.textContent = petsList[i].name;
        olList.appendChild(listItem);
    }
    
    petNamesDiv.appendChild(olList);
}

// Call the function when the page loads
displayPets();
