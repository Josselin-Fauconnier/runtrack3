$(document).ready(function () {
    
    $('#show-quote').click(function () {
        $('#quote-container').text("Les logiciels et les cathédrales, c'est un peu la même chose - d'abord on les construit, ensuite on prie.");
    });

    $('#hide-all').click(function () {
        $('html').hide();
    });
});