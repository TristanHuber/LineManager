var drawing;
var line;

$(function(){

  $('#canvas').click(onebox);
  $('#canvas').mousedown(
    function (e) {
      var canvas = e.target;
      var ctx = canvas.getContext('2d');
      ctx.beginPath();
      drawing = true;
    });
  $('#canvas').mousemove(onebox);
  $('#canvas').mouseup(
    function (e) {
      drawing = false;
    });
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
    var ctx=canvas.getContext('2d');
  
    x = e.pageX - jcanvas.offset().left;
    y = e.pageY - jcanvas.offset().top;
    ctx.lineTo(x, y);
    ctx.stroke();
    
  }
}
