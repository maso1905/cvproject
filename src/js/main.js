"use strict"

// Variables
let workEl = document.getElementById("work-table");
let eduEl = document.getElementById("edu-table");

// Event listener
window.addEventListener('load', getWork());
window.addEventListener('load', getEducation());


// Functions

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

