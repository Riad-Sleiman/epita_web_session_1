//console.log('Hello World!');
//alert('Hello World');

//let table = document.getElementById('table_game');

//table.style.background = "pink";
let current_player = 1;
let cols = document.querySelectorAll(".col");

cols.forEach((col) =>{
    
    col.onclick = function(){
        if(this.innerHTML == ''){
            let symbol = document.querySelector('.p'+current_player+'_symbol').innerHTML;
            this.innerHTML = symbol;
            if (current_player == 1){
                current_player = 2;
            }   
            else{
                current_player = 1;
            }
        }
        else{
            alert('Box is full!!!');
        }
    }
});