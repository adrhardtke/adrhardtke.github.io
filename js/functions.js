function putText(e){
    document.getElementById('cursoNome').textContent = e;
}

$('nav a, .call-to-action .btn, .banner .btn').click(function(e){
    e.preventDefault();
    var id = $(this).attr('href'),
    targetOffset = $(id).offset().top;

    $('html, body').animate({
        scrollTop: targetOffset
    },1000)
});
