import React from 'react';
import $ from 'jquery';

window.onscroll = function() {showWithScroll()};

function showWithScroll() {
        if (window.scrollY >= 600) {
                document.getElementById("linkedin-card").className = "col-md show-card";
                document.getElementById("github-card").className = "col-md show-card2";
                document.getElementById("instagram-card").className = "col-md show-card3";


        } else {
                document.getElementById("linkedin-card").className = "linkedinClass col-md";
                document.getElementById("github-card").className = "linkedinClass col-md";
                document.getElementById("instagram-card").className = "linkedinClass col-md";

        }}



function App() {
  return (
  <React.Fragment>
    {/* <!--navbar start--> */}
    <nav class="navbar navbar-expand-md navbar-dark bg-dark d-flex">
      <div class="container">
        
        <button id="navbarIcon" class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navmenu">
          <span class="navbar-toggler-icon"></span>
        </button>

        <div id="navmenu" class="collapse navbar-collapse">
          <ul class="navbar-nav" style={{display: "flex", flex: "1 0 0%", justifyContent: "space-evenly"}}>
            <li class="nav-item  fs-4">
              <a href="#aboutMe" class="nav-link text-light" style={{textAlign : "center"}} >AboutMe</a>
            </li>
            <li class="nav-item  fs-4">
              <a href="#languages" class="nav-link text-light" style={{textAlign : "center"}} >Languages</a>
            </li>
            <li class="nav-item  fs-4">
              <a href="#contact" class="nav-link text-light" style={{textAlign : "center"}} >Contact</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
    {/* <!--navbar end--> */}

    {/* <!-- aboutMe start --> */}
      <section id="aboutMe" class="text-light p-5 text-center bg-1 mainSec">
        <div class="container row mainSec">
          <div>
            <p id="aboutMe1" class="col-7 mt-2 h1 ">I'm <span id="myName" class="text-warning">Yiğit Kılınçer</span> </p>
            <div id="aboutMeImg" class="col-6 ">
              <img id="aboutMeItem" class="img-fluid mt-5" src="assets/images/portrait.png" alt=""/>
            </div>
            <p id="aboutMe2" class="col-8 mt-4 h4 ">I'm a software engineer and computer engineering first year student in IZTECH.</p>
            <p id="aboutMe3" class="col-8 mt-4 h4  ">I'm love coding and working on computer.</p>
            <p id="aboutMe4" class="col-8 mt-4 h4  ">I'm trying to get as much experience as I can while I am doing my degree.</p>
          </div>
          
        </div>
      </section>
    {/* <!-- aboutMe end --> */}

        <h1 id="languages" class="text-center mb-5 mt-5 text-primary fw-bolder" style={{fontFamily: "Syne"}} >My Languages And Tools</h1>
        {/* <!-- Languages Carousel start --> */}
        <section>
          <div class="container">
            <div id="carouselExampleCaptions" class="carousel slide" data-bs-ride="carousel">
              <div class="carousel-indicators">
                <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" class="bg-dark active" aria-current="true" aria-label="Slide 1"></button>
                <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" class="bg-dark" aria-label="Slide 2"></button>
                <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" class="bg-dark" aria-label="Slide 3"></button>
                <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="3" class="bg-dark" aria-label="Slide 4"></button>
                <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="4" class="bg-dark" aria-label="Slide 5"></button>
              </div>
              <div class="carousel-inner">
                <div class="carousel-item active">
                  <img style={{opacity: 0.5}} width="225px" height="225px" src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/61/HTML5_logo_and_wordmark.svg/1200px-HTML5_logo_and_wordmark.svg.png" id="htmlWidth" class="d-block mx-auto" alt="1st slide"/>
                  <div class="carousel-caption d-block">
                    <p id="htmlhead" class="text-dark fw-bold">HTML</p>
                    <p id="htmltext" class="text-dark">I have experienced with HTML and I am still developing HTML projects.</p>
                  </div>
                </div>
                <div class="carousel-item">
                  <img style={{opacity: 0.5}} width="225px" height="225px" src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/CSS3_logo_and_wordmark.svg/1200px-CSS3_logo_and_wordmark.svg.png" id="cssWidth" class="d-block mx-auto" alt="2nd slide"/>
                  <div class="carousel-caption d-block">
                    <h4 id="csshead" class="text-dark fw-bold">CSS</h4>
                    <p id="csstext" class="text-dark">I have experienced with CSS and I am still developing CSS projects.</p>
                  </div>
                </div>
                <div class="carousel-item">
                  <img style={{opacity: 0.5}} width="225px" height="225px" src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/c3/Python-logo-notext.svg/640px-Python-logo-notext.svg.png" id="pythonWidth" class="d-block mx-auto" alt="3rd slide"/>
                  <div class="carousel-caption d-block">
                    <h4 id="pythonhead" class="text-dark fw-bold">Python</h4>
                    <p id="pythontext" class="text-dark">I am still learning Python. I know fundamentals but I haven't developed many projects with Python for now.</p>
                  </div>
                </div>
                <div class="carousel-item">
                  <img style={{opacity: 0.5}} width="225px" height="225px" src="https://pluralsight2.imgix.net/paths/images/javascript-542e10ea6e.png" id="jsWidth" class="d-block langWidth mx-auto" alt="4th slide"/>
                  <div class="carousel-caption d-block">
                    <h4 id="jshead" class="text-dark fw-bold">JavaScript</h4>
                    <p id="jstext" class="text-dark">I have used JavaScript on a lot of projects. Also I am learning and developing projects with React. </p>
                  </div>
                </div>
                <div class="carousel-item">
                  <img style={{opacity: 0.5}} width="225px" height="225px" src="https://www.php.net/images/logos/new-php-logo.png" id="phpWidth" class="d-block langWidth mx-auto" alt="5th slide"/>
                  <div class="carousel-caption d-block">
                    <h4 id="phphead" class="text-dark fw-bold">PHP</h4>
                    <p id="phptext" class="text-dark">I have used PHP especially with Laravel framework on lots of projects.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      {/* <!-- Languages Carousel end --> */}

      {/* <!-- Click for mail start --> */}
    <div class="bg-1"style={{height: "40%"}}>
      <section id="contact" class="text-light p-5 mt-5">
        <div class="container">
          <div class="d-md-flex row">
            <p id="mailtext" class="mt-3 col-9">Click the button to mail to me</p>
            <div class="col-3">
              {/* <!-- Trigger the modal with a button --> */}
              <button id="modalButton" type="button" class="btn btn-primary" data-toggle="modal" data-target="#exampleModalCenter">
                Launch demo modal
              </button>
            </div>
          </div>
        </div>
      </section>
      {/* <!-- Click for mail end --> */}

      {/* <!-- Contact Cards Start --> */}
      <section class="p-5">
        <div  id="cardsContact" class="container">
          <div class="row text-center">
            <div id="linkedin-card" class="">
              <div class="card bg-dark text-light">
                <div class="card-body text-center">
                  <div class="h1 mb-3">
                    <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" fill="currentColor" class="bi bi-linkedin" viewBox="0 0 16 16">
                      <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854V1.146zm4.943 12.248V6.169H2.542v7.225h2.401zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248-.822 0-1.359.54-1.359 1.248 0 .694.521 1.248 1.327 1.248h.016zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016a5.54 5.54 0 0 1 .016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225h2.4z"/>
                    </svg>
                  </div>
                  <div class="btn btn-primary card-title fs-4">
                  <a class="text-light" style={{textDecoration: "none"}} href="https://www.linkedin.com/in/yi%C4%9Fit-k%C4%B1l%C4%B1n%C3%A7er-58334b21b">Linkedin</a>
                  </div>
                </div>
              </div>
            </div>
            <div id="github-card" class="">
              <div class="card bg-dark text-light">
                <div class="card-body text-center">
                  <div class="h1 mb-3">
                    <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" fill="currentColor" class="bi bi-github" viewBox="0 0 16 16">
                      <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z"/>
                    </svg>
                  </div>
                  <div class="btn btn-primary card-title fs-4">
                    <a class="text-light" style={{textDecoration: "none"}}  href="https://github.com/Yigitkilincr" >GitHub</a>
                  </div>
                </div>
              </div>
            </div>
            <div id="instagram-card" class="">
              <div class="card bg-dark text-light">
                <div class="card-body text-center">
                  <div class="h1 mb-3">
                    <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" fill="currentColor" class="bi bi-instagram" viewBox="0 0 16 16">
                      <path d="M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.917 3.917 0 0 0-1.417.923A3.927 3.927 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.916 3.916 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.926 3.926 0 0 0-.923-1.417A3.911 3.911 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0h.003zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599.28.28.453.546.598.92.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.47 2.47 0 0 1-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.478 2.478 0 0 1-.92-.598 2.48 2.48 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233 0-2.136.008-2.388.046-3.231.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92.28-.28.546-.453.92-.598.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045v.002zm4.988 1.328a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92zm-4.27 1.122a4.109 4.109 0 1 0 0 8.217 4.109 4.109 0 0 0 0-8.217zm0 1.441a2.667 2.667 0 1 1 0 5.334 2.667 2.667 0 0 1 0-5.334z"/>
                    </svg>
                  </div>
                  <div class="btn btn-primary card-title fs-4">
                    <a class="text-light" style={{textDecoration: "none"}}  href="https://www.instagram.com/yigit_klncr/" >Instagram</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
    {/* <!-- Contact Cards End --> */}

    {/* <!-- Footer Start --> */}
    <footer class="p-5 bg-dark text-white text-center">
      <div class="container">
        <p class="lead">Copyright &copy; 2022 Yiğit Kılınçer</p>
      </div>
    </footer>
    {/* <!-- Footer End --> */}

    {/* <!-- Modal --> */}
    <div class="modal fade" id="exampleModalCenter" tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
      <div class="modal-dialog modal-dialog-centered" role="document">
        <div class="modal-content">
          <div class="modal-header">
            <button id="closeX" type="button" class="close" data-dismiss="modal" aria-label="Close">
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div class="modal-body">
            <div class="row">
              <h2>Contact Me</h2>
            </div>
            <div class="row input-container">
              <form action="src/Php/mail.php" method="post">
              <div class="col-xs-12">
                <div class="styled-input wide">
                  <input type="text" name="name"/>
                  <label>Name</label>
                </div>
              </div>
              <div class="col-md-12 col-sm-12">
                <div class="styled-input">
                  <input type="text" name="email" />
                  <label>Email</label>
                </div>
              </div>
              <div class="col-xs-12">
                <div class="styled-input wide">
                  <input type="text" name="message"/>
                  <label>Message</label>
                </div>
              </div>
              </form>
          </div>

          </div>
          <div class="modal-footer">
            <input type="submit" class="btn btn-primary"/>
          </div>
        </div>
      </div>
    </div>
  </React.Fragment> 
  );
}

$('#modalButton').on('click', function () {
  $('#exampleModalCenter').modal('show')
})
$('#closeButton').on('click', function () {
  $('#exampleModalCenter').modal('hide')
})
$('#closeX').on('click', function () {
  $('#exampleModalCenter').modal('hide')
})


export default App;
