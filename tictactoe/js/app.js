let current_player = 1;
let playCount = 0;
let cols = document.querySelectorAll(".col");
let isPlaying = true;
let winLabel = document.getElementById('winLabel');
winLabel.style.display = 'none';

function onClickPlay(){
    localStorage.setItem('pl1', document.getElementById("p1name").value);
    localStorage.setItem('pl2', document.getElementById("p2name").value);
    localStorage.setItem("score1",0);
    localStorage.setItem("score2",0);
    
}

document.querySelector('.p1_name').innerHTML = localStorage.getItem('pl1') + " "+ localStorage.getItem("score1");
document.querySelector('.p2_name').innerHTML = localStorage.getItem('pl2') + " "+ localStorage.getItem("score2");

cols.forEach((col) =>{
    
    col.onclick = function(){
        if(this.innerHTML == '' && isPlaying){

            // Put the symbol in the col
            let symbol = document.querySelector('.p'+current_player+'_symbol').innerHTML;
            this.innerHTML = symbol;
            playCount++;
            // Check winner
            let latWinCount = 0;
            let longWinCount = 0
            //Checks horizontal and vertical win
            for(let i=0 ; i < 3 ; i++){
                for(let j=0 ; j < 3; j++){
                    
                    if(document.querySelector(".id"+i+j).innerHTML == symbol){
                        latWinCount++;
                    }
                    if(document.querySelector(".id"+j+i).innerHTML == symbol){
                        longWinCount++;
                    }

                    if(latWinCount == 3 || longWinCount == 3){
                        isPlaying = false;
                        winLabel.style.display = '';
                        if(symbol == "X"){
                            winLabel.querySelector('.player').innerHTML = localStorage.getItem('pl1')+" wins. Click to restart";
                            localStorage.setItem("score1", parseFloat(localStorage.getItem("score1"))+1);
                        }
                        else{
                            winLabel.querySelector('.player').innerHTML = localStorage.getItem('pl2')+" wins. Click to restart";
                            localStorage.setItem("score2", parseFloat(localStorage.getItem("score2"))+1);
                        }
                    }
                    
                }
                latWinCount = 0;
                longWinCount = 0;
            }
            //checks the diagonal win

            if(document.querySelector(".id00").innerHTML == symbol && document.querySelector(".id11").innerHTML == symbol && document.querySelector(".id22").innerHTML == symbol
                || document.querySelector(".id02").innerHTML == symbol && document.querySelector(".id11").innerHTML == symbol && document.querySelector(".id20").innerHTML == symbol){
                    winLabel.style.display = '';
                    if(symbol == "X"){
                        winLabel.querySelector('.player').innerHTML = localStorage.getItem('pl1')+" wins. Click to restart";
                        localStorage.setItem("score1", parseFloat(localStorage.getItem("score1"))+1);
                    }
                    else{
                        winLabel.querySelector('.player').innerHTML = localStorage.getItem('pl2')+" wins. Click to restart";
                        localStorage.setItem("score2", parseFloat(localStorage.getItem("score2"))+1);
                    }
                    isPlaying=false;
                }       

            //Switch the current player after playing
            document.querySelector(".player"+current_player).classList.remove("active");

            
            if (current_player == 1){
                current_player = 2;
            }   
            else{
                current_player = 1;
            }

            document.querySelector(".player"+current_player).classList.add("active");
        }
        else{
            if(playCount >= 8){
                alert("it's a tie");
            }
            else{
                alert('Box is full or game is over');
            }
        }
    }
});