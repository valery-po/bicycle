document.addEventListener("DOMContentLoaded", () => {
  const header = document.querySelector(".header");
  const headerNav = document.querySelector(".header__nav");
  const line = document.querySelector(".progress-line__item");
  
  const headerFixed =  () => {
    let scrollTop = window.scrollY;
    let headerCenter = header.offsetHeight / 2;
   
    if(scrollTop >= headerCenter) {
      headerNav.classList.add("fixed");
      header.style.marginTop = `${headerNav.offsetHeight}px`;
	     headerNav.style.backgroundColor = "#e6e5ec";
      
    } else {
    headerNav.classList.remove("fixed");
    header.style.marginTop = `0px`;
	   headerNav.style.backgroundColor = "transparent";
    }  
  };
  
  
AOS.init({
    enable: "phone",
});


	new Swiper(".swiper-container", {
		autoplay:  {
			delay: 3000,
		},
	
		loop: true,
	//fade, //coverflow, // cube
		grabCursor: true,
		pagination: {
		 el: ".swiper-pagination",
		 clickable: true,
    },
		

});


const	navLine = document.querySelector(".nav__line"),
						navLink = document.querySelectorAll(".header__link");
	
	  navLine.style.width = `${navLink[0].offsetWidth}px`;
	
	  navLink.forEach(el =>{
				
				el.addEventListener("mouseenter", (e) => {
					
					navLine.style.width = `${e.currentTarget.offsetWidth}px`;
					navLine.style.left = `${e.currentTarget.offsetLeft}px`;
					
				});
				
     el.addEventListener("mouseleave", () => {
					
					navLine.style.width = `${navLink[0].offsetWidth}px`;
					navLine.style.left = `340px`;
				
				});
			});


  const progressAnimation = () => {
    
    let scrollTop = window.scrollY;
    let windowHeight = window.innerHeight;
    let siteHeight = document.documentElement.scrollHeight;
    let persentageProgress = Math.floor(scrollTop / (siteHeight - windowHeight) * 100);
    line.style.width = `${persentageProgress}%`;


  }
  
   headerFixed();
   progressAnimation();
  
  
  window.addEventListener("scroll", () => {
    headerFixed();
    progressAnimation();
  });
  
  $("#test").on('click', function() {

  $.fancybox.open('<a data-fancybox="images" href="image/img-8.png"> <img class="gallery-item__image" src="image/img-8.png" alt="pad-img"></a>');
});

  $("#test-1").on('click', function() {

  $.fancybox.open('<a data-fancybox="images" href="image/img-9.png"> <img class="gallery-item__image" src="image/img-9.png" alt="pad-img"></a>');
});

  $("#test-2").on('click', function() {

  $.fancybox.open('<a data-fancybox="images" href="image/img-10.png"> <img class="gallery-item__image" src="image/img-10.png" alt="pad-img"></a>');
});

  $("#test-3").on('click', function() {

  $.fancybox.open('<a data-fancybox="images" href="image/img-11.png"> <img class="gallery-item__image" src="image/img-11.png" alt="pad-img"></a>');
});
  
  $("#test-4").on('click', function() {

  $.fancybox.open('<a data-fancybox="images" href="image/img-12.png"> <img class="gallery-item__image" src="image/img-12.png" alt="pad-img"></a>');
});

  $("#test-5").on('click', function() {

  $.fancybox.open('<a data-fancybox="images" href="image/img-13.png"> <img class="gallery-item__image" src="image/img-13.png" alt="pad-img"></a>');
});

  $("#test-6").on('click', function() {

  $.fancybox.open('<a data-fancybox="images" href="image/img-14.png"> <img class="gallery-item__image" src="image/img-14.png" alt="pad-img"></a>');
});

  $("#test-7").on('click', function() {

  $.fancybox.open('<a data-fancybox="images" href="image/img-15.png"> <img class="gallery-item__image" src="image/img-15.png" alt="pad-img"></a>');
});
  
  
   $(".header__nav-btn").on("click", function () {

	 $(".mobile__wrapper--open").toggleClass("mobile__wrapper--open-active");
		});

   $(".header__link").on("click", function () {
		
		$(".ham3").toggleClass("active");
	 $(".mobile__wrapper--open").addClass("mobile__wrapper--open-active");
	
	});
  
   $(".header__link").on("click", function(event) {
        event.preventDefault();
        var id  = $(this).attr("href"),
            top = $(id).offset().top;
        $("body,html").animate({scrollTop: top}, 1500);
});


});
	
	
	
