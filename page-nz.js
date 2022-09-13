//1.it's not working when i put with "mission-2-Phoebe.js"
//2.When changing photos, how can I set the height to fit the photo-container(div)? 



const nextPhoto = document.getElementById('nextPhotoBtn');
const lastPhoto = document.getElementById('lastPhotoBtn');


const photoArray = ["image/Wellington/welly1.jpg","image/Wellington/welly3.jpg","image/Wellington/welly4.jpg","image/Wellington/welly5.jpg","image/Wellington/welly6.jpg","image/Wellington/welly7.jpg","image/Wellington/welly8.jpg","image/Wellington/welly9.jpg","image/Wellington/welly10.jpg","image/Wellington/welly11.jpg","image/Wellington/welly12.jpg","image/Wellington/welly13.jpg","image/Wellington/welly17.jpg","image/Wellington/welly18.jpg","image/Wellington/welly20.jpg"]
const img = document.getElementById('photoNz')[0];


const photoNameArray = ["WaterFront 1","WaterFront 2","WaterFront 3","WaterFront 4", "Mt Victoria 1","Mt Victoria 2", "Mt Victoria 3", "Mt Victoria 4","Mt Victoria 5", "WaterFront Sculture 1", "WaterFront Sculpture 2", "Mt Victoria sculpture","AirNZ","WaterFront Sunset","Red Rocks"]
const photoName = document.getElementById("photoName");

let indexPhotoArray=0;
let indexPhotoNameArray=0;


nextPhoto.addEventListener("click", function(){
    indexPhotoArray++;
    if(indexPhotoArray>photoArray.length-1) {indexPhotoArray=0;}
    document.getElementById('photoNz').src=photoArray[indexPhotoArray];
})

nextPhoto.addEventListener("click", function(){
    indexPhotoNameArray++;
    if(indexPhotoNameArray>photoNameArray.length-1) {indexPhotoNameArray=0;}
    document.getElementById('photoName').innerText=photoNameArray[indexPhotoNameArray];
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