"use strict"

// Variables
let website1 = document.getElementById("webinfo-one");
let website2 = document.getElementById("webinfo-two");
let website3 = document.getElementById("webinfo-three");
let website4 = document.getElementById("webinfo-four");
let website5 = document.getElementById("webinfo-five");
let website6 = document.getElementById("webinfo-six");
let workEl = document.getElementById("work-table");
let eduEl = document.getElementById("edu-table");

// Event listener
window.addEventListener('load', getWork());
window.addEventListener('load', getEducation());
window.addEventListener('load', getWebsiteInfoOne());
window.addEventListener('load', getWebsiteInfoTwo());
window.addEventListener('load', getWebsiteInfoThree());
window.addEventListener('load', getWebsiteInfoFour());
window.addEventListener('load', getWebsiteInfoFive());
window.addEventListener('load', getWebsiteInfoSix());


// Functions

// GETs website No. 1 info
function getWebsiteInfoOne() {
  website1.innerHTML = '';
  fetch('http://studenter.miun.se/~maso1905/dt173g/rest/miun_courses/website.php?id=1')
  .then(response => response.json())
  .then(data => {
      data.forEach(web => {
        website1.innerHTML +=
          `              
          <h3><a href="${web.url}">${web.title}</a></h3>
          <p>${web.description}</p>  
          `
      })
  })
}

// GETs website No. 2 info
function getWebsiteInfoTwo() {
  website2.innerHTML = '';
  fetch('http://studenter.miun.se/~maso1905/dt173g/rest/miun_courses/website.php?id=2')
  .then(response => response.json())
  .then(data => {
      data.forEach(web => {
        website2.innerHTML +=
          `              
          <h3><a href="${web.url}">${web.title}</a></h3>
          <p>${web.description}</p>  
          `
      })
  })
}

// GETs website No. 3 info
function getWebsiteInfoThree() {
  website3.innerHTML = '';
  fetch('http://studenter.miun.se/~maso1905/dt173g/rest/miun_courses/website.php?id=3')
  .then(response => response.json())
  .then(data => {
      data.forEach(web => {
        website3.innerHTML +=
          `              
          <h3><a href="${web.url}">${web.title}</a></h3>
          <p>${web.description}</p>  
          `
      })
  })
}

// GETs website No. 4 info
function getWebsiteInfoFour() {
  website4.innerHTML = '';
  fetch('http://studenter.miun.se/~maso1905/dt173g/rest/miun_courses/website.php?id=4')
  .then(response => response.json())
  .then(data => {
      data.forEach(web => {
        website4.innerHTML +=
          `              
          <h3><a href="${web.url}">${web.title}</a></h3>
          <p>${web.description}</p>  
          `
      })
  })
}

// GETs website No. 5 info
function getWebsiteInfoFive() {
  website5.innerHTML = '';
  fetch('http://studenter.miun.se/~maso1905/dt173g/rest/miun_courses/website.php?id=5')
  .then(response => response.json())
  .then(data => {
      data.forEach(web => {
        website5.innerHTML +=
          `              
          <h3><a href="${web.url}">${web.title}</a></h3>
          <p>${web.description}</p>  
          `
      })
  })
}

// GETs website No. 6 info
function getWebsiteInfoSix() {
  website6.innerHTML = '';
  fetch('http://studenter.miun.se/~maso1905/dt173g/rest/miun_courses/website.php?id=6')
  .then(response => response.json())
  .then(data => {
      data.forEach(web => {
        website6.innerHTML +=
          `              
          <h3><a href="${web.url}">${web.title}</a></h3>
          <p>${web.description}</p>  
          `
      })
  })
}

// GETs work all tables
function getWork() {
  workEl.innerHTML = '';
  fetch('http://studenter.miun.se/~maso1905/dt173g/rest/miun_courses/work.php')
  .then(response => response.json())
  .then(data => {
      data.forEach(work => {
          workEl.innerHTML +=
          `              
            <table id="worktable">
              <tr>
                <td><h5>${work.company}</h5></td>
                <td><h5>${work.title}</h5></td>
                <td><h5>${work.start}</h5></td>
                <td><h5>${work.end}</h5></td>
              </tr>
            </table> 
          `
      })
  })
}

// GETs all education tables
function getEducation() {
  eduEl.innerHTML = '';
  fetch('http://studenter.miun.se/~maso1905/dt173g/rest/miun_courses/education.php')
  .then(response => response.json())
  .then(data => {
      data.forEach(edu => {
          eduEl.innerHTML +=
          `              
            <table id="edutable">
            <tr>
              <td><h5>${edu.school}</h5></td>
              <td><h5>${edu.program}</h5></td>
              <td><h5>${edu.start}</h5></td>
              <td><h5>${edu.end}</h5></td>
            </tr>
          </table> 
          `
      })
  })
}

// Responsive menu
function openNav() {
    document.getElementById("myNav").style.width = "100%";
  }
  
function closeNav() {
    document.getElementById("myNav").style.width = "0%";
  }

