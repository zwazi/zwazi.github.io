/* Opens the navbar */
function openNav() {
  document.getElementById("sidebar-iframe").style.left = "0";
  document.getElementById("capsule-logo-spacer").style.zIndex = "0";
  document.getElementById("sidebar-iframe").style.zIndex = "3";
  document.getElementById("sidebar-background-filter").style.zIndex = "4";
  document.getElementById("sidebar-background-filter").style.left = "350px";
}

/* Closes the nav bar */
function closeNav() {
  document.getElementById("sidebar-iframe").style.left = "-350px";
  document.getElementById("capsule-logo-spacer").style.zIndex = "3";
  document.getElementById("sidebar-iframe").style.zIndex = "0";
  document.getElementById("sidebar-background-filter").style.zIndex = "0";
  document.getElementById("sidebar-background-filter").style.left = "-100%";
} 