import Level from "../models/Level"
import Stage from "../models/Stage"
import Platform from "../models/Platform"
import { relWidth, relHeight } from "../utils/uiUtils"
import Limit, { Orientation } from "../models/Limit"

const leftLimit = new Limit(0.2, Orientation.LEFT);
const rightLimit = new Limit(0.8, Orientation.RIGHT);

const level1 = new Level([
    // State1
    new Stage([
        new Platform(
            { 
                x: relWidth(0.1), 
                y: relHeight(0.3)
            },
            {
                width: relWidth(0.2), 
                height: relHeight(0.05)
            },
            0.78
        ),
        new Platform(
            {
                x: relWidth(0.25),
                y: relHeight(0.6)
            },
            {
                width: relWidth(0.15), 
                height: relHeight(0.05)
            },
            0.39
        ),
        new Platform(
            {
                x: relWidth(0.5), 
                y: relHeight(0.999)
            }, 
            {
                width: relWidth(1), 
                height: relHeight(0.01)
            }
        ),
        new Platform(
            {
                x: relWidth(0.001), 
                y: relHeight(0.5)
            },
            {
                width: relWidth(0.01), 
                height: relHeight(1)
            }
        ),
        new Platform(
            {
                x: relWidth(0.5),  
                y: relHeight(0.001)
            },
            {
                width: relWidth(1),
                height: relHeight(0.01)
            }
        ),
        new Platform(
            {
                x: relWidth(0.9),
                y: relHeight(0.4)
            },
            {
                width: relWidth(0.3),
                height: relHeight(0.05)
            }
        )
    ], leftLimit, rightLimit),
    // State2
    new Stage([
        new Platform(
            {
                x: relWidth(0.5), 
                y: relHeight(0.999)
            }, 
            {
                width: relWidth(1), 
                height: relHeight(0.01)
            }
        ),
        new Platform(
            {
                x: relWidth(0.5),
                y: relHeight(0.5)
            },
            {
                width: relWidth(0.3),
                height: relHeight(0.05)
            },
            1.57
        ),
        new Platform(
            {
                x: relWidth(0.9), 
                y: relHeight(0.9)
            }, 
            {
                width: relWidth(0.3), 
                height: relHeight(0.05)
            }
        )
    ], leftLimit, rightLimit),
    // State3
    new Stage([
        new Platform(
            {
                x: relWidth(0.5), 
                y: relHeight(0.999)
            }, 
            {
                width: relWidth(1), 
                height: relHeight(0.01)
            }
        ),
        new Platform(
            {
                x: relWidth(0.9),
                y: relHeight(0.75)
            },
            {
                width: relWidth(0.3),
                height: relHeight(0.05)
            },
            0.5
        ),
        new Platform(
            {
                x: relWidth(0.55), 
                y: relHeight(0.45)
            }, 
            {
                width: relWidth(0.3), 
                height: relHeight(0.05)
            },
            -0.5
        )
    ], leftLimit, rightLimit)
    
], 30);

export default level1;