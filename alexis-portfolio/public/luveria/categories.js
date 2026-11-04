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

     maleBtn.classList.remove("active");
     femaleBtn.classList.add("active");
});