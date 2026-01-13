
function Pet(name, age, breed, gender, service) {
    this.name = name;
    this.age = age;
    this.breed = breed;
    this.gender = gender;
    this.service = service;
}

let pet1 = {
    name: "Whiskers",
    age: 3,
    gender: "Female",
    service: "Grooming",
    breed: "Persian Cat"
};

let pet2 = {
    name: "Buddy",
    age: 5,
    gender: "Male",
    service: "Bath",
    breed: "Golden Retriever"
};

let pet3 = {
    name: "Mittens",
    age: 2,
    gender: "Female",
    service: "Nail Trim",
    breed: "Tabby Cat"
};

let pet4 = new Pet("Max", 4, "German Shepherd", "Male", "Full Grooming");
let pet5 = new Pet("Luna", 3, "Siamese Cat", "Female", "Bath and Trim");
let pet6 = new Pet("Rocky", 6, "Bulldog", "Male", "Nail Trim");


let petsList = [pet1, pet2, pet3];


function displayPets() {
    let petNamesDiv = document.getElementById("petNames");
    let olList = document.createElement("ol");
    
    for (let i = 0; i < petsList.length; i++) {
        let listItem = document.createElement("li");
        listItem.textContent = petsList[i].name;
        olList.appendChild(listItem);
    }
    
    petNamesDiv.appendChild(olList);
}

displayPets();
