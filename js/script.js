function init(){
  var button = document.getElementById("subscribe");
  var input = document.getElementById("input-name");
  button.addEventListener("click", myFunction);
 

  function myFunction() {
    text = ('Thank you' + input.value + ', you are now Subscribed!');
    alert(text);
  }
}
window.addEventListener('load', init);
