// JavaScript
new VenoBox({
    selector: '.my-image-links',
    numeration: true,
    infinigall: true,
    share: true,
    spinner: 'rotating-plane'
});



(() => {
    // Specify the deadline date
    const deadlineDate = new Date("December 31, 2024 23:59:59").getTime();

    // Cache all countdown boxes into consts
    const countdownDays = document.querySelector(".countdown__days .number");
    const countdownHours = document.querySelector(".countdown__hours .number");
    const countdownMinutes = document.querySelector(
      ".countdown__minutes .number"
    );
    const countdownSeconds = document.querySelector(
      ".countdown__seconds .number"
    );

    // Update the count down every 1 second (1000 milliseconds)
    setInterval(() => {
      // Get current date and time
      const currentDate = new Date().getTime();

      // Calculate the distance between current date and time and the deadline date and time
      const distance = deadlineDate - currentDate;

      // Calculations the data for remaining days, hours, minutes and seconds
      const days = Math.floor(distance / (1000 * 60 * 60 * 24));
      const hours = Math.floor(
        (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      );
      const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((distance % (1000 * 60)) / 1000);

      // Insert the result data into individual countdown boxes
      countdownDays.innerHTML = days;
      countdownHours.innerHTML = hours;
      countdownMinutes.innerHTML = minutes;
      countdownSeconds.innerHTML = seconds;
    }, 1000);
  })();

  var mixer = mixitup('.mixitupFilter')

  var swiper = new Swiper(".mySwiper", {
    slidesPerView: 2,
      spaceBetween: 24,
      loop: true,
      autoplay: {
        delay: 1500,
        disableOnInteraction: false,
      },
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
  });

  new WOW().init();



// JQuery
$(document).ready(function(){

    $('.backToTop').click(function(){
        $('html, body').animate({scrollTop: 0}, 500)
    })

    $(window).on('load', function(){
        $('.preloader').fadeOut(1000)
    })

    $(window).scroll(function(){
        
        var scrollTop = $(this).scrollTop()

        if(scrollTop > 300){
            $('.navbar').addClass('stickyTop')
            $('.logoImg').attr('src','assets/img/white-logo.png')
            $('.backToTop').slideDown()
        } else {
            $('.navbar').removeClass('stickyTop')
            $('.logoImg').attr('src','assets/img/black-logo.png')
            $('.backToTop').slideUp()  
        }
    })



    $('.counter').counterUp({
        delay: 10,
        time: 3000
    });
})