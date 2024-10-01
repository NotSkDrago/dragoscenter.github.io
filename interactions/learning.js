
var Links = 
document.getElementById("links");
Links.addEventListener("click", openLinks);

var AboutMe = 
document.getElementById("aboutMe");
AboutMe.addEventListener("click", openAboutMe);


var Games =
document.getElementById("Games");
Games.addEventListener("click", openGames);

var Store =
document.getElementById("Store");
Store.addEventListener("click", openStore);

function openGames() {
    window.location.href = 'unfinishedpg.html';
}

function openStore() {
    window.location.href = 'unfinishedpg.html';
}

function openAboutMe() {
    window.location.href = 'aboutme.html';
}

function openLinks() {
    window.open('https://linktr.ee/defnotdrago', '_blank');
}

