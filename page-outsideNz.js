//1.it's not working when i put with "mission-2-Phoebe.js"
//2.When changing photos, how can I set the height to fit the photo-container(div)? 



const nextPhoto = document.getElementById('nextPhotoBtn');
const lastPhoto = document.getElementById('lastPhotoBtn');


const photoArray = ["image/Singapore/singapore1.jpg","image/Singapore/singapore2.jpg","image/Singapore/singapore3.jpg","image/Singapore/singapore4.jpg","image/Singapore/singapore5.jpg","image/Singapore/singapore6.jpg","image/Singapore/singapore7.jpg","image/hawaii/diamondhead-Hawaii.jpg","image/hawaii/Kualoa-ranch2.jpg","image/hawaii/Kualoa-ranch3.jpg"]
const img = document.getElementById('photoNz')[0];


const photoNameArray = ["Singapore 1","Singapore 2","Singapore 3","Singapore 4","Singapore 5", "Singapore 6","Singapore 7", "Hawaii 1", "Hawaii 2","Hawaii 3"]
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