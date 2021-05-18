//Restart game button
var restart = document.querySelector('#b');

//Grab all the squares
var squares = document.querySelectorAll("td");

//Clear square function

function clearBoard(){
    for( var i = 0 ;i<squares.length;i++){
        squares[i].textContent=' ';
    }
}
restart.addEventListener('click',clearBoard)

//create a function that will check the square markers
function ChangeMarker(){
    if(this.textContent === ' '){
        this.textContent = 'X';
        //console.log(marker)
    }
    else if (this.textContent ==='X'){
        this.textContent = '0';
    }
    else{
        this.textContent = ' ';
    }
};

//use the for loop to add event listeners to all the squares
for(var i = 0;i<squares.length;i++){
    squares[i].addEventListener('click',ChangeMarker);
}