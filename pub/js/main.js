"use strict"; // Variables

var websiteEl = document.getElementById("websiteList");
var workEl = document.getElementById("work-table");
var eduEl = document.getElementById("edu-table"); // Event listener

window.addEventListener('load', getWork());
window.addEventListener('load', getEducation());
window.addEventListener('load', getWebsite()); // Functions
// GETs website No. 1 info

function getWebsite() {
  websiteEl.innerHTML = '';
  fetch('http://studenter.miun.se/~maso1905/dt173g/rest/miun_courses/website.php').then(function (response) {
    return response.json();
  }).then(function (data) {
    data.forEach(function (web) {
      websiteEl.innerHTML += "          \n          <li>\n          <img src=\"images/website".concat(web.id, ".jpg\" class=\"image\" alt=\"Thumbnail of website ").concat(web.id, "\"/>\n          <div class=\"info-overlay\">\n              <div class=\"text-overlay\">\n                  <div id=\"webinfo-").concat(web.id, "\">\n                    <h3><a href=\"").concat(web.url, "\">").concat(web.title, "</a></h3>\n                    <p>").concat(web.description, "</p>  \n                  </div>\n              </div>\n          </div>\n          </li>    \n          ");
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
