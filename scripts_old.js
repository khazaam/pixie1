const canvas = document.getElementById('mycanvas');


const app = new PIXI.Application({
    view: canvas,
    width: window.innerWidth,
    height: window.innerHeight,

});

console.log(PIXI.utils.TextureCache);
let loader = new PIXI.loader();
loader.onComplete.add(handleLoadComplete);
loader.add("alien.png");

let kuva;

function handleLoadComplete(){

    let texture = loader.resource["alien.png"].texture;
    kuva = new PIXI.Sprite(texture);
    kuva.anchor.x = 0.5;
    kuva.anchor.y = 0.5;
    app.stage.addChild(kuva);

    app.ticker.add(animate);
}

function animate() {
    kuva.x = app.renderer.screen.width / 2;
    kuva.y = app.renderer.screen.height / 2;
    kuva.rotation += 0.1;
}



