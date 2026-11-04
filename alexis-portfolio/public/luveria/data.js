const maleOutfit = {
    "evening-wear": [
        "elegantmen.jpg",
        "elegantmen8(2).jpg"
    ],

    "casual-chic": [
        "Casual.jpg",
        "casual8men.jpg",
        "casual67men(3).jpg",
        "casualfitmen.jpg",
        "casualmen.jpg"    
    ],

    "ball-style": [
        "ballsuitmen.jpg",
        "ballsuitmen33.jpg",
        "ballsuitsmen7.jpg"
    ],

    "romantic": [
        "romanticmen(3).jpg",
        "romanticmen2.jpg",
        "romanticmen4.jpg"
    ],

    "african-style": [
        "african7stylemen.jpg",
        "africanstyle5.jpg",
        "africanstyle5men.jpg",
        "africanstylemen(2).jpg",
        "africanstylemen.jpg",
        "africanstylemen9.jpg",
        "africanstylemen67.JPG",
    ],

    "college-style": [
        "collegemenwear44.JPG",
        "collegewearmen(2).jpg",
        "collegewearmen.jpg"
    ],

    "old-money": [
        "oldmoneymen3.jpg",
        "oldmoneymen9(2).jpg",
        "oldmoneymen56.jpg"
    ],

    "fall-outfit": [
        "fallmen(3).jpg",
        "fallstylemen.jpg",
        "fallstylemen77.jpg",
    ],

    "street-style": [
        "street54stylemen.jpg",
        "street67stylemen.jpg",
        "streetstyle4men.jpg",
        "streetstyle5men.jpg",
        "streetstyle7men.jpg",
        "streetstyle89.jpg",
        "streetstylemen.jpg"
    ]
};

const femaleOutfits = {
    "evening-wear": [
        "evening-wearwomen.jpg",
        "elegant89women.JPG"
    ],

    "casual-chic": [
        "casual7women.jpg",
        "Casual-Chicwomen.jpg",
        "casualwomen0.jpg",
        "casualwomen78 (4).jpg",
        "casualwomenv.jpg"
    ],

    "romantic": [
        "romanticwomen (2).jpg",
        "Romanticwomen67.jpg"
    ],

    "ball-style": [
        "ballgownwomen.jpg",
        "ballgownwomen45.jpg",
        "ballgownwomen54.jpg",
        "ballgownwomen67.jpg",
        "ballgownwomen67 (2).jpg",
        "ballgownwomen90.jpg",
        "ballgownwomen(2).jpg"
    ],

    "african-style": [
        "africanstyle.jpg",
        "africanstylewomen(2).jpg",
        "africanstylewomen.jpg"
    ],

    "college-style": [
        "college3women.jpg",
        "College-Stylewomen(3).jpg",
        "collegewear55women.jpg",
        "collegewearwomen7.jpg",
        "collegewomen88.jpg"
    ],

    "old-school": [
        "oldmoneywomen (3).jpg",
        "oldmoneywomen8.jpg"
    ],

    "street-style": [
        "streetstylewoman.jpg"
    ],

    "fall-outfit": [
        "FALLwomen (2).jpg",
        "fallwomen.jpg",
        "fallwomen8.jpg",
        "fallwomen45.jpg",
        "fallwomen65(2).jpg",
        "fallwomen67.jpg",
        "fallstyle53women.jpg"
    ]
};

// Get the selected category from the URL
const params = new URLSearchParams(window.location.search);

let categoryKey = (params.get("category") || "").toLowerCase();

// Match older category names to our data.js keys
const categoryAliases = {
    "elegant-evening-wear": "evening-wear",
    "fall-outfits": "fall-outfit"
};

categoryKey = categoryAliases[categoryKey] || categoryKey;

// Get the images for the selected category
const currentMaleImages = (maleOutfits[categoryKey] || [])
    .map(image => `images/men/${image}`);

const currentFemaleImages = (femaleOutfits[categoryKey] || [])
    .map(image => `images/women/${image}`);

// Display men's images first
displayOutfits(currentMaleImages, maleSection);