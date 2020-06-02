import Platform from "../components/Platform";
import {relWidth} from "../utils/uiUtils";
import Ball from "../components/Ball";

export const horizontalScroll = (userPlatform: Platform, platformsArray: Platform[], ball: Ball) => {
    userPlatform.translate({x:0, y:1000});
    let horizontalScrollMovement = setInterval(function(platformsArray){
        if (ball.getPosition().x < relWidth(0.05)) {
            clearInterval(horizontalScrollMovement);
            userPlatform.translate({x:0, y:-1000});
            return;
        }
        platformsArray.forEach((platform) => {
            platform.translate({ x: relWidth(-0.005), y: 0});
        });
        ball.translate({ x: relWidth(-0.005), y: 0});
    }, 5, platformsArray, ball);

}