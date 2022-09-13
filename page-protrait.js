//1.it's not working when i put with "mission-2-Phoebe.js"
//2.When changing photos, how can I set the height to fit the photo-container(div)? 



const nextPhoto = document.getElementById('nextPhotoBtn');
const lastPhoto = document.getElementById('lastPhotoBtn');


const photoArray = ["image/Protrait/protrait3.jpg","image/Protrait/protrait1.jpg","image/Protrait/protrait4.jpg","image/Protrait/protrait5.jpg","image/Protrait/protrait6.jpg","image/Protrait/protrait7.jpg"]
const img = document.getElementById('photoNz')[0];


const photoNameArray = ["protrait 1","protrait 2","protrait 3","protrait 4","protrait 5","protrait 6"]
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
