//1.it's not working when i put with "mission-2-Phoebe.js"
//2.When changing photos, how can I set the height to fit the photo-container(div)? 


/*make nextPhoto and lastPhoto link back to html button by ID*/
const nextPhoto = document.getElementById('nextPhotoBtn');
const lastPhoto = document.getElementById('lastPhotoBtn');


/*create Array to store all the pitcure and name*/
const photoArray = ["image/Wellington/welly8.jpg", "image/Wellington/welly9.jpg","image/Wellington/welly18.jpg", "image/Wellington/welly10.jpg","image/Wellington/welly6.jpg", "image/Wellington/welly7.jpg",  "image/Wellington/welly1.jpg", "image/Wellington/welly3.jpg", "image/Wellington/welly4.jpg", "image/Wellington/welly5.jpg", "image/Wellington/welly12.jpg", "image/Wellington/welly17.jpg", "image/Wellington/welly20.jpg"]

const photoNameArray = ["Mt Victoria, Wellington", "Mt Victoria, Wellington", "Waterfront, Wellington","Mt Victoria, Wellington", "Mt Victoria, Wellington", "Mt Victoria, Wellington","WaterFront, Wellington", "WaterFront, Wellington", "WaterFront, Wellington", "WaterFront, Wellington",  "WaterFront Sculture, Wellington", "AirNZ", , "Red Rocks"]


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



/*
nextPhoto.addEventListener('click', function(){ 
    document.getElementById('photoNz').src = "image/Wellington/welly2.jpg";
    document.getElementById("photoName").innerText = "Wellington Waterfront"
    })


    const nextPhoto1 = document.getElementById('nextPhotoBtn');
    nextPhoto1.addEventListener('click', function(){ 
    if(document.getElementById('photoNz').src == "image/Wellington/welly2.jpg") {
       return document.getElementById('photoNz').src = "image/Wellington/welly3.jpg"
    }
})

*/