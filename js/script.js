const scrollTopBorder = 2000;

$('#newsletter input').focus(function() {
    $(this).attr('placeholder', 'info@fuviz.com')
}).blur(function() {
    $(this).attr('placeholder', 'Enter your email address')
})

$(document).ready(function(){
     $(window).scroll(function () {
            if ($(this).scrollTop() > scrollTopBorder) {
                $('#scrollUp').fadeIn();
            } else {
                $('#scrollUp').fadeOut();
            }
        });
        // scroll body to 0px on click
        $('#scrollUp').click(function () {
            $('#scrollUp').tooltip('hide');
            $('body,html').animate({
                scrollTop: 0
            }, 800);
            return false;
        });

        $('#scrollUp').tooltip('show');

});
