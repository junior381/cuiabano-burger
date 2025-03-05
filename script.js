$(document).ready(function() {
    $('mobile_btn').on('click' , function() {
        $('mobile_menu').toggleClass('active');
        $('mobile_btn').find('i').toggleClass('fa-x');
    });
    const sections = $('section');
    const navitems = $('nav-item');

    $(window).on('scroll', function() {
        const header = $('header');
        const scrollPosition = $(window).scrollTop() - header.outerHeight();

        let activeSectionIndex = 0;

        if(scrollPosition <= 0) {
            header.css('box-shadow', 'none');
        } else {
            header.css('box-shadow', '5px 1px 5px rgba(0,0,0,0.1)');
        }

        sections.each(function(i) {
            const section = $(this);
            const sectiontop = section.offset().top - 96;
            const sectionbottom = sectiontop + section.outerHeight();

            if(scrollPosition >= sectiontop && scrollPosition < sectionbottom) {
            activeSectionIndex = i;
            return false;
            }
        });
        navitems.removeClass('active');
        $(navitems[activeSectionIndex]).addClass('active');
    });

    /**animação */
    Scrollreveal().reveal('#cta',{
        origin: 'left',
        duration: 2000,
        distance: '20%',
    });

    crollreveal().reveal('.burguer',{
        origin: 'left',
        duration: 2000,
        distance: '20%',
    });

    crollreveal().reveal('#testimonials_burguer',{
        origin: 'left',
        duration: 1000,
        distance: '20%',

    });

    crollreveal().reveal('.feedback',{
        origin: 'right',
        duration: 1000,
        distance: '20%',

    });
});