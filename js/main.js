class Player {
    constructor() {
        this.width = 20;
        this.height = 10;
        this.positionX = 0;
        this.positionY = 0;
        this.domElement = null;
        this.createDomElement();
    }

    createDomElement() {
        // step1: create player element
        this.domElement = document.createElement("div");
        // step2: add/modify div by adding the id player
        this.domElement.id = "player";
        this.domElement.style.width = this.width + "vw";
        this.domElement.style.height = this.height + "vh";
        this.domElement.style.left = this.positionX + "vw";
        this.domElement.style.bottom = this.positionY + "vh";
        // step 3: append to the board
        const board = document.getElementById("board");
        board.appendChild(this.domElement);
    }

    moveRight() {
        console.log("moving right")
        this.positionX++;
        this.domElement.style.left = this.positionX + "vw";
    }
    moveLeft() {
        console.log("moving left")
        this.positionX--;
        this.domElement.style.left = this.positionX + "vw";
    }
}

class Obstacle {
    constructor() {
        this.width = 30;
        this.height = 15;
        this.positionX = 50 - this.width/2;
        this.positionY = 100;
        this.domElement = null;

        this.createDomElement();
    }
    createDomElement() {
        // step1: create player element
        this.domElement = document.createElement("div");
        // step2: add/modify div by adding the id obstacle
        this.domElement.className = "obstacle";
        this.domElement.style.width = this.width + "vw";
        this.domElement.style.height = this.height + "vh";
        this.domElement.style.left = this.positionX + "vw";
        this.domElement.style.bottom = this.positionY + "vh";
        // step 3: append to the board
        const board = document.getElementById("board");
        board.appendChild(this.domElement);
    }
    moveDown() {
        console.log("moving down")
        this.positionY--;
        this.domElement.style.bottom = this.positionY + "vh";
    }
}

const player = new Player();
const obstacleArr = []; // will store instances of the class obstacle

setInterval(() => {
    const newObstacle = new Obstacle();
    obstacleArr.push(newObstacle);
}, 4000)

setInterval(() => {
    obstacleArr.forEach((obstacleInstance) => {
    obstacleInstance.moveDown();
    });
}, 100)

document.addEventListener("keydown", (event) => {
    if (event.code === "ArrowLeft") {
        player.moveLeft();
    } else if (event.code === "ArrowRight") {
        player.moveRight();
    }
})