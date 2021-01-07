    var tom,jerry;
    var garden;
    function preload() {
        //load the images here
        tom.loadImage("tomOne.png,tomTwo.png,tomThree.png,TomFour.png");
        jerry.loadImage("jerryOne.png,jerryTwo.png,jerryThree.png,jerryFour.png");
        garden.loadImage("garden.png");
    }

    function setup(){

        createCanvas(1000,800);

        //create tom and jerry sprites here
        tom.createSprite(20,12,5,20);
        tom.addImage("tomImage");
        tom.scale=0.3;

        jerry.createsprite(40,10,30,6);
        jerry.addImage("jerryImage");
        jerry.scale=0.2;
    }

    function draw() {

        background("garden");
        //Write condition here to evalute if tom and jerry collide

        text(mouseX+','+mouseY,10,45);

        if(tom.x - jerry.x<(tom.width - jerry.width)/2){
            tom.addAnimation("tomFour.png",tomThree.png);
            tom.changeAnimation("tomFour.png")

        }
        keyPressed();
        drawSprites();
    }


    function keyPressed(){

    //For moving and changing animation write code here
    if(keyCode === LEFT_ARROW){
        tom.velocity=-5;
        tom.addAnimation("tomRunning,tomTwo.png");
        tom.changeAnimation("tomRunning");
    }
    }
