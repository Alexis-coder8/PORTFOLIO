const maleBtn= document.getElementById("male-btn");
const femaleBtn= document.getElementById("female-btn");

const maleSection = document.getElementById("male-section");
const femaleSection = document.getElementById("female-section");

const params = new URLSearchParams(window.location.search);

let categoryKey = (params.get("category") || "").toLowerCase();

const categoryAliases = {
    "elegant-evening-wear": "evening-wear",
    "fall-outfits": "fall-outfit",
    "old-school": "old-money"
};

categoryKey = categoryAliases[categoryKey] || categoryKey;

const currentMaleImages = (maleOutfits[categoryKey] || [])
    .map(image => `images/men/${image}`);

const currentFemaleImages = (femaleOutfits[categoryKey] || [])
    .map(image => `images/women/${image}`);

// Show men's fashion
maleBtn.addEventListener ("click", function () {
    maleSection.hidden = false;
    femaleSection.hidden = true;
    
    displayOutfits(currentMaleImages, maleSection);

    maleBtn.classList.add("active");
    femaleBtn.classList.remove("active");
});
 
// Show female's fashion
femaleBtn.addEventListener("click", function () {
     maleSection.hidden = true;
     femaleSection.hidden = false;
     
     displayOutfits(currentFemaleImages, femaleSection);

     maleBtn.classList.remove("active");
     femaleBtn.classList.add("active");
});

function displayOutfits(images, section) {
    const outfitGrid = section.querySelector(".outfit-grid");

    outfitGrid.innerHTML ="";

    images.forEach(function (image){
        const img = document.createElement("img");

        img.src = image;
        img.alt = "Fashion inspiration";

        outfitGrid.appendChild(img);
    })
}
displayOutfits(currentMaleImages, maleSection);