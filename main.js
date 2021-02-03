        var mouseEvent = "empty";
        var lpx,lpy;
        canvas=document.getElementById('myCanvas');
        ctx=canvas.getContext("2d");
        color="black";
        width_line=1;
        canvas.addEventListener("mousedown", my_mousedown);
        function my_mousedown(e){
        color=document.getElementById("color").value;
        width_line=document.getElementById("width_of_line").value;
        mouseEvent="mouseDown";
        }
        canvas.addEventListener("mousemove", my_mousemove);
        function my_mousemove(e){
        cpx=e.clientX-canvas.offsetLeft; 
        cpy=e.clientY-canvas.offsetTop;
        if(mouseEvent=="mouseDown"){
             ctx.beginPath();
            ctx.strokeStyle=color;              
            ctx.lineWidth=width_line;
            console.log("last postition of x and y cordinates=");
            console.log("x="+lpx+"y="+lpy);
            ctx.moveTo(lpx,lpy);
            console.log("current position of x and y cordinates=");
            console.log("x="+cpx+"y="+cpy);
            ctx.lineTo(cpx,cpy);
                ctx.stroke();
        }  
        lpx=cpx;
        lpy=cpy;  
        }
        canvas.addEventListener("mouseup", my_mouseup);
        function my_mouseup(e){
            mouseEvent="mouseUP";
        }
        canvas.addEventListener("mouseleave", my_mouseleave);
        function my_mouseleave(e){
            mouseEvent= "mouseleave";
        }
