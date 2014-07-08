var drawing = false;

$(function(){
  $('#canvas').click(onebox);
  $('#canvas').mousedown(function (e) { drawing = true; });
  $('#canvas').mousemove(onebox);
  $('#canvas').mouseup(function(e) { drawing = false; });
});

function drawBox(x,y){
  var ctx=canvas.getContext('2d');
  ctx.fillStyle='#FF0000';
  ctx.fillRect(x,y,5,5);
}

function onebox(e){
  if(drawing){

    var canvas = e.target;
    jcanvas = $(canvas);
  
    x = e.pageX - jcanvas.offset().left;
    y = e.pageY - jcanvas.offset().top;
    drawBox(x, y);  
  }
}
