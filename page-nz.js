const nextPhoto = document.getElementById('nextPhotoBtn');
const lastPhoto = document.getElementById('lastPhotoBtn');

const img = document.getElementById('photoNz')[0];
const photoArray = ["image/Wellington/welly1.jpg","image/Wellington/welly2.jpg","image/Wellington/welly3.jpg"]

let index=0;

const photoName = document.getElementById("photoName");

nextPhoto.addEventListener("click", function(){
    index++;
    if(index>photoArray.length-1) {index=0;}
    document.getElementById('photoNz').src=photoArray[index];
})

/*
nextPhoto.addEventListener('click', function(){ 
    document.getElementById('photoNz').src = "image/Wellington/welly2.jpg";
    document.getElementById("photoName").innerText = "Wellington Waterfront"
    })


    /*it's not working when i put with "mission-2-Phoebe.js"*/
/*
    const nextPhoto1 = document.getElementById('nextPhotoBtn');
    nextPhoto1.addEventListener('click', function(){ 
    if(document.getElementById('photoNz').src == "image/Wellington/welly2.jpg") {
       return document.getElementById('photoNz').src = "image/Wellington/welly3.jpg"
    }
})

*/