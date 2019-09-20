 
function spiner(){
    $(".spinner-fixed").fadeOut(1000 , function(){ $("body").css("overflow","auto") });

}
// window.addEventListener('load',function(){
//     console.log("jjj");
//     spiner()

// })


$(document).ready(function(){



// nav  baaaaaaaaaaaaaaaar
$(window).scroll(function(){
    if($(window).scrollTop()>5){
    $(".big-nav").addClass("big-nav-fixed"); }
    else $(".big-nav").removeClass("big-nav-fixed"); });


	/* sccroll-top  */

		 $(".sccroll-top i").click (function() {
	      $("html , body").animate({ scrollTop: 0	},1000)	});  
		 
	    $(window).scroll( function () {	
		 if ($(window). scrollTop () >= 100){$(".sccroll-top i").fadeIn(400)}
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
