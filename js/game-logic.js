$(function(){
    var memoryArray = ['I','I','II','II','III','III','IV','IV','V','V','VI','VI','VII','VII','VIII','VIII'];
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
        var output = '';
        console.log()
        memoryArray.shuffleMemoryArray();
        console.log(memoryArray);
    }

    createNewBoard();
});