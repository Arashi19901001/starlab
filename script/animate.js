$(function(){
var dragable=false;
var mouseX;
var mouseY;
var newX;
var newY;
var $projectCount=1;
var $cvCount=1;

$(".projectWindow").hide();

$("#zoom,#imgHoverZoom").click(function(){
window.open("http://me.lzu.edu.cn:8080/starlab/imghoverzoom.html");
});
$("#woodformation,#woodFormation").click(function(){
window.open("http://me.lzu.edu.cn/woodformation");
});
$("#piceadata,#picea").click(function(){
window.open("http://me.lzu.edu.cn/picea");
});
$("#yakgenome,#yak").click(function(){
window.open("http://me.lzu.edu.cn/yak");
});

function WindowStatus(width,height,bottom,left,status){
this.width=width;
this.height=height;
this.bottom=bottom;
this.left=left;
this.status=status;
}

var cvStatus=new WindowStatus(800,700,80,200,"show");
var projectStatus=new WindowStatus(800,600,100,400,"close");

function move(classname,statusname,movement){
if(movement=="hide")
{
$("."+classname).animate({
width:statusname.width,
height:statusname.height,
bottom:statusname.bottom,
left:statusname.left
},
function(){
$("."+classname).hide();
}
);
}
else if(movement="show"){
$("."+classname).show();
$("."+classname).animate({
width:statusname.width,
height:statusname.height,
bottom:statusname.bottom,
left:statusname.left
});
}
else if(movement="no")
  {
  $("."+classname).animate({
  width:statusname.width,
  height:statusname.height,
  bottom:statusname.bottom,
  left:statusname.left
  });
  
  }
}


function exchange(statusname){
statusname.oldWidth=statusname.width+statusname.oldWidth;
statusname.width=statusname.oldWidth-statusname.width;
statusname.oldWidth=statusname.oldWidth-statusname.width;

statusname.oldHeight=statusname.height+statusname.oldHeight;
statusname.height=statusname.oldHeight-statusname.height;
statusname.oldHeight=statusname.oldHeight-statusname.height;

statusname.oldLeft=statusname.left+statusname.oldLeft;
statusname.left=statusname.oldLeft-statusname.left;
statusname.oldLeft=statusname.oldLeft-statusname.left;

statusname.oldBottom=statusname.bottom+statusname.oldBottom;
statusname.bottom=statusname.oldBottom-statusname.bottom;
statusname.oldBottom=statusname.oldBottom-statusname.bottom;
}

$(".projectMini").click(function(){
if(projectStatus.status=="show")
{
projectStatus.oldWidth=projectStatus.width;
projectStatus.oldHeight=projectStatus.height;
projectStatus.oldLeft=projectStatus.left;
projectStatus.oldBottom=projectStatus.bottom;
projectStatus.width=60;
projectStatus.height=40;
projectStatus.left=60;
projectStatus.bottom=0;
projectStatus.status="hide";
move("projectWindow",projectStatus,"hide");
}

else if(projectStatus.status=="hide")
{
projectStatus.status="show";
exchange(projectStatus);
move("projectWindow",projectStatus,"show");
}

else{
$(".projectWindow").show();
projectStatus.status="show";
}
});


$(".cvMini").click(function(){
if(cvStatus.status=="show")
{
cvStatus.oldWidth=cvStatus.width;
cvStatus.oldHeight=cvStatus.height;
cvStatus.oldLeft=cvStatus.left;
cvStatus.oldBottom=cvStatus.bottom;
cvStatus.width=60;
cvStatus.height=40;
cvStatus.left=0;
cvStatus.bottom=0;
cvStatus.status="hide";
move("cvWindow",cvStatus,"hide");
}

else if(cvStatus.status=="hide")
{
cvStatus.status="show";
exchange(cvStatus);
move("cvWindow",cvStatus,"show");
}

else{
$(".cvWindow").show();
cvStatus.status="show";
}
});


$(".min").click(function(){
var classname=$(this).parent().parent().attr("class");
if(/project/.test(classname))
{
projectStatus.oldWidth=projectStatus.width;
projectStatus.oldHeight=projectStatus.height;
projectStatus.oldLeft=projectStatus.left;
projectStatus.oldBottom=projectStatus.bottom;
projectStatus.width=60;
projectStatus.height=40;
projectStatus.left=60;
projectStatus.bottom=0;
projectStatus.status="hide";
move("projectWindow",projectStatus,"hide");
}
if(/cv/.test(classname))
{
cvStatus.oldWidth=cvStatus.width;
cvStatus.oldHeight=cvStatus.height;
cvStatus.oldLeft=cvStatus.left;
cvStatus.oldBottom=cvStatus.bottom;
cvStatus.width=60;
cvStatus.height=40;
cvStatus.left=0;
cvStatus.bottom=0;
cvStatus.status="hide";
move("cvWindow",cvStatus,"hide");

}

});

$(".max").click(function(){
var newWidth=$(document).width()-2;
var newHeight=$(document).height()-42;
var contentWidth=newWidth-10;
var contentHeight=newHeight-50;

var classname=$(this).parent().parent().attr("class");
if(/project/.test(classname))
{//if project begin
if($projectCount % 2)
{

projectStatus.oldWidth=projectStatus.width;
projectStatus.oldHeight=projectStatus.height;
projectStatus.oldLeft=projectStatus.left;
projectStatus.oldBottom=projectStatus.bottom;
projectStatus.width=newWidth;
projectStatus.height=newHeight;
projectStatus.left=0;
projectStatus.bottom=40;
$projectCount++;
move("projectWindow",projectStatus,"no");

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
$(this).children("img").attr("src","img/recover.png");
}

else{
$projectCount++;

exchange(projectStatus);
move("projectWindow",projectStatus,"no");

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
$(this).children("img").attr("src","img/max.png");
}

}//if project end; 

else if(/cv/.test(classname))
{//if cv begin
  if($cvCount % 2)
   {
   cvStatus.oldWidth=cvStatus.width;
   cvStatus.oldHeight=cvStatus.height;
   cvStatus.oldLeft=cvStatus.left;
   cvStatus.oldBottom=cvStatus.bottom;
   cvStatus.width=newWidth;
   cvStatus.height=newHeight;
   cvStatus.left=0;
   cvStatus.bottom=40;
   $cvCount++;
   move("cvWindow",cvStatus,"no");
   $(".cvWindow>.windowContent").css({
   "width":contentWidth+"px",
   "height":contentHeight+"px"
   });
   $("#name").css({
   width:"120px",
   height:"120px"
   });
   $("#contact").css({
   width:$(document).width()-240
   });
   $("#cvDetail").css({
   width:$(document).width()-100
   });
   $(this).children("img").attr("src","img/recover.png");
   }
   else{
   $cvCount++;
   exchange(cvStatus); 
   move("cvWindow",cvStatus,"no");
   $(".cvWindow>.windowContent").css({
   "width":"790px",
   "height":"658px"
   });
   $("#name").css({
   width:"100px",
   height:"80px"
   });
   $("#contact").css({
   width:600
   });
   $("#cvDetail").css({
   width:780
   });
   $(this).children("img").attr("src","img/max.png");
  
  }
}//cv end;

});
$(".close").click(function(){
$(this).parent().parent().hide();
var classname=$(this).parent().parent().attr("class");
if(/project/.test(classname))
  {
  projectStatus.status="close";
  }
else if(/cv/.test(classname))
  {
  cvStatus.status="close";
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
