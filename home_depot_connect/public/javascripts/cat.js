var currentCategory = "";
var buttons = document.getElementsByClassName('category-option');

var addOnClick = function(button, currentCat) {
  button.onclick = function() {
    currentCategory = currentCat;
    console.log(currentCategory);
    if(currentCategory != ""){
      //document.getElementById("nextButton").disabled = false;
      button.style.background = '#ccccff';
      for (var i=0, len = buttons.length; i < len; i++){
        if(buttons[i] != button){
          buttons[i].style.background = 'white';
        }
      }
    }
  };
};
