function onClickPlay(){
    localStorage.setItem('pl1', document.getElementById("p1name").value);
    localStorage.setItem('pl2', document.getElementById("p2name").value);
    localStorage.setItem("score1",0);
    localStorage.setItem("score2",0);
    window.location.href="./game.html";
}