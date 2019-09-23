 
function spiner(){
    $(".spinner-fixed").fadeOut(1000 , function(){ $("body").css("overflow","auto") });

}
window.addEventListener('load',function(){
    console.log("jjj");
    spiner()

})


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

$("#over").click(function(e){
     e.preventDefault();
     $("html , body").animate({scrollTop:$($("#Overview")).offset().top -180 },1000)
     });
$("#locate").click(function(e){
    e.preventDefault();
    $("html , body").animate({scrollTop: $($("#date")).offset().top -180 },1000) });

    // regstieeeeeeeeeer form 
function regstier(){
var form = document.querySelector("#pranchParent");
var number = document.getElementById("partic-no");
var x = 2
    var branch = `
    <div id="brnch-%id%" class="form1-branch row">
    <div class="col-md-12 pt-3">
     <p>Participant <span id="partic-no"> %num% </span> </p>
    </div>
    <div class="col-md-4 my-2">
        <input type="text" class="form-control" placeholder="First Name*">
</div>
<div class="col-md-4 my-2">
    <input type="text" class="form-control" placeholder="Last Name*">
</div>
<div class="col-md-4 my-2">
<input type="text" class="form-control" placeholder="Job Title*">
</div>
<div class="col-md-4 my-2">
<input type="email" class="form-control" placeholder="Email*">
</div>
 </div>
`
    $(".Participant-add").click(function(e){
        e.preventDefault();
        // $(this).parent().parent().parent().clone().appendTo( ".form1-branch" );
        newFom = branch.replace('%id%', x);
        newFom2 = newFom.replace('%num%', x);
        x++;
        form.insertAdjacentHTML('beforeend', newFom2);
        $(".remove-partice").fadeIn();
        xButton();
    })

    $(".remove-partice").click(function(e){
        e.preventDefault();
        x--;
        var branchId= "brnch-"+ x ;
        var newbrabchId = "#" + branchId
        var formselect = document.querySelector("" + newbrabchId)
        console.log(branchId);
      $(formselect).remove();
      xButton();
    })
 function xButton(){
    if(x <3){
        $(".remove-partice").fadeOut();
    }else{
        $(".remove-partice").fadeIn();
    }
 }
 
}
regstier();
