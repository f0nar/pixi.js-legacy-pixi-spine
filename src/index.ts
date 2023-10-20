import 'pixi-spine';
import * as PIXI from "pixi.js-legacy";
import { Spine } from "pixi-spine";

const run = async () => {
  const app = new PIXI.Application<HTMLCanvasElement>({
    background: "#1099bb",
    resizeTo: window
  });
  
  document.body.appendChild(app.view);

  PIXI.Assets.add('spineData', 'skeleton.json');
  PIXI.Assets.add('spineAtlas', 'skeleton.atlas');
  await PIXI.Assets.load(['spineData', 'spineAtlas']).then(console.log);

  const spineResource = PIXI.Assets.get('spineData');
  const spine = new Spine(spineResource.spineData);
  app.stage.addChild(spine);
  
  const bounds = spine.getBounds(true);
    
  spine.position.set((app.view.width - bounds.width) / 2 - bounds.left, (app.view.height - bounds.height) / 2 - bounds.top);
  spine.state.setAnimation(0, "animation", true);
  spine.autoUpdate = true;
};

run();
