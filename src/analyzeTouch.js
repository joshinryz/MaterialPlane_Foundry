import { IRtokens } from "./analyzeIR.js";

let timeout;

export async function analyzeTouch(type,data) {

    if (game.paused) return;

    const changedTouches = data.changedTouches;

    for (let touch of changedTouches) {
        const id = touch.identifier;
        const coordinates = {x: touch.screenX, y: touch.screenY};
        const scaledCoordinates = scaleTouchInput(coordinates)
        const forceNew = type == 'start';

        if (type != 'end') {
            if (timeout != undefined) clearTimeout(timeout);
            timeout = setTimeout(dropToken,game.settings.get('MaterialPlane','touchTimeout'));
            const foundToken = await moveToken(id,coordinates,scaledCoordinates,forceNew);
            if (!foundToken) genericTouch(type,coordinates,scaledCoordinates);
        }
        else {
            const foundToken = dropToken(id);
            if (!foundToken) genericTouch(type,coordinates,scaledCoordinates);
        }
    }
}

async function moveToken(tokenNr,coordinates,scaledCoordinates,forceNew) {
    return await IRtokens[tokenNr].update(coordinates,scaledCoordinates,forceNew);
}

function dropToken(tokenNr=0) {
    clearTimeout(timeout);
    timeout = undefined;
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

function genericTouch(type,coordinates,scaledCoordinates) {
    let element = document.elementFromPoint(scaledCoordinates.x,scaledCoordinates.y);
    if (element == null && type == 'end') checkDoorClick(scaledCoordinates)
}

function checkDoorClick(data) {
    const doors = canvas.walls.doors;
    for (let door of doors) {
        const position = door.doorControl.position;
        const hitArea = door.doorControl.hitArea;

        if (Math.abs(data.x - position.x - hitArea.width/2) <= hitArea.width/2 && Math.abs(data.y - position.y - hitArea.height/2) <= hitArea.height/2) {
            const event = {
                data: {
                    originalEvent: {
                        button: 0
                    }
                },
                stopPropagation: event => {return;}
            }
            door.doorControl._onMouseDown(event);
        }
    }
}