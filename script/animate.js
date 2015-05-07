$(function(){
var dragable=false;
var mouseX;
var mouseY;
var newX;
var newY;
var $cc=1;
var status=1;

$(".projectMini").click(function(){
if(status)
{
$(".projectWindow").css({"position":"fixed","bottom":"100px"});
$(".projectWindow").animate({
width:"60px",
height:"40px",
bottom:"0px",
"margin-left":"0px",
"margin-top":"auto"
},
function(){
$(".projectWindow").hide();
$(".ProjectMini").css({
"background":"rgba(255,255,255,0.4)",
"background-image":"url(img/home.png)",
"background-repeat":"no-repeat",
"background-size":"35px 28px",
"background-position":"10px 6px"
});
}
);
status=0;
}
else
{
status=1;
$(".projectWindow").css({"position":"fixed","bottom":"0px"});
$(".projectWindow").show();
$(".projectWindow").animate({
width:"800px",
height:"600px",
"margin-left":"200px",
"margin-top":"100px",
"bottom":"100px"
},

function(){
$(".projectMini").css({
"background":"rgba(255,255,255,0.2)",
"background-image":"url(img/home.png)",
"background-repeat":"no-repeat",
"background-size":"35px 28px",
"background-position":"10px 6px"
});
});
}

});


$(".min").click(function(){
$(".projectWindow").css({"position":"fixed","bottom":"100px"});
$(".projectWindow").animate({
width:"60px",
height:"40px",
bottom:"0px",
"margin-left":"0px",
"margin-top":"auto"
},
function(){
$(".projectWindow").hide();
$(".projectMini").css({
"background":"rgba(255,255,255,0.4)",
"background-image":"url(img/home.png)",
"background-repeat":"no-repeat",
"background-size":"35px 28px",
"background-position":"10px 6px"
});
}
);
status=0;
});


$(".max").click(function(){
var newWidth=$(document).width()-2;
var newHeight=$(document).height()-42;
var contentWidth=newWidth-10;
var contentHeight=newHeight-50;
if($cc % 2)
{
$cc++;
$(".projectWindow").animate({
width:newWidth,
height:newHeight,
"margin-left":"0px",
"margin-top":"0px"
});
$(".projectWindow>.windowContent").css({
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
$(".projectWindow").animate({
width:"800px",
height:"600px",
"margin-left":"200px",
"margin-top":"100px"
});
$(".projectWindow>.windowContent").css({
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
mouseX=e.pageX-$(".projectWindow").offset().left;
mouseY=e.pageY-$(".projectWindow").offset().top;
dragable=true;
});

$(".windowTop").mousemove(function(e){
if(dragable)
   {
   newX=e.pageX-mouseX;
   newY=e.pageY-mouseY;
   $(".projectWindow").css({"margin-left":newX,"margin-top":newY});
   }
});
$("html").mouseup(function(e){
dragable=false;
});

});
