$(function(){
var dragable=false;
var mouseX;
var mouseY;
var newX;
var newY;
var $cc=1;

$(".miniwindow").click(function(){
$(".window").css({"position":"fixed","bottom":"100px"});
$(".window").animate({
width:"60px",
height:"40px",
bottom:"0px",
"margin-left":"0px",
"margin-top":"auto"
},
function(){
$(".window").hide();
$(".miniwindow").css({
"background":"rgba(255,255,255,0.4)",
"background-image":"url(img/home.png)",
"background-repeat":"no-repeat",
"background-size":"35px 28px",
"background-position":"10px 6px"
});
}
);
});


$(".min").click(function(){
$(".window").css({"position":"fixed","bottom":"100px"});
$(".window").animate({
width:"60px",
height:"40px",
bottom:"0px",
"margin-left":"0px",
"margin-top":"auto"
},
function(){
$(".window").hide();
$(".miniwindow").css({
"background":"rgba(255,255,255,0.4)",
"background-image":"url(img/home.png)",
"background-repeat":"no-repeat",
"background-size":"35px 28px",
"background-position":"10px 6px"
});
}
);
});


$(".max").click(function(){
var newWidth=$(document).width()-2;
var newHeight=$(document).height()-42;
var contentWidth=newWidth-10;
var contentHeight=newHeight-50;
if($cc % 2)
{
$cc++;
$(".window").animate({
width:newWidth,
height:newHeight,
"margin-left":"0px",
"margin-top":"0px"
});
$(".windowContent").css({
"width":contentWidth+"px",
"height":contentHeight+"px",
"background-size":contentWidth+"px "+contentHeight+"px"
});
$("#imgHoverZoom,#woodFormation,#picea,#yak").css({
"height":"40px",
"width":"350px",
"margin-left":"-150px",
"line-height":"40px",
"-moz-border-radius":"15px",
"-webkit-border-radius":"15px",
"border-radius":"15px",
"font-size":"25px",
"padding-left":"20px"
});
$("imgHoverZoom").css({
"margin-top":"100px"
});
$(".max>img").attr("src","img/recover.png");
}

else{
$cc++;
$(".window").animate({
width:"800px",
height:"600px",
"margin-left":"200px",
"margin-top":"100px"
});
$(".windowContent").css({
"width":"790px",
"height":"558px",
"background-size":"790px 558px"
});
$("#imgHoverZoom,#woodFormation,#picea,#yak").css({
"height":"30px",
"width":"260px",
"margin-left":"-112px",
"line-height":"30px",
"-moz-border-radius":"12px",
"-webkit-border-radius":"12px",
"border-radius":"12px",
"font-size":"18px",
"padding-left":"15px"
});


$(".max>img").attr("src","img/max.png");
}
});

$(".windowTop").mousedown(function(e){
mouseX=e.pageX-$(".window").offset().left;
mouseY=e.pageY-$(".window").offset().top;
dragable=true;
});

$(".windowTop").mousemove(function(e){
if(dragable)
   {
   newX=e.pageX-mouseX;
   newY=e.pageY-mouseY;
   $(".window").css({"margin-left":newX,"margin-top":newY});
   }
});
$("html").mouseup(function(e){
dragable=false;
});

});
