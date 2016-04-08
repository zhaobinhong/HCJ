$(function(){
   $('.mask').css({"left":"0","top":"100%"});
   $('.face').on('mouseenter',function(event){
     var index=$(this).index();
     var event=event||window.event,
	 seenterX=event.clientX,
	 seenterY=event.clientY;
	 $(this).on('mouseleave',function(event){
	 var event=event||window.event,
             leaveX=event.clientX,
	     leaveY=event.clientY,
	     checkX=leaveX-seenterX,
	     checkY=leaveY-seenterY;
	     checkSeenter(checkX,checkY,index);
	 })
    })
    function checkSeenter(checkX,checkY,index){
	console.log(index)
	if(checkX>0&&Math.abs(checkX)>Math.abs(checkY)){
	   console.log('左边')
	   $('.face').eq(index).find($('.mask')).css({"left":"-100%","top":"0"}).stop().animate({
		"left":"100%",
		"top":"0%"
	   });
	}else if(checkX<0&&Math.abs(checkX)>Math.abs(checkY)){
	   console.log('右边');
	   $('.face').eq(index).find($('.mask')).css({"left":"100%","top":"0"}).stop().animate({
		"left":"-100%",
		"top":"0%"
	    });
	}else if(checkY>0&&Math.abs(checkX)<=Math.abs(checkY)){
	    console.log('上边')
	    $('.face').eq(index).find($('.mask')).css({"left":"0","top":"-100%"}).stop().animate({
		"top":"100%",
		"left":"0"
	     });
	}else{
	    console.log('下边');
	    $('.face').eq(index).find($('.mask')).css({"left":"0","top":"100%"}).stop().animate({
		"top":"-100%",
		"left":"0"
	    });
	}
    }
})