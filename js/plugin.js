// Variables
const navOpenBtn = document.getElementById("navbar-open");
const navCloseBtn = document.getElementById("navbar-close");

/**************/
/*** Events ***/
/**************/

navOpenBtn.onclick = openCollapse;

navCloseBtn.onclick = closeCollapse;

/*****************/
/*** Handlers ****/
/*****************/

/* openCollapse Function
  -- To set class 'show' to an element that it id is value of data attribute of
      button that named bs-target (Here bg-target is bgTarget).
  -- Class 'show' will add some propreties to the element.
*/
function openCollapse() {
  document.getElementById(this.dataset["bsTarget"]).classList.add("show");
}

/* closeCollapse Function
  -- To remove class 'show' from an element that it id is value of data attribute of
      button that named bs-target (Here bg-target is bgTarget).
  -- Class 'show' contains some propreties so the element will miss it.
*/
function closeCollapse() {
  document.getElementById(this.dataset["bsTarget"]).classList.remove("show");
}
