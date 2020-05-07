const canvas = document.getElementById('mycanvas');

            const app = new PIXI.Application({
                view: canvas,
                width: window.innerWidth, 
                height: window.innerHeight
            });

            console.log(PIXI.utils.TextureCache);

            let loader = PIXI.Loader.shared;

            loader.add("alienpicture", "alien.png")
                .add("alienback", "background.png")
                .on("progress", handleLoadProgress)
                .on("load", handleLoadAsset)
                .on("error", handleLoadError)
                .load(handleLoadComplete);

            let kuva;

            function handleLoadProgress(loader, resource) {
                console.log(loader.progress + "% loaded");
            }

            function handleLoadAsset(loader, resource) {
                console.log("asset loaded " + resource.name);
            }

            function handleLoadError() {
                console.error("load error");
            }

            function handleLoadComplete() {
                let texture = loader.resources.alienpicture.texture;
                kuva = new PIXI.Sprite(texture);
                kuva.anchor.x = 0.5;
                kuva.anchor.y = 0.5;
                app.stage.addChild(kuva);

                app.ticker.add(animate);

                setTimeout(() => {
                    kuva.texture = loader.resources.alienback.texture;
                }, 2000);
            }

            function animate() {
                kuva.x = app.renderer.screen.width / 2;
                kuva.y = app.renderer.screen.height / 2;
                kuva.rotation += 0.1;
            }