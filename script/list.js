$(function(){
var width=$(document).width();
var height=$(document).height();
var birdWidth=Math.floor(width/10);
var birdHeight=Math.floor(height/10);
$("body").css({"background-size":width+"px "+height+"px"});
$("div>img").css({"width":width/10+"px"});

var birds=[];
var count=1;
function Bird(left,top){
this.left=left;
this.top=top;
}
function placeBirds(){
var left=Math.floor(Math.random()*width);
var top=Math.floor(Math.random()*height);
var bird= new Bird(left,top);
if(testInterset(bird)&&testBorder(bird))
 {
 birds.push(bird);
 $("#bird"+count).css({"left":bird.left+"px","top":bird.top+"px"});
 count++;
 }
}

function testInterset(bird){
var len=birds.length;
for(var i=0;i<len;i++)
  {
  var left1=bird.left;
  var top1=bird.top;
  var left2=birds[i].left;
  var top2=birds[i].top;
  if((Math.abs(left1-left2)<birdWidth)||(Math.abs(top1-top2)<birdHeight))
   {
   return false;
   }
  }
return true;
}
function testBorder(bird){
if((bird.left+birdWidth)>(width-200)||(bird.top+birdHeight)>(height-100))
  {
  return false;
  }
else
  {
  return true;
  }
}
while(count<5)
{
placeBirds();
}

$("#imgHoverZoom").hover(function(){
$("#bird1>img").css({"filter":"alpha(opacity=40)","-moz-opacity":"0.4","-khtml-opacity":"0.4","opacity":"0.4"});},function(){
$("#bird1>img").css({"filter":"alpha(opacity=5)","-moz-opacity":"0.05","-khtml-opacity":"0.05","opacity":"0.05"});
});

$("#woodFormation").hover(function(){
$("#bird2>img").css({"filter":"alpha(opacity=40)","-moz-opacity":"0.4","-khtml-opacity":"0.4","opacity":"0.4"});},function(){
$("#bird2>img").css({"filter":"alpha(opacity=5)","-moz-opacity":"0.05","-khtml-opacity":"0.05","opacity":"0.05"});
});

$("#picea").hover(function(){
$("#bird3>img").css({"filter":"alpha(opacity=40)","-moz-opacity":"0.4","-khtml-opacity":"0.4","opacity":"0.4"});},function(){
$("#bird3>img").css({"filter":"alpha(opacity=5)","-moz-opacity":"0.05","-khtml-opacity":"0.05","opacity":"0.05"});
});

$("#yak").hover(function(){
$("#bird4>img").css({"filter":"alpha(opacity=40)","-moz-opacity":"0.4","-khtml-opacity":"0.4","opacity":"0.4"});},function(){
$("#bird4>img").css({"filter":"alpha(opacity=5)","-moz-opacity":"0.05","-khtml-opacity":"0.05","opacity":"0.05"});
});

});
