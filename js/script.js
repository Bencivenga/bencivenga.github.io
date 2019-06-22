
var searchButton = document.querySelector(".search-btn");
var popup = document.querySelector(".search-form");
var dateIn = popup.querySelector("[name=date-in]");
var dateOut = popup.querySelector("[name=date-out]");


   popup.classList.remove("search-form-opened");
   popup.classList.add("search-form-hide");

   searchButton.addEventListener("click", function(evt) {
     evt.preventDefault();
     popup.classList.remove("search-form-error");
     popup.classList.toggle("search-form-show");
     popup.classList.toggle("search-form-hide");
   });


popup.addEventListener("submit", function(evt){
  if (!dateIn.value || !dateOut.value) {
  evt.preventDefault();
  popup.classList.remove("search-form-error");
  popup.offsetWidth = popup.offsetWidth;
  popup.classList.add("search-form-error");
  }
});
