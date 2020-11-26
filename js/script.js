function init(){
//add your javascrip between these two lines of code
  var eb = document.getElementById("entrybutton");
  eb.addEventListener('click', after);
  
  function after() {
    var name = document.querySelectorAll("h2.center").innerHTML;
    var entry = document.getElementById("entryinput").value;
    alert(name + ": " + entry);

    document.getElementById("textoutput").innerHTML = entry;
  }
}
window.addEventListener('load', init);
