const aboutContainer = document.getElementById('about-container')
aboutContainer.addEventListener('mouseover', function () {
    console.log("what")
})

//use function within html & function eventlistener
/*for contactme*/
const alertFunc = () => {
    return alert("Thank you for your equery, I'll get back to you soon.")
}
/*----------------------------*/

const signUpBtn = document.querySelector(".signUpBtn");
signUpBtn.addEventListener('click', function () {
    return alert("Thank you for Signing up, I'll update more photos!")
});

