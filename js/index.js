$('.drop-item .drop-overlay').click((e) => {
    $('.drop-item .drop-body').not($(e.target).parent().siblings('.drop-body')).slideUp();
    $(e.target).parent().siblings().slideToggle();
});

let navActive = false;

$('.sidebtn, .fa-xmark').click(() => {
    if (navActive) {
        $('aside').animate({ left: '-=18.75rem' });
        $('.sidebtn').animate({ marginLeft: '-=18.75rem' });
        $('.intro-text').animate({ marginLeft: '-=18.75rem' });
        navActive = false;
    } else {
        $('aside').animate({ left: '+=18.75rem' });
        $('.sidebtn').animate({ marginLeft: '+=18.75rem' });
        $('.intro-text').animate({ marginLeft: '+=18.75rem' });
        navActive = true;
    }

});

let links = document.querySelectorAll('header ul li a');

links.forEach(link=>{
    $(link).click((e)=>{
        $('html,body').animate({
            scrollTop:0
        },2000);
    });
});

let textArea = document.querySelector('textarea');
let letterCount = document.querySelector('span.text-danger');

textArea.addEventListener('keyup', () => {
    letterCount.innerHTML = textArea.getAttribute('maxlength') - textArea.value.length;

});