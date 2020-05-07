const canvas = document.getElementById('mycanvas');

let resizeW = window.innerWidth; //anna / ota koko
let resizeH = window.innerHeight; //anna / ota koko

const renderer = new PIXI.Renderer({
    view: canvas,
    width: resizeW,
    height: resizeH,
    resolution: window.devicePixelRatio,
    autoDensity: true //automatic ratio
});

window.addEventListener('resize', resize); //resize handler

function resize() {

    resizeW = window.innerWidth;
    resizeH = window.innerHeight;

    renderer.resize(resizeW, resizeH);
}

const stage = new PIXI.Container();

const texture = PIXI.Texture.from('alien.png');
const img = new PIXI.Sprite(texture);

img.anchor.x = 0.5;
img.anchor.y = 0.5;
stage.addChild(img);

const ticker = new PIXI.Ticker();
ticker.add(animate);
ticker.start();

function animate() {

    img.x = renderer.screen.width / 2;
    img.y = renderer.screen.height / 2;
    img.rotation += 0.1;
    renderer.render(stage);
}



