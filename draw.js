$(function(){
  $('#canvas').click(drawBox);
});


function drawBox(e){
  var canvas = e.target;
  jcanvas = $(canvas);
  
  x = e.pageX - jcanvas.position().left;
  y = e.pageY - jcanvas.position().top;
  
  var ctx=canvas.getContext('2d');
  ctx.fillStyle='#FF0000';
  ctx.fillRect(x,y,20,20);
}
