/* Opens the navbar */
function openNav() {
  document.getElementById("sidebar").style.display = "block"
  document.getElementById("sidebar").style.left = "0"
  document.getElementById("sidebar-background-filter").style.left = "0"
}

/* Closes the nav bar */
function closeNav() {
  document.getElementById("sidebar").style.display = "none"
  document.getElementById("sidebar").style.left = "-1000"
  document.getElementById("sidebar-background-filter").style.left = "-100%"
} 

function openChild() {
  document.getElementById("child-table").style.display = "table"
  document.getElementsByClassName("scan-table-body-expand-button-vertical")[0].style.display = "none";
}