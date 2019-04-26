$(function(){
    var memoryArray = ['./images/planet-mercury.jpeg','./images/planet-mercury.jpeg','./images/planet-venus.jpeg','./images/planet-venus.jpeg','./images/planet-earth.jpeg','./images/planet-earth.jpeg','./images/planet-mars.jpg','./images/planet-mars.jpg','./images/planet-jupiter.jpeg','./images/planet-jupiter.jpeg','./images/planet-saturn.jpg','./images/planet-saturn.jpg','./images/planet-uranus.jpeg','./images/planet-uranus.jpeg','./images/planet-neptune.jpg','./images/planet-neptune.jpg'];
    memory_values = [];
    memory_tile_ids = [];
    var tilesFlipped = 0;

    Array.prototype.shuffleMemoryArray = function(){

        var i = this.length, j, temp;

        while(--i > 0){

            j = Math.floor(Math.random() * (i + 1));
            temp = this[j];
            this[j] = this[i];
            this[i] = temp;
        }
    }

    function createNewBoard(){

        tilesFlipped = 0;
        var $output = '';
       
        memoryArray.shuffleMemoryArray();

        for(let i = 0; i < memoryArray.length; i++){
            console.log(i, memoryArray[i]);
            $output += "<div class='frontSide' id=" + i + "></div>";
        }
        
       /// console.log($output);
        $('.container').append($output);
    }

    createNewBoard();

    $('.container > div').click(function(event){

        var $id = $(this).attr('id');
        var $planet = memoryArray[parseInt($id)];
        console.log($id, $planet);

        if($(this).text() == "" && memory_values.length < 2){
            
            $(this).removeClass('frontSide');
            $(this).text(' ');
            
            console.log($(this).text());

            $(this).addClass('backSide');
            $('#' + $id + '.backSide').css({'background-image':'url("' + $planet +'")',
                                            'background-size': 'contain'});
            
            
            
            if(memory_values.length == 0){

                memory_values.push($planet);
                memory_tile_ids.push($id);
                console.log('first value pushed');
            }
            else if(memory_values.length == 1){

                memory_values.push($planet);
                memory_tile_ids.push($id);
                console.log('second value pushed');
                console.log(memory_values[0], memory_values[1]);
                if(memory_values[0] == memory_values[1]){

                    tilesFlipped += 2;

                    //Clear both arrays
                    memory_values = [];
                    memory_tile_ids = [];

                    if(tilesFlipped == memoryArray.length){

                        alert("Board cleared... You're through to the next round :-)");
                    }
                }
                else{

                    function flip2CardsBack(){

                        var $card1 = $('#' + memory_tile_ids[0]), $card2 = $('#' + memory_tile_ids[1]);
                        
                        console.log($card1, $card2);

                        $card1.removeClass('backSide');
                        $card2.removeClass('backSide');

                        $card1.text('');
                        $card2.text('');

                        $card1.removeAttr('style');
                        $card2.removeAttr('style');

                        $card1.addClass('frontSide');
                        $card2.addClass('frontSide');

                        //Clear both arrays
                        memory_tile_ids = [];
                        memory_values = [];
                    }

                    setTimeout(flip2CardsBack, 1000);
                }
            }
        }
    });
});