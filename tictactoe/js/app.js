let current_player = 1;
let playCount = 0;
let cols = document.querySelectorAll(".col");
let isPlaying = true;
let winLabel = document.getElementById('winLabel');
winLabel.style.display = 'none';

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
                        winLabel.querySelector('.player').innerHTML = "Player "+current_player+" wins. Click to restart";
                        console.log("Player "+current_player+" wins");
                    }
                    
                }
                latWinCount = 0;
                longWinCount = 0;
            }
            //checks the diagonal win

            if(document.querySelector(".id00").innerHTML == symbol && document.querySelector(".id11").innerHTML == symbol && document.querySelector(".id22").innerHTML == symbol
                || document.querySelector(".id02").innerHTML == symbol && document.querySelector(".id11").innerHTML == symbol && document.querySelector(".id20").innerHTML == symbol){
                    winLabel.style.display = '';
                    winLabel.querySelector('.player').innerHTML = "Player "+current_player+" wins. Click to restart";
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