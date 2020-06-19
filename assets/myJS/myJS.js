function upClick(textId) {
  var text = document.getElementById(textId);
  var value = text.value ? parseInt(text.value) : 0;
  value++;
  text.value = value.toString();
}
function downClick(textId) {
  var text = document.getElementById(textId);
  var value = text.value ? parseInt(text.value) : 0;
  if (value > 0) value--;
  text.value = value.toString();
}
function showAddCart() {
  var x = document.getElementById("snackbar");
  x.className = "show";
  setTimeout(function(){ x.className = x.className.replace("show", ""); }, 3000);
}
