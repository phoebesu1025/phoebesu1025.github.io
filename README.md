# phoebesu1025.github.io
<!DOCTYPE html>

<head>
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Phoebe's Photo Collection</title>
    <link rel="stylesheet" href="mission-2-Phoebe.css">
    <link rel="stylesheet" type="text/css"
        href="https://stackpath.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css">
    <link href="https://fonts.googlefonts.cn/css?family=Amatic+SC:400,700|Cookie|Kalam|Merienda" rel="stylesheet">
    <script src="mission-2-Phoebe.js" defer></script>
</head>

<body>
    <div class="backgroundphoto"><img src="image/us.jpg" height="1300px"></div>

    <header>
        <div class="headbar">
            <div class="dropdown">
                <button class="dropbtn">
                    <i class="fa fa-bars fa-2x" id="icon"></i>
                </button>
                <div class="dropdown-content">
                    <a href="#home-container"><div id="home-sidebar">Home</div></a>
                    <a href="#about-container"><div id="about-sidebar">About</div></a>
                    <a href="#collection-container"><div id="collection-sidebar">Collection</div></a>
                    <div class="location-sidebar">
                        <p>New Zealand</p>
                        <p>Outside NZ</p>
                        <p>Protrait</p>
                    </div>
                    <a href="#contact-container"><div id="contact-sidebar">Contact Me</div></a>
                </div>
            </div>
        </div>
    </header>
    <!-------------------------------need to add id link--!-->

    <section id="home-container">
        <div class="introduction">
                <h1>Hello! Welcome to my page.</h1>
                <p>Hi, this is Phoebe!<br> I would like to share my photo collection here. :)</p>
        </div>
    </section>

    <!-----introduce my background--------------->
    <section id="about-container">
        <div class="myPhoto">
            <img class="me" src="image/me.png">
        </div>
        <div class="aboutMe">
            <h2>About the author</h2>
            <p>Hello guys! I am Phoebe.</p>
            <p>This website is kind of a personal photo collection site.These photos are quite random from everywhere, but some of them are breathtaken shot.</p> 
            <p>And it's all about the good memory moment. :D</p>
            <p>Hope you guys enjoy them! ;)</p>
        </div>
    </section>

    <section id = "collection-container">

       <div><a href="page-nz.html" target="_blank"><img id="newZealand" src="image/welly8.jpg" height="350px" width="500px"></a>New Zealand></div>
        <div><a href="page-outsideNZ.html" target="_blank"><img id="outsideNewZealand" src="image/hawaii/diamondhead-Hawaii.jpg" height="350px" width="500px"></a>Outside NZ</div>
    
        <div><a href="page-protrait.html" target="_blank"><img id="protrait" src="image/Protrait/protrait4.jpg" height="350px" width="500px"></a>Protrait</div>
      </div>
    </section>
<!---------------------------form---left--------------->
<section id = "contact-container">

<div class="otherlink-container">
    <div id="moreAboutMe">More about Me</div>
    <div class="otherlink-icons">
      <a href="https://www.facebook.com/profile.php?id=100005733000599"><i class="fa fa-facebook-square"
          aria-hidden="true"></i></a>
      <a href="https://www.youtube.com/channel/UCfZf-tGuPXyd8iW2KtX6lKg"><i class="fa fa-youtube-play"
          aria-hidden="true"></i></a>
      <a href="https://www.instagram.com/phoebesu1025/"><i class="fa fa-instagram" aria-hidden="true"></i></a>
      <a href="https://www.linkedin.com/in/phoebe-su-4a618813a/"><i class="fa fa-linkedin-square"
          aria-hidden="true"></i></a>
    </div>
    <br>

    <div class="subscribe">subscribe
      <p>Sign up with your email address to receive news and updates!
      </p>
      <input id="subscribe-email" type="text" placeholder="email@gmail.com" action="mailto:phoebesu85@yahoo.com.tw"
        method="post">
      <button class="signUpBtn">Sign up</button>
    </div>
  </div>

  <!---form-right----------------------->
  <div class="contact-me">
    <fieldset>
      <legend>Contact me</legend>
      <p>Got an enquiry, suggestion or feedback? Please use this online form to get in touch with us. Thank you!
      </p>

      <form action="mailto:phoebesu85@yahoo.com.tw" method="post">
        <label>Name*</label>
        <input type="text" id="name" name="name" required>
        <br>
        <label>Email*</label>
        <input type="email" id="email" name="email" required>
        <br>
        <label>Phone Number</label>
        <input type="text" id="phone" name="phone">
        <br>
        <br>
        <hr>
        <textarea placeholder="Type Message here...."></textarea>
        <button id="submitbtn" onclick="alertFunc()" >Submit</button>
      </form>
    </fieldset>
  </div>


</section>


<!----------------------footer----------------------------------->
    <footer>
        <div class="footerBar"> 
            Copyright 2022 by Phoebe Su. All Rights Reserved.</div>     
    </footer>
</body>

</html>
