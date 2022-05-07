var canvas=new fabric.Canvas("myCanvas");

block_w=30;
block_h=30;
player_x=10;
player_y=10;

player_o="";

function p_update(){
    fabric.Image.fromURL("player.png", function(Img){
        player_o=Img;
        player_o.scaleToWidth(150);
        player_o.scaleToHeight(140);

        player_o.set({
            top:player_y,
            left:player_x,
        });
        canvas.add(player_o);
    });
}
function b_update(get_img){
    fabric.Image.fromURL(get_img, function(Img){
        block_o=Img;
        block_o.scaleToWidth(block_w);
        block_o.scaleToHeight(block_h);

        block_o.set({
            top:player_y,
            left:player_x,
        });
        canvas.add(block_o);
    });
}

window.addEventListener("keydown",my_key);

function my_key(e) {
    keypressed=e.keyCode;
    console.log(keypressed);

    if (e.shiftKey == true && keypressed == '80') {
       block_h=block_h+10;
       block_w=block_w+10; 
       document.getElementById("current_width").innerHTML=block_w;
       document.getElementById("current_height").innerHTML=block_h;    
    }
    if (e.shiftKey == true && keypressed == '77') {
        block_h=block_h-10;
        block_w=block_w-10; 
        document.getElementById("current_width").innerHTML=block_w;
        document.getElementById("current_height").innerHTML=block_h;    
     }
     if (keypressed=='37') {
         left();
         console.log("left");
     }
     if (keypressed=='38') {
        up();
        console.log("up");
    }
    if (keypressed=='39') {
        right();
        console.log("right");
    }
    if (keypressed=='40') {
        down();
        console.log("down");
    }
    if (keypressed=='71') {
       b_update("ground.png") ;
        console.log("g");
    }
    if (keypressed=='87') {
        b_update("wall.jpg") ;
         console.log("w");
     }
     if (keypressed=='76') {
        b_update('light_green.png') ;
         console.log("l");
     }
     if (keypressed=='84') {
        b_update('trunk.jpg') ;
         console.log("t");
     }
     if (keypressed=='82') {
        b_update("roof.jpg") ;
         console.log("r");
     }
     if (keypressed=='89') {
        b_update("yellow_wall.png") ;
         console.log("y");
     }
     if (keypressed=='68') {
        b_update("dark_green.png") ;
         console.log("d");
     }
     if (keypressed=='85') {
        b_update("unique.png") ;
         console.log("u");
     }
     if (keypressed=='67') {
        b_update('cloud.jpg') ;
         console.log("c");
     }
}

function up() {
if (player_y>=0) {
    player_y=player_y-block_h;
    console.log("blockheight="+block_h);
    console.log("when up arrow is pressed,x= "+player_x+",y= "+player_y);
    canvas.remove(player_o);
    p_update();
}    
}

function down() {
    if (player_y<=500) {
        player_y=player_y+block_h;
        console.log("blockheight="+block_h);
        console.log("when down arrow is pressed,x= "+player_x+",y= "+player_y);
        canvas.remove(player_o);
        p_update();
    }    
    }

    function left() {
        if (player_x>=0) {
            player_x=player_x-block_w;
            console.log("block width="+block_w);
            console.log("when left arrow is pressed,x= "+player_x+",y= "+player_y);
            canvas.remove(player_o);
            p_update();
        }    
        }

        
     function right() {
        if (player_x<=850) {
            player_x=player_x+block_w;
            console.log("block width="+block_w);
            console.log("when right arrow is pressed,x= "+player_x+",y= "+player_y);
            canvas.remove(player_o);
            p_update();
        }    
        }
        