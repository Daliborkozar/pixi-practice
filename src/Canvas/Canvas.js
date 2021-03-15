
import tableBackgroundImg from '../assets/table_background.jpg'
import card_back from '../assets/cards/back.png'

import React, { useRef, useEffect } from "react";
import { Application, Sprite, Loader , utils} from "pixi.js"
import myStyle from './Canvas.module.css'
import SPRITESHEET_URL from '../assets/cardsset.json'



function MyComponent() {
  

  const loader = new Loader()
  const app = new Application({
    width: 800,
    height: 600,
    antialias: true,
    transparent: false,
    resolution: 1
  });

     const setup = () => {
      let background = new Sprite(loader.resources[tableBackgroundImg].texture)
      background.height = 600
      background.width = 800
      

      let sprite = new Sprite(loader.resources[card_back].texture)
      sprite.height = 120
      sprite.width = 80
      sprite.x = 600
      sprite.y = 200

      
      app.stage.addChild(background);
      app.stage.addChild(sprite);
    }

    loader
    .add(tableBackgroundImg)
    .add(card_back)
    .load(setup)

  const ref = useRef(null);
  //Loader.shared.add(SPRITESHEET_URL).load(setup)
  useEffect(() => {
   
    // On first render add app to DOM
    ref.current.appendChild(app.view);

    //load image
    //app.stage.addChild(Sprite.from(tableBackgroundImg));
    setup()
    app.start();
    return () => {
      // On unload stop the application
      app.destroy(true, true);
      //app.stop();
    };
  });




  return (<div className={myStyle.Canvas} ref={ref}></div>);
}


export default MyComponent