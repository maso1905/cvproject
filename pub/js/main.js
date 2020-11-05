"use strict"; // Variables

var website1 = document.getElementById("webinfo-one");
var website2 = document.getElementById("webinfo-two");
var website3 = document.getElementById("webinfo-three");
var website4 = document.getElementById("webinfo-four");
var website5 = document.getElementById("webinfo-five");
var website6 = document.getElementById("webinfo-six");
var workEl = document.getElementById("work-table");
var eduEl = document.getElementById("edu-table"); // Event listener

window.addEventListener('load', getWork());
window.addEventListener('load', getEducation());
window.addEventListener('load', getWebsiteInfoOne());
window.addEventListener('load', getWebsiteInfoTwo());
window.addEventListener('load', getWebsiteInfoThree());
window.addEventListener('load', getWebsiteInfoFour());
window.addEventListener('load', getWebsiteInfoFive());
window.addEventListener('load', getWebsiteInfoSix()); // Functions
// GETs website No. 1 info

function getWebsiteInfoOne() {
  website1.innerHTML = '';
  fetch('http://studenter.miun.se/~maso1905/dt173g/rest/miun_courses/website.php?id=1').then(function (response) {
    return response.json();
  }).then(function (data) {
    data.forEach(function (web) {
      website1.innerHTML += "              \n          <h3><a href=\"".concat(web.url, "\">").concat(web.title, "</a></h3>\n          <p>").concat(web.description, "</p>  \n          ");
    });
  });
} // GETs website No. 2 info


function getWebsiteInfoTwo() {
  website2.innerHTML = '';
  fetch('http://studenter.miun.se/~maso1905/dt173g/rest/miun_courses/website.php?id=2').then(function (response) {
    return response.json();
  }).then(function (data) {
    data.forEach(function (web) {
      website2.innerHTML += "              \n          <h3><a href=\"".concat(web.url, "\">").concat(web.title, "</a></h3>\n          <p>").concat(web.description, "</p>  \n          ");
    });
  });
} // GETs website No. 3 info


function getWebsiteInfoThree() {
  website3.innerHTML = '';
  fetch('http://studenter.miun.se/~maso1905/dt173g/rest/miun_courses/website.php?id=3').then(function (response) {
    return response.json();
  }).then(function (data) {
    data.forEach(function (web) {
      website3.innerHTML += "              \n          <h3><a href=\"".concat(web.url, "\">").concat(web.title, "</a></h3>\n          <p>").concat(web.description, "</p>  \n          ");
    });
  });
} // GETs website No. 4 info


function getWebsiteInfoFour() {
  website4.innerHTML = '';
  fetch('http://studenter.miun.se/~maso1905/dt173g/rest/miun_courses/website.php?id=4').then(function (response) {
    return response.json();
  }).then(function (data) {
    data.forEach(function (web) {
      website4.innerHTML += "              \n          <h3><a href=\"".concat(web.url, "\">").concat(web.title, "</a></h3>\n          <p>").concat(web.description, "</p>  \n          ");
    });
  });
} // GETs website No. 5 info


function getWebsiteInfoFive() {
  website5.innerHTML = '';
  fetch('http://studenter.miun.se/~maso1905/dt173g/rest/miun_courses/website.php?id=5').then(function (response) {
    return response.json();
  }).then(function (data) {
    data.forEach(function (web) {
      website5.innerHTML += "              \n          <h3><a href=\"".concat(web.url, "\">").concat(web.title, "</a></h3>\n          <p>").concat(web.description, "</p>  \n          ");
    });
  });
} // GETs website No. 6 info


function getWebsiteInfoSix() {
  website6.innerHTML = '';
  fetch('http://studenter.miun.se/~maso1905/dt173g/rest/miun_courses/website.php?id=6').then(function (response) {
    return response.json();
  }).then(function (data) {
    data.forEach(function (web) {
      website6.innerHTML += "              \n          <h3><a href=\"".concat(web.url, "\">").concat(web.title, "</a></h3>\n          <p>").concat(web.description, "</p>  \n          ");
    });
  });
} // GETs work all tables


function getWork() {
  workEl.innerHTML = '';
  fetch('http://studenter.miun.se/~maso1905/dt173g/rest/miun_courses/work.php').then(function (response) {
    return response.json();
  }).then(function (data) {
    data.forEach(function (work) {
      workEl.innerHTML += "              \n            <table id=\"worktable\">\n              <tr>\n                <td><h5>".concat(work.company, "</h5></td>\n                <td><h5>").concat(work.title, "</h5></td>\n                <td><h5>").concat(work.start, "</h5></td>\n                <td><h5>").concat(work.end, "</h5></td>\n              </tr>\n            </table> \n          ");
    });
  });
} // GETs all education tables


function getEducation() {
  eduEl.innerHTML = '';
  fetch('http://studenter.miun.se/~maso1905/dt173g/rest/miun_courses/education.php').then(function (response) {
    return response.json();
  }).then(function (data) {
    data.forEach(function (edu) {
      eduEl.innerHTML += "              \n            <table id=\"edutable\">\n            <tr>\n              <td><h5>".concat(edu.school, "</h5></td>\n              <td><h5>").concat(edu.program, "</h5></td>\n              <td><h5>").concat(edu.start, "</h5></td>\n              <td><h5>").concat(edu.end, "</h5></td>\n            </tr>\n          </table> \n          ");
    });
  });
} // Responsive menu


function openNav() {
  document.getElementById("myNav").style.width = "100%";
}

function closeNav() {
  document.getElementById("myNav").style.width = "0%";
}
//# sourceMappingURL=main.js.map
