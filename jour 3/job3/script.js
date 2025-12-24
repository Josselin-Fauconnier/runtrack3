$(document).ready(function () {
    const validOrder = [1, 4, 7, 2, 5, 8, 3, 9, 6];
    const emptyTileValue = 6;

    let tiles = [...validOrder];
    let isGameBlocked = false;

   
    initGame();

    function initGame() {
       
        tiles = [...validOrder];

        
        shuffleTiles();

        renderGrid();
        isGameBlocked = false;
        $('#message').hide();
        $('#restart-btn').hide();
    }

    function shuffleTiles() {
       
        let emptyIndex = 8; 
        let previousIndex = -1;

        for (let i = 0; i < 2; i++) {
            let neighbors = getAdjacents(emptyIndex);
            let validNeighbors = neighbors.filter(n => n !== previousIndex);

            if (validNeighbors.length === 0) validNeighbors = neighbors;

            let randomNeighbor = validNeighbors[Math.floor(Math.random() * validNeighbors.length)];

            [tiles[emptyIndex], tiles[randomNeighbor]] = [tiles[randomNeighbor], tiles[emptyIndex]];

            previousIndex = emptyIndex;
            emptyIndex = randomNeighbor;
        }
    }

    function getAdjacents(index) {
        let adjacents = [];
        const row = Math.floor(index / 3);
        const col = index % 3;

        if (row > 0) adjacents.push(index - 3); 
        if (row < 2) adjacents.push(index + 3); 
        if (col > 0) adjacents.push(index - 1); 
        if (col < 2) adjacents.push(index + 1); 

        return adjacents;
    }

    function renderGrid() {
        const container = $('#grid-container');
        container.empty();

        tiles.forEach((tileValue, index) => {
            let tileDiv = $('<div>').addClass('tile').attr('data-index', index);

            if (tileValue === emptyTileValue) {
                tileDiv.addClass('empty');
            } else {
                let img = $('<img>').attr('src', `img/${tileValue}.PNG`);
                tileDiv.append(img);
            }

            tileDiv.on('click', function () {
                if (isGameBlocked) return;
                handleTileClick(index);
            });

            container.append(tileDiv);
        });
    }

    function handleTileClick(index) {
        const emptyIndex = tiles.indexOf(emptyTileValue);

        if (isAdjacent(index, emptyIndex)) {
            
            [tiles[index], tiles[emptyIndex]] = [tiles[emptyIndex], tiles[index]];
            renderGrid();
            checkWin();
        }
    }

    function isAdjacent(index1, index2) {
        const row1 = Math.floor(index1 / 3);
        const col1 = index1 % 3;
        const row2 = Math.floor(index2 / 3);
        const col2 = index2 % 3;

        return (Math.abs(row1 - row2) + Math.abs(col1 - col2)) === 1;
    }

    function checkWin() {
        for (let i = 0; i < 9; i++) {
            if (tiles[i] !== validOrder[i]) return;
        }

        gameWon();
    }

    function gameWon() {
        $('#message').show().css('color', 'green');
        isGameBlocked = true;
        $('#restart-btn').show();
    }

    $('#restart-btn').on('click', function () {
        initGame();
    });
});
