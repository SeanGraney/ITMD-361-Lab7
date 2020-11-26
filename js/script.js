function init(){
//add your javascrip between these two lines of code
  var eb = document.getElementById("entrybutton");
  eb.addEventListener('click', after);

  function after() {
    var name = document.querySelector("h2.center");
    var entry = document.getElementById("entryinput").value;
    alert(name.innerHTML + ": " + entry);

    document.getElementById("textoutput").innerHTML = entry;
  }
}
window.addEventListener('load', init);
