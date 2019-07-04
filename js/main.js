$(document).ready(function(){
    // social links
  $('.main-btn').click(function(){
    $(this).closest('.social-btn').toggleClass('open');
  });

// team section


// function checkClent(){

//     if($(".team-card:first").hasClass('active')){
//         $(".leftt").fadeOut(0);
//     }else{
//         $(".leftt").fadeIn(0);
//     }

//     if($(".team-card:last").hasClass('active')){
//         $(".rightt").fadeOut(0);
//     }else{
//         $(".rightt").fadeIn(0);
//     }
// }
// checkClent();
// $('.team-persons i').click(function(){
//     if( $(this).hasClass("rightt") ){
//         $('.team-persons .active').fadeOut(100 ,function(){
//             $(this).removeClass('active').next('.team-card').addClass("active").fadeIn();
//             checkClent();
//     }) 
//     } else if( $(this).hasClass("leftt") ){
//         $('.team-persons .active').fadeOut(100 ,function(){
//             $(this).removeClass('active').prev('.team-card').addClass("active").fadeIn();
//             checkClent()
//     }) 
// }
// });
// end team section

// nav  baaaaaaaaaaaaaaaar
$(window).scroll(function(){
    if($(window).scrollTop()>5){
    $(".big-nav").addClass("big-nav-fixed"); }
    else $(".big-nav").removeClass("big-nav-fixed"); });


	/* sccroll-top  */

		 $(".sccroll-top i").click (function() {
	      $("html , body").animate({ scrollTop: 0	},1000)	});  
		 
	    $(window).scroll( function () {	
		 if ($(window). scrollTop () >= 600){$(".sccroll-top i").fadeIn(400)}
		 else ($(".sccroll-top i").fadeOut(400) )
	
	                                });
        /* sccroll-top  */
        
            /*Counter*/
    $(window).scroll(function(){
        if($(window).scrollTop()>=$("#about").offset().top-200)
            {
                $('.data').each(function(){
                $(this).prop('Counter',0).animate({
                Counter:$(this).attr("data-count")
                },{
                duration:5000,
                easing: 'swing',
                step: function(now){
                $(this).text(Math.ceil(now))
            }
        })
    })  
            } 
    })
       

  
});
