$(document).ready(function () {
    const images = ['arc1.png', 'arc2.png', 'arc3.png', 'arc4.png', 'arc5.png', 'arc6.png'];
    const $pool = $('#pool');
    const $rainbow = $('#rainbow');
    const $message = $('#message');

   
    function shuffleArray(array) {
        for (let i = array.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [array[i], array[j]] = [array[j], array[i]];
        }
        return array;
    }

   
    function initGame() {
        $pool.empty();
        $rainbow.empty();
        $message.text('');

        let shuffledImages = shuffleArray([...images]);

        shuffledImages.forEach(img => {
            $pool.append(`<img src="img/${img}" alt="${img}">`);
        });
    }

   
    $('#shuffle').click(function () {
        initGame();
    });

    
    $('.connectedSortable').sortable({
        connectWith: '.connectedSortable',
        update: function (event, ui) {
            checkWinCondition();
        }
    });

    function checkWinCondition() {
       
        if ($rainbow.children().length === 6) {
            let isCorrect = true;
            $rainbow.children().each(function (index) {
             
                let expected = images[index];
                let currentSrc = $(this).attr('src');

                if (!currentSrc.includes(expected)) {
                    isCorrect = false;
                    return false; 
                }
            });

            if (isCorrect) {
                $message.text('Vous avez gagné').removeClass('red').addClass('green');
            } else {
                $message.text('Vous avez perdu').removeClass('green').addClass('red');
            }
        } else {
            
            $message.text('');
        }
    }

    initGame();
});
