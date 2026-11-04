const maleBtn= document.getElementById("male-btn");
const femaleBtn= document.getElementById("female-btn");

const maleSection = document.getElementById("male-section");
const femaleSection = document.getElementById("female-section");

// Show men's fashion
maleBtn.addEventListener ("click", function () {
    maleSection.hidden = false;
    femaleSection.hidden = true;

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