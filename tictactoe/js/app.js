/*console.log('Hello World!');
alert('Hello World');

let table = document.getElementById('table_game');

table.style.background = "pink";*/

let current_player = 1;
let cols = document.querySelectorAll(".col");

cols.forEach((col) =>{
    
    col.onclick = function(){
        if(this.innerHTML == ''){
            // Put the symbol in the col
            let symbol = document.querySelector('.p'+current_player+'_symbol').innerHTML;
            this.innerHTML = symbol;

            // Check winner
            let latWinCount = 0;
            let longWinCount = 0
            for(let i=0 ; i < 3 ; i++){
                for(let j=0 ; j < 3; j++){
                    
                    if(document.querySelector(".id"+i+j).innerHTML == symbol){
                        latWinCount++;
                    }
                    if(document.querySelector(".id"+j+i).innerHTML == symbol){
                        longWinCount++;
                    }

                    if(latWinCount == 3 || longWinCount == 3){
                        console.log("Player "+current_player+" wins");
                    }
                    
                }
                latWinCount = 0;
                longWinCount = 0;
            }

            if(document.querySelector(".id00") == symbol && document.querySelector(".id11") == symbol && document.querySelector(".id22") == symbol
                || document.querySelector(".id02") == symbol && document.querySelector(".id11") == symbol && document.querySelector(".id20") == symbol){
                    console.log("Player "+current_player+" wins");
                }


            if(latWinCount == 3 || longWinCount == 3){
                console.log("Player "+current_player+" wins");
            }
            

            document.querySelector(".player"+current_player).classList.remove("active");

            //Switch the current player after playing
            if (current_player == 1){
                current_player = 2;
            }   
            else{
                current_player = 1;
            }

            document.querySelector(".player"+current_player).classList.add("active");
        }
        else{
            alert('Box is full!!!');
        }
    }
});