var mouseEvent = "empty";
var last_position_of_x, last_position_of_y;

    canvas = document.getElementById('myCanvas');
    ctx = canvas.getContext("2d");
    
    color = "black";
    width_of_line = 2;

    canvas.addEventListener("mousedown", my_mousedown);
    
    function my_mousedown(e)
    {
        color = document.getElementById("color").value;
        width_of_line = document.getElementById("width_of_line").value;
        mouseEvent = "mouseDown";
    }

    canvas.addEventListener("mouseup", my_mouseup);
    function my_mouseup(e)
    {
        mouseEvent = "mouseUP";
    }

    canvas.addEventListener("mouseleave", my_mouseleave);
    function my_mouseleave(e)
    {
        mouseEvent = "mouseleave";
    }

    canvas.addEventListener("mousemove", my_mousemove);
    function my_mousemove(e)
    {

         current_position_of_mouse_x = e.clientX - canvas.offsetLeft;
         current_position_of_mouse_y = e.clientY - canvas.offsetTop;

        if (mouseEvent == "mouseDown") {
        ctx.beginPath();
        ctx.strokeStyle = color;
        ctx.lineWidth = width_of_line;

        console.log("Last position of x and y coordinates = ");
        console.log("x = " + last_position_of_x + "y = " + last_position_of_y);
        ctx.moveTo(last_position_of_x, last_position_of_y);

        console.log("Current position of x and y coordinates = ");
        console.log("x  = " + current_position_of_mouse_x + "y = " + current_position_of_mouse_y);
        ctx.lineTo(current_position_of_mouse_x, current_position_of_mouse_y);
        ctx.stroke();
        }

        last_position_of_x = current_position_of_mouse_x; 
        last_position_of_y = current_position_of_mouse_y;
    }
var widthScreen=screen.width;
var heightScreen=screen.height;
var newWidthS=widthScreen-70;
var newHeightS=heightScreen-300;

if (widthScreen<992 )
{
    document.getElementById("myCanvas").width=newWidthS;
    document.getElementById("myCanvas").height=newHeightS;
    document.body.style.overflow="hidden";
    
}
canvas.addEventListener("touchstart",my_touchStart);
function my_touchStart(e)
{
    last_position_of_x=e.touches[0].clientX-canvas.offsetLeft;
    last_position_of_y=e.touches[0].clientY-canvas.offsetTop;
    console.log("my_touchStart");
    color = document.getElementById("color").value;
        width_of_line = document.getElementById("width_of_line").value;
        
}

canvas.addEventListener("touchmove",my_touchMove);
function my_touchMove(e)
{
    current_position_of_touch_x=e.touches[0].clientX-canvas.offsetLeft;
    current_position_of_touch_y=e.touches[0].clientY-canvas.offsetTop;
    ctx.beginPath();
    ctx.strokeStyle=color;
    ctx.lineWidth=width_of_line;
    console.log("last position of x= "+last_position_of_x+" last position of y= "+last_position_of_y);
    ctx.moveTo(last_position_of_x,last_position_of_y);
    console.log("current positon of x= "+current_position_of_touch_x+"current position of y= "+current_position_of_touch_y);
    ctx.lineTo(current_position_of_touch_x,current_position_of_touch_y);
    ctx.stroke();
    last_position_of_x=current_position_of_touch_x;
    last_position_of_y=current_position_of_touch_y;
}

function cleararea()
{
    ctx.clearRect(0,0,canvas.width,canvas.height);
}