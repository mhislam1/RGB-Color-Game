var colors = generateRandomColors(6);

    // Selects all the tiles.
    var squares = document.querySelectorAll(".square");
    var numSqures = 6;
    var selectedColor = selectColor();
    // RGB color to guess.
    var colorDisplay = document.getElementById("colorDisplay");
    colorDisplay.textContent = selectedColor;
    var messageDisplay = document.querySelector("#message");
    var h1Color = document.querySelector("h1");
    var reset = document.querySelector("#reset");
    var mode = document.querySelectorAll(".mode");


    init();

    function init(){
        modeSetup();
        tileSetup();
        resetFunc();
    }
    // Adding the events to listened to and the results. 
    function tileSetup(){
        for(var i = 0; i < squares.length; i++){
            squares[i].style.backgroundColor = colors[i];
    
            squares[i].addEventListener("click", function(){
                var clickedColor = this.style.backgroundColor;
                if(clickedColor === selectedColor){
                    messageDisplay.textContent = "Correct!";
                    reset.textContent = "Play Again?"
                    changeColors(clickedColor);
                }else {
                    // Incorrect selections are blended with the background.
                    this.style.backgroundColor = "#232323";
                    messageDisplay.textContent = "Try Again";
                }
            });
        }
    
    }
    // Changes color of incorrect tiles to background color.
    function changeColors(color){
        for(var i = 0; i < squares.length; i++){
            squares[i].style.backgroundColor = color;
        }
        h1Color.style.backgroundColor = color;
    }

    // Randomized color selection from colors[].
    function selectColor(){
        var random = Math.floor(Math.random() * colors.length);
        return colors[random];
    }

    function generateRandomColors(num){
        var randomColors = [];
        var randomColor;
        for(var i = 0; i < num; i++){
            var r = Math.floor(Math.random()*256);
            var g = Math.floor(Math.random()*256);
            var b = Math.floor(Math.random()*256);
            randomColor = "rgb(" + r + ", " + g + ", " + b +")";
            randomColors.push(randomColor);
        }
        return randomColors;
    }

    reset.addEventListener("click", function(){
        resetFunc();
    });

    function modeSetup(){
        for(var i = 0; i < mode.length; i++){
            mode[i].addEventListener("click", function(){
                mode[0].classList.remove("selectionHighlight");
                mode[1].classList.remove("selectionHighlight");
                this.classList.add("selectionHighlight");  
                if(this.textContent === "Easy"){
                    numSqures = 3;
                }else{
                    numSqures = 6;
                }
                resetFunc();
            });
        }
    }

    function resetFunc() {
        colors = generateRandomColors(numSqures);
        selectedColor = selectColor();
        colorDisplay.textContent = selectedColor;
        messageDisplay.textContent = "";
        for(var i = 0; i < squares.length; i++){
            if(colors[i]){
                squares[i].style.display = "block";
                squares[i].style.backgroundColor = colors[i];
            }else{
                squares[i].style.display = "none";
            }
        }
        h1Color.style.backgroundColor = "steelblue";
        reset.textContent = "New Colors"
    }