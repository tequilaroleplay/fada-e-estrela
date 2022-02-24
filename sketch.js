var estrelaImg,bgImg;
var estrela, estrelaBody;
//criar variável para sprite de fada e imgFada
var fada,fadaVoz,fadaImg;

const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload() {
    estrelaImg = loadImage("images/star.png");
	bgImg = loadImage("images/starNight.png");
	//carregar animação de fada 
	fadaImg = loadAnimation("images/fairyImage1.png","images/fairyImage2.png");
	fadaVoz = loadSound("sound/JoyMusic.mp3");

}

function setup() {
    createCanvas(800, 750);

    //escrever código para tocar o som vozFada
    fadaVoz.play();

    //criar sprite de fada e adicionar animação para fada
    fada = createSprite(130, 520);
	fada.addAnimation("fairyflying",fadaImg);  
	fada.scale =0.25;

    estrela = createSprite(650,30);
	estrela.addImage(estrelaImg);
	estrela.scale = 0.2;

    engine = Engine.create();
	world = engine.world;

	estrelaBody = Bodies.circle(650 , 30 , 5 , {restitution:0.5, isStatic:true});
	World.add(world, estrelaBody);
	
	Engine.run(engine);

}

function draw() {
    background(bgImg);
  
    estrela.x= estrelaBody.position.x 
    estrela.y= estrelaBody.position.y 
  
    console.log(estrela.y);
  
    if(estrela.y > 470 && estrelaBody.position.y > 470 ){
        Matter.Body.setStatic(estrelaBody,true);
    }
  
    drawSprites();
  
}
  
  function keyPressed() {
  
      if(keyCode === RIGHT_ARROW){
             fada.x = fada.x + 20;
      }
      
          if(keyCode === LEFT_ARROW){
             fada.x = fada.x - 20;
      }
  
      if (keyCode === DOWN_ARROW) {
          Matter.Body.setStatic(estrelaBody,false); 
      }
  }