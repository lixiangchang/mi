$(".gouwuche").hover(function(){
	$(".gouwuche>ul").css("height","100px")
	$(".gouwuche>a").css("color","orange")
	$(".gouwuche").css("background","#fff")
	
},function(){
	$(".gouwuche>ul").css("height","0")
	$(".gouwuche>a").css("color","#999")
	$(".gouwuche").css("background","#424242")
})



$(".navXiala").hover(function(){
	$(".navXiala>ul").stop().animate({"height":"220px","box-shadow":"0 4px 10px gray"})
},function(){
	$(".navXiala>ul").stop().animate({"height":"0","box-shadow":"0 0px 0px gray"})
})

$("#contHead .navXiala ol>li").hover(function(){
	var $ind=$(this).index()
	$("#contHead .navXiala ol>li a").eq($ind).css("color","orangered")
	$("#contHead .navXiala ul>li").eq($ind).addClass("xActive").siblings().removeClass("xActive")
},function(){
	$("#contHead .navXiala ol>li a").css("color","#666")
})
$("#contCenter li").hover(function(){
	$(this).stop().css({"box-shadow":"0 2px 2px #999","margin-top":"-3px"})
},function(){
	$(this).stop().css({"box-shadow":"0 0px 0px #fff","margin-top":"0"})
})

$(".banner>ul").hover(function(){
	$(".banner>ul>li:last-child").show()
},function(){
	$(".banner>ul>li:last-child").hide()
})
$(".banner>ul>li").hover(function(){
	var ind=$(this).index();
	$(this).animate({"background":"orangered"})
	$(".list>li").eq(ind).addClass("lActive");
},function(){
	$(".list>li").removeClass("lActive")
})



$("#xmDanPinL").click(function(){
	console.log($(".xmDanPin ul").clientWidth)
	$(".xmDanPin ul").animate({"left":"-1215px"})
})
$("#xmDanPinR").click(function(){
	console.log($(".xmDanPin ul").clientWidth)
	$(".xmDanPin ul").animate({"left":"0"})
})

$(".jiadian li").hover(function(){
	var ind=$(this).index()
	$(".jiadian li").eq(ind).children(".pingjia").stop().animate({"bottom":"0"})
},function(){
	$(".jiadian li").children(".pingjia").stop().animate({"bottom":"-84"})
})
$(".zhineng li").hover(function(){
	var ind=$(this).index()
	$(".zhineng li").eq(ind).children(".pingjia").stop().animate({"bottom":"0"})
},function(){
	$(".zhineng li").children(".pingjia").stop().animate({"bottom":"-84"})
})
$(".dapei li").hover(function(){
	var ind=$(this).index()
	$(".dapei li").eq(ind).children(".pingjia").stop().animate({"bottom":"0"})
},function(){
	$(".dapei li").children(".pingjia").stop().animate({"bottom":"-84"})
})
$(".peijian li").hover(function(){
	var ind=$(this).index()
	$(".peijian li").eq(ind).children(".pingjia").stop().animate({"bottom":"0"})
},function(){
	$(".peijian li").children(".pingjia").stop().animate({"bottom":"-84"})
})
$(".zhoubian li").hover(function(){
	var ind=$(this).index()
	$(".zhoubian li").eq(ind).children(".pingjia").stop().animate({"bottom":"0"})
},function(){
	$(".zhoubian li").children(".pingjia").stop().animate({"bottom":"-84"})
})
















var myswiper = new Swiper(".swiper-container", {
       loop: true,
       autoplay: 2000,
       observer:true,
       autoplayDisableOnInteraction: false,
       pagination: ".swiper-pagination",
       nextButton:".swiper-button-next",
       prevButton:".swiper-button-prev"
   });