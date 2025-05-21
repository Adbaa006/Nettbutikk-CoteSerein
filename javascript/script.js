function sorteringsFunksjon() {
  document.getElementById("sorteringsMeny").classList.toggle("show");
}

window.onclick = function(event) {
  if (!event.target.matches('.sorterKnapp')) {
    var dropdowns = document.getElementsByClassName("sorteringsinnhold");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');
      }
    }
  }
}

function sokFunksjon() {
  document.getElementById("sokMeny").classList.toggle("show");
}

window.onclick = function(event) {
  if (!event.target.matches('.sokKnapp')) {
    var dropdowns = document.getElementsByClassName("sokinnhold");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');
      }
    }
  }
}

function sokFunksjon2() {
  document.getElementById("sokMeny2").classList.toggle("show");
}

window.onclick = function(event) {
  if (!event.target.matches('.sokKnapp')) {
    var dropdowns = document.getElementsByClassName("sokinnhold");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');
      }
    }
  }
}