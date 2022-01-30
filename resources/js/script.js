/* Opens the navbar */
function openNav() {
  document.getElementById("sidebar").style.left = "0"
  document.getElementById("sidebar-background-filter").style.display = "block"
  document.body.style.backgroundColor = "rgba(0,0,0,0.4)";
}

/* Closes the nav bar */
function closeNav() {
  document.getElementById("sidebar").style.left = "-450px"
  document.getElementById("sidebar-background-filter").style.display = "none"
  document.body.style.backgroundColor = "white";
} 

function openChild() {
  document.getElementById("child-table").style.display = "table"
  document.getElementsByClassName("scan-table-body-expand-button-vertical")[0].style.display = "none";
}