
 const canvas = document.getElementById('mycanvas');

 const app = new PIXI.Application({
 
     view: canvas,
     width: window.innerWidth,
     height: window.innerHeight,
 
 });
 
 document.body.appendChild(app.view); //see trought
 const texture = PIXI.Texture.from('alien.png'); //where is the image
 const img = new PIXI.Sprite(texture);
 
 //size
 img.x = app.renderer.width / 2;
 img.y = app.renderer.height / 2;
 img.anchor.x = 0.5;
 img.anchor.y = 0.5;
 
 app.stage.addChild(img); //image

