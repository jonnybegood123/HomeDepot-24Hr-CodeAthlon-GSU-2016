var currentCategory = "";
var currentProfessional = "";
var buttons = document.getElementsByClassName('category-button');
var pros = document.getElementsByClassName('pro-item');

var addOnClick = function(button, currentCat) {
  button.onclick = function() {
    currentCategory = currentCat;
    console.log(currentCategory);
    if(currentCategory != ""){
      document.getElementById("nextButton").disabled = false;
      button.style.background = '#ccccff';
      for (var i=0, len = buttons.length; i < len; i++){
        if(buttons[i] != button){
          buttons[i].style.background = 'white';
        }
      }
    }
  };
};

var addOnClick2 = function(pro, currentPro) {
  pro.onclick = function() {
    currentProfessional = currentPro;
    console.log(currentProfessional);
    if(currentProfessional != ""){
      document.getElementById("confirmButton").disabled = false;
      pro.style.background = '#ccccff';
      for (var i=0, len = pros.length; i < len; i++){
        if(pros[i] != pro){
          pros[i].style.background = 'white';
        }
      }
    }
  };
};

for (var i=0, len = buttons.length; i < len; i++){
  var text = buttons[i].textContent;
  addOnClick(buttons[i], buttons[i].innerHTML);
}

for (var i=0, len = pros.length; i < len; i++){
  var text = pros[i].textContent;
  addOnClick2(pros[i], pros[i].firstChild.textContent);
}
