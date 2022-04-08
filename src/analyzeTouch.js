//import { IRtoken } from "./IRtoken/IRtoken.js";
import { IRtokens } from "./analyzeIR.js";

let timeout;

export function analyzeTouch(type,touchData) {
    if (game.paused) return;
    if (type != 'end') {
        let coordinates = {x: touchData[0].screenX, y: touchData[0].screenY};
        console.log('touch',type,coordinates);
        
        if (timeout != undefined) clearTimeout(timeout);
        timeout = setTimeout(dropToken,game.settings.get('MaterialPlane','touchTimeout'));
        moveToken(0,coordinates);
    }
    else {
        console.log('end')
        dropToken();
    }
        
    
}

async function moveToken(tokenNr,coordinates) {
    await IRtokens[tokenNr].update(coordinates,scaleTouchInput(coordinates),true);
}

function dropToken(tokenNr=0) {
    clearTimeout(timeout);
    timeout = undefined;
    console.log('dropToken')
    IRtokens[tokenNr].dropIRtoken();
}

function scaleTouchInput(coords) {
    //Calculate the amount of pixels that are visible on the screen
    const horVisible = screen.width/canvas.scene._viewPosition.scale;
    const vertVisible = screen.height/canvas.scene._viewPosition.scale;

    //Calculate the scaled coordinates
    const posX = (coords.x/screen.width)*horVisible+canvas.scene._viewPosition.x-horVisible/2;
    const posY = (coords.y/screen.height)*vertVisible+canvas.scene._viewPosition.y-vertVisible/2;

    //Return the value
    return {x:Math.round(posX),y:Math.round(posY)};
}



//game.settings.get('MaterialPlane','touchTimeout')