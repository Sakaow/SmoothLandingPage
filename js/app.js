// Option 2 - jQuery Smooth Scroll
$('.navbar a').on('click', function(e){
    if(this.hash !== ''){
        e.preventDefault();
        
        const hash = this.hash;

        // Target the body and calling the animate
        $('html, body').animate({
            scrollTop: $(hash).offset().top
        }, 800);
    }
});

// Option 3 - repository is deprecated as of 2020 
// according to the browser offers much better solution scrolling
// https://github.com/cferdinandi/smooth-scroll
// further read https://gomakethings.com/how-to-animate-scrolling-to-anchor-links-with-one-line-of-css/
// https://gomakethings.com/how-to-prevent-anchor-links-from-scrolling-behind-a-sticky-header-with-one-line-of-css/