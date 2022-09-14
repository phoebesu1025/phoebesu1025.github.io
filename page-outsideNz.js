//1.it's not working when i put with "mission-2-Phoebe.js"
//2.When changing photos, how can I set the height to fit the photo-container(div)? 



const nextPhoto = document.getElementById('nextPhotoBtn');
const lastPhoto = document.getElementById('lastPhotoBtn');


const photoArray = ["image/Singapore/singapore6.jpg","image/Singapore/singapore2.jpg","image/Singapore/singapore3.jpg","image/Singapore/singapore4.jpg","image/Singapore/singapore5.jpg","image/Singapore/singapore7.jpg","image/Singapore/singapore1.jpg","image/hawaii/diamondhead-Hawaii.jpg","image/hawaii/Kualoa-ranch2.jpg","image/hawaii/Kualoa-ranch3.jpg"]
const img = document.getElementById('photoNz')[0];


const photoNameArray = ["Chang-i Airport, Singapore","Chang-i Airport,Singapore","Chang-i Airport, Singapore","Skyline View, Singapore","Marina Bay Sands Hotel, Singapore", "Marina Bay Sands Hotel, Singapore","SkyPark Observation Deck, Singapore", "Diamond Head, Honolulu", "Kualoa-ranch, Honolulu","Kualoa-ranch, Honolulu"]
const photoName = document.getElementById("photoName");

/*define the index from photoArray*/
let indexPhotoArray = 0;
let indexPhotoNameArray = 0;
/*--------------LAST BUTTON---------------*/
lastPhoto.addEventListener("click", function () {
    indexPhotoArray--;//-1-2-3
    if (indexPhotoArray < 0) {
        indexPhotoArray = photoArray.length - 1; //back to the index in the end
    }
    document.getElementById('photoNz').src = photoArray[indexPhotoArray];
})

lastPhoto.addEventListener("click", function () {
    indexPhotoNameArray--;//-1-2-3
    if (indexPhotoNameArray < 0) {
        indexPhotoNameArray = photoNameArray.length - 1; //back to the index in the end
    }
    document.getElementById('photoName').innerText = photoNameArray[indexPhotoNameArray];
})

/*--------------NEXT BUTTON----------------*/
nextPhoto.addEventListener("click", function () {
    indexPhotoArray++;
    if (indexPhotoArray > photoArray.length - 1) {
        indexPhotoArray = 0; //reset back to index[0] photo
    }
    document.getElementById('photoNz').src = photoArray[indexPhotoArray];
})

nextPhoto.addEventListener("click", function () {
    indexPhotoNameArray++;
    if (indexPhotoNameArray > photoNameArray.length - 1) {
        indexPhotoNameArray = 0;// reset back to index[0] photoName
    }
    document.getElementById('photoName').innerText = photoNameArray[indexPhotoNameArray];
})
