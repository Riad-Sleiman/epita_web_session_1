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



            //Switch the current player after playing
            if (current_player == 1){
                current_player = 2;
            }   
            else{
                current_player = 1;
            }

            let iactivePlayer = document.querySelector(".player:not(.active)");
            let activePlayer = document.querySelector(".player.active");
            iactivePlayer.classList.add("active");
            activePlayer.classList.remove("active");
        }
        else{
            alert('Box is full!!!');
        }
    }
});