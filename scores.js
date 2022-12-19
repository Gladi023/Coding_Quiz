function printHighscores() {
    var highscores = JSON.parse(window.localStorage.getItem("highscores")) || [];
  
    // to sort highscores
    highscores.sort(function (a, b) {
      return b.score - a.score;
    });
  
    highscores.forEach(function (score) {
      // the initials for each score append ol
      var liTag = document.createElement("li");
      liTag.textContent = score.initials + " - " + score.score;
  
      var olEl = document.getElementById("highscores");
      olEl.appendChild(liTag);
    });
  }
  
  function clearHighscores() {
    window.localStorage.removeItem("highscores");
    window.location.reload();
  }
  
  // to clear high scores
  document.getElementById("clear").onclick = clearHighscores;
  
  printHighscores();

 

