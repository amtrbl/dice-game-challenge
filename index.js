/* correct but without 'refresh me' 
var randomNum1 = Math.floor(Math.random() * 6) + 1;
var randomImg1 = "images/dice" + randomNum1 + ".png";
document.querySelectorAll("img")[0].setAttribute("src", randomImg1);

var randomNum2 = Math.floor(Math.random() * 6) + 1;
var randomImg2 = "images/dice" + randomNum2 + ".png";
document.querySelectorAll("img")[1].setAttribute("src", randomImg2);

if (randomNum1 > randomNum2) {
document.querySelector("h1").innerHTML = "🚩 Player 1 Wins!";
} else if (randomNum2 > randomNum1) {
document.querySelector("h1").innerHTML = "Player 2 Wins! 🚩";
} else {
document.querySelector("h1").innerHTML = "Draw!";
}
*/
window.onload = function loadGame() { //Event-handler => führt Code aus nach vollständigem Laden.
    // Prüft, ob 'refreshNote' im sessionStorage ist
    if (sessionStorage.getItem('refreshNote')) {
        // Code ausführen nach Refresh, wenn 'refreshNote vorhanden'
        var randomNum1 = Math.floor(Math.random() * 6) + 1;
        var randomNum2 = Math.floor(Math.random() * 6) + 1;
        
        console.log(randomNum1);
        console.log(randomNum2);
        
        var randomImg1 = "images/dice" + randomNum1 + ".png";
        document.querySelectorAll("img")[0].setAttribute("src", randomImg1);
        
        var randomImg2 = "images/dice" + randomNum2 + ".png";
        document.querySelectorAll("img")[1].setAttribute("src", randomImg2);
        
        var output = document.querySelector("h1");
 
        if (randomNum1 > randomNum2) {
            output.innerHTML = '<span class="mirror">&#128681;</span> Player 1 wins !';
        }
        else if (randomNum1 < randomNum2) {
            output.innerHTML = 'Player 2 wins! <span>&#128681;</span>';
        }
        else{
            output.textContent = 'Draw!';
        }
        // Entfert 'refreshNote' aus sessionStorage, damit Code beim nächsten Refresh ausgeführt wird
        sessionStorage.removeItem('refreshNote');
    }
 
    // Fügt 'refreshNote' zu sessionStorage hinzu für ersten/nächsten Refresh
    sessionStorage.setItem('refreshNote', 'true');
};