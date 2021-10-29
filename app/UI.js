class UI {

    static id = String(Math.floor(Math.random() * 1000000))

    constructor(info, graph) {

        // UI Identifier
        this.props = {
            id: String(Math.floor(Math.random() * 1000000)),
            container: document.createElement('div'),
            r: 0,
            g: 0,
            b: 0,
            snowflakes: [],
            // rectX: 0,
            rectY: 0,
            rectWidth: 0,
            p: null,
            sounds: {}
        }

        // this.dependencies = ['https://cdn.jsdelivr.net/npm/p5@1.4.0/lib/p5.js']


        // Port Definition
        this.ports = {
            left: {
                onUpdate: () => {
                    // Command for left blink
                }
            },
            right: {
                onUpdate: () => {
                    // Command for right blink
                }
            },
            element: {
                data: this.props.container,
                input: { type: null },
                output: { type: Element }
            }
        }

        this.props.container.id = this.props.id
        this.props.container.style = 'height:100%; width:100%; display: flex; align-items: center; justify-content: center;'


    }

    init = () => {

        this.sketch = new p5(this._p5, this.props.container)

        this.props.container.onresize = this.responsive

        this.responsive()
    }

    deinit = () => {

    }

    responsive = () => {
        if (this.props.p) this.props.p.createCanvas(this.props.container.clientWidth, this.props.container.clientHeight);
        // if (this.props.p) this.props.p.createCanvas(990, 600)//this.props.container.clientWidth, this.props.container.clientHeight);
    }


    _p5 = (p) => {
        p.preload = () => {
            this.props.sounds.cSound = p.loadSound("./app/assets/C.wav");
            this.props.sounds.dSound = p.loadSound("./app/assets/D.wav");
            this.props.sounds.eSound = p.loadSound("./app/assets/E.wav");
            this.props.sounds.fSound = p.loadSound("./app/assets/F.wav");
            this.props.sounds.gSound = p.loadSound("./app/assets/G.wav");
            this.props.sounds.aSound = p.loadSound("./app/assets/A.wav");
            this.props.sounds.bSound = p.loadSound("./app/assets/B.wav");
            this.props.sounds.c3Sound = p.loadSound("./app/assets/C3.wav"); 
            this.props.sounds.d3Sound = p.loadSound("./app/assets/D3.wav");
            this.props.sounds.e3Sound = p.loadSound("./app/assets/E3.wav");
            this.props.sounds.f3Sound = p.loadSound("./app/assets/F3.wav");
            this.props.sounds.g3Sound = p.loadSound("./app/assets/G3.wav");
            this.props.sounds.a3Sound = p.loadSound("./app/assets/A3.wav");
            this.props.sounds.b3Sound = p.loadSound("./app/assets/B3.wav");
        }

        p.setup = () => {
            // p.createCanvas(990, 600) //this.props.container.clientWidth, this.props.container.clientHeight);
            p.createCanvas(this.props.container.clientWidth, this.props.container.clientHeight);
            this.props.rectY = 300;
            this.props.rectWidth = 70;
            this.props.rectHeight = 400;
            this.props.blackRectWidth = 38;
            this.props.blackRectHeight = 180;
            this.props.r = p.random(255);
            this.props.g = p.random(255);
            this.props.b = p.random(255);

        };

        p.draw = () => {

            p.background(0);
            p.fill(255);
            p.rect(0, this.props.rectY, this.props.rectWidth, this.props.rectHeight);
            p.rect(70, this.props.rectY, this.props.rectWidth, this.props.rectHeight);
            p.rect(140, this.props.rectY, this.props.rectWidth, this.props.rectHeight);
            p.rect(210, this.props.rectY, this.props.rectWidth, this.props.rectHeight);
            p.rect(280, this.props.rectY, this.props.rectWidth, this.props.rectHeight);
            p.rect(350, this.props.rectY, this.props.rectWidth, this.props.rectHeight);
            p.rect(420, this.props.rectY, this.props.rectWidth, this.props.rectHeight);
            p.rect(490, this.props.rectY, this.props.rectWidth, this.props.rectHeight);
            p.rect(560, this.props.rectY, this.props.rectWidth, this.props.rectHeight);
            p.rect(630, this.props.rectY, this.props.rectWidth, this.props.rectHeight);
            p.rect(700, this.props.rectY, this.props.rectWidth, this.props.rectHeight);
            p.rect(770, this.props.rectY, this.props.rectWidth, this.props.rectHeight);
            p.rect(840, this.props.rectY, this.props.rectWidth, this.props.rectHeight);
            p.rect(910, this.props.rectY, this.props.rectWidth, this.props.rectHeight);
            p.fill(0);
            p.rect(50, this.props.rectY, this.props.blackRectWidth, this.props.blackRectHeight);
            p.rect(120, this.props.rectY, this.props.blackRectWidth, this.props.blackRectHeight);
            p.rect(260, this.props.rectY, this.props.blackRectWidth, this.props.blackRectHeight);
            p.rect(330, this.props.rectY, this.props.blackRectWidth, this.props.blackRectHeight);
            p.rect(400, this.props.rectY, this.props.blackRectWidth, this.props.blackRectHeight);
            p.rect(540, this.props.rectY, this.props.blackRectWidth, this.props.blackRectHeight);
            p.rect(610, this.props.rectY, this.props.blackRectWidth, this.props.blackRectHeight);
            p.rect(750, this.props.rectY, this.props.blackRectWidth, this.props.blackRectHeight);
            p.rect(820, this.props.rectY, this.props.blackRectWidth, this.props.blackRectHeight);
            p.rect(890, this.props.rectY, this.props.blackRectWidth, this.props.blackRectHeight);



            if (p.mouseX > 0 && p.mouseX < 0 + this.props.rectWidth && p.mouseY > this.props.rectY && p.mouseY < this.props.rectY + this.props.rectHeight) {
                if (p.mouseIsPressed) {
                    p.fill(34, 230, 82);
                    p.rect(0, this.props.rectY, this.props.rectWidth, this.props.rectHeight);
                    p.fill(0);
                    p.rect(50, this.props.rectY, this.props.blackRectWidth, this.props.blackRectHeight);
                    p.rect(120, this.props.rectY, this.props.blackRectWidth, this.props.blackRectHeight);
                    snowflakeAnim();
                    this.props.sounds.c3Sound.play();

                }
                else {
                    p.fill(220);
                    p.rect(0, this.props.rectY, this.props.rectWidth, this.props.rectHeight);
                    p.fill(0);
                    p.rect(50, this.props.rectY, this.props.blackRectWidth, this.props.blackRectHeight);
                    p.rect(120, this.props.rectY, this.props.blackRectWidth, this.props.blackRectHeight);
                }
            } else {
                p.fill(255);

            }
            if (p.mouseX > 70 && p.mouseX < 70 + this.props.rectWidth && p.mouseY > this.props.rectY && p.mouseY < this.props.rectY + this.props.rectHeight) {
                if (p.mouseIsPressed) {
                    p.fill(255, 105, 180);
                    p.rect(70, this.props.rectY, this.props.rectWidth, this.props.rectHeight);
                    p.fill(0);
                    p.rect(120, this.props.rectY, this.props.blackRectWidth, this.props.blackRectHeight);
                    p.rect(50, this.props.rectY, this.props.blackRectWidth, this.props.blackRectHeight);
                    snowflakeAnim();
                    this.props.sounds.d3Sound.play();
                }
                else {
                    p.fill(220);
                    p.rect(70, this.props.rectY, this.props.rectWidth, this.props.rectHeight);
                    p.fill(0);
                    p.rect(120, this.props.rectY, this.props.blackRectWidth, this.props.blackRectHeight);
                    p.rect(50, this.props.rectY, this.props.blackRectWidth, this.props.blackRectHeight);
                }
            } else {
                p.fill(255);
            }
            if (p.mouseX > 140 && p.mouseX < 140 + this.props.rectWidth && p.mouseY > this.props.rectY && p.mouseY < this.props.rectY + this.props.rectHeight) {
                if (p.mouseIsPressed) {
                    p.fill(37, 105, 248);
                    p.rect(140, this.props.rectY, this.props.rectWidth, this.props.rectHeight);
                    p.fill(0);
                    p.rect(120, this.props.rectY, this.props.blackRectWidth, this.props.blackRectHeight);
                    p.rect(260, this.props.rectY, this.props.blackRectWidth, this.props.blackRectHeight);
                    snowflakeAnim();
                    e3Sound.play();
                }
                else {
                    p.fill(220);
                    p.rect(140, this.props.rectY, this.props.rectWidth, this.props.rectHeight);
                    p.fill(0);
                    p.rect(120, this.props.rectY, this.props.blackRectWidth, this.props.blackRectHeight);
                    p.rect(260, this.props.rectY, this.props.blackRectWidth, this.props.blackRectHeight);
                }
            } else {
                p.fill(255);
            }
            if (p.mouseX > 210 && p.mouseX < 210 + this.props.rectWidth && p.mouseY > this.props.rectY && p.mouseY < this.props.rectY + this.props.rectHeight) {
                if (p.mouseIsPressed) {
                    p.fill(255, 255, 0);
                    p.rect(210, this.props.rectY, this.props.rectWidth, this.props.rectHeight);
                    p.fill(0);
                    p.rect(260, this.props.rectY, this.props.blackRectWidth, this.props.blackRectHeight);
                    p.rect(330, this.props.rectY, this.props.blackRectWidth, this.props.blackRectHeight);
                    snowflakeAnim();
                    this.props.sounds.f3Sound.play();
                }
                else {
                    p.fill(220);
                    p.rect(210, this.props.rectY, this.props.rectWidth, this.props.rectHeight);
                    p.fill(0);
                    p.rect(260, this.props.rectY, this.props.blackRectWidth, this.props.blackRectHeight);
                    p.rect(330, this.props.rectY, this.props.blackRectWidth, this.props.blackRectHeight);
                }
            } else {
                p.fill(255);
            }
            if (p.mouseX > 280 && p.mouseX < 280 + this.props.rectWidth && p.mouseY > this.props.rectY && p.mouseY < this.props.rectY + this.props.rectHeight) {
                if (p.mouseIsPressed) {
                    p.fill(138, 43, 226);
                    p.rect(280, this.props.rectY, this.props.rectWidth, this.props.rectHeight);
                    p.fill(0);
                    p.rect(330, this.props.rectY, this.props.blackRectWidth, this.props.blackRectHeight);
                    p.rect(260, this.props.rectY, this.props.blackRectWidth, this.props.blackRectHeight);
                    snowflakeAnim();
                    this.props.sounds.g3Sound.play();
                }
                else {
                    p.fill(220);
                    p.rect(280, this.props.rectY, this.props.rectWidth, this.props.rectHeight);
                    p.fill(0);
                    p.rect(330, this.props.rectY, this.props.blackRectWidth, this.props.blackRectHeight);
                    p.rect(260, this.props.rectY, this.props.blackRectWidth, this.props.blackRectHeight);
                }
            } else {
                p.fill(255);
            }
            if (p.mouseX > 350 && p.mouseX < 350 + this.props.rectWidth && p.mouseY > this.props.rectY && p.mouseY < this.props.rectY + this.props.rectHeight) {
                if (p.mouseIsPressed) {
                    p.fill(34, 230, 82);
                    p.rect(350, this.props.rectY, this.props.rectWidth, this.props.rectHeight);
                    p.fill(0);
                    p.rect(400, this.props.rectY, this.props.blackRectWidth, this.props.blackRectHeight);
                    p.rect(330, this.props.rectY, this.props.blackRectWidth, this.props.blackRectHeight);
                    snowflakeAnim();
                    this.props.sounds.a3Sound.play();
                }
                else {
                    p.fill(220);
                    p.rect(350, this.props.rectY, this.props.rectWidth, this.props.rectHeight);
                    p.fill(0);
                    p.rect(400, this.props.rectY, this.props.blackRectWidth, this.props.blackRectHeight);
                    p.rect(330, this.props.rectY, this.props.blackRectWidth, this.props.blackRectHeight);
                }
            } else {
                p.fill(255);
            }
            if (p.mouseX > 420 && p.mouseX < 420 + this.props.rectWidth && p.mouseY > this.props.rectY && p.mouseY < this.props.rectY + this.props.rectHeight) {
                if (p.mouseIsPressed) {
                    p.fill(255, 105, 180);
                    p.rect(420, this.props.rectY, this.props.rectWidth, this.props.rectHeight);
                    p.fill(0);
                    p.rect(610, this.props.rectY, this.props.blackRectWidth, this.props.blackRectHeight);
                    p.rect(400, this.props.rectY, this.props.blackRectWidth, this.props.blackRectHeight);
                    snowflakeAnim();
                    this.props.sounds.b3Sound.play();
                }
                else {
                    p.fill(220);
                    p.rect(420, this.props.rectY, this.props.rectWidth, this.props.rectHeight);
                    p.fill(0);
                    p.rect(610, this.props.rectY, this.props.blackRectWidth, this.props.blackRectHeight);
                    p.rect(400, this.props.rectY, this.props.blackRectWidth, this.props.blackRectHeight);
                }
            } else {
                p.fill(255);
            }
            if (p.mouseX > 490 && p.mouseX < 490 + this.props.rectWidth && p.mouseY > this.props.rectY && p.mouseY < this.props.rectY + this.props.rectHeight) {
                if (p.mouseIsPressed) {
                    p.fill(37, 105, 248);
                    p.rect(490, this.props.rectY, this.props.rectWidth, this.props.rectHeight);
                    p.fill(0);
                    p.rect(750, this.props.rectY, this.props.blackRectWidth, this.props.blackRectHeight);
                    p.rect(540, this.props.rectY, this.props.blackRectWidth, this.props.blackRectHeight);
                    snowflakeAnim();
                    this.props.sounds.cSound.play();
                }
                else {
                    p.fill(220);
                    p.rect(490, this.props.rectY, this.props.rectWidth, this.props.rectHeight);
                    p.fill(0);
                    p.rect(750, this.props.rectY, this.props.blackRectWidth, this.props.blackRectHeight);
                    p.rect(540, this.props.rectY, this.props.blackRectWidth, this.props.blackRectHeight);
                }
            } else {
                p.fill(255);
            }
            if (p.mouseX > 560 && p.mouseX < 560 + this.props.rectWidth && p.mouseY > this.props.rectY && p.mouseY < this.props.rectY + this.props.rectHeight) {
                if (p.mouseIsPressed) {
                    p.fill(255, 255, 0);
                    p.rect(560, this.props.rectY, this.props.rectWidth, this.props.rectHeight);
                    p.fill(0);
                    p.rect(610, this.props.rectY, this.props.blackRectWidth, this.props.blackRectHeight);
                    p.rect(540, this.props.rectY, this.props.blackRectWidth, this.props.blackRectHeight);
                    snowflakeAnim();
                    this.props.sounds.dSound.play();
                }
                else {
                    p.fill(220);
                    p.rect(560, this.props.rectY, this.props.rectWidth, this.props.rectHeight);
                    p.fill(0);
                    p.rect(610, this.props.rectY, this.props.blackRectWidth, this.props.blackRectHeight);
                    p.rect(540, this.props.rectY, this.props.blackRectWidth, this.props.blackRectHeight);
                }
            } else {
                p.fill(255);
            }
            if (p.mouseX > 630 && p.mouseX < 630 + this.props.rectWidth && p.mouseY > this.props.rectY && p.mouseY < this.props.rectY + this.props.rectHeight) {
                if (p.mouseIsPressed) {
                    p.fill(138, 43, 226);
                    p.rect(630, this.props.rectY, this.props.rectWidth, this.props.rectHeight);
                    p.fill(0);
                    p.rect(610, this.props.rectY, this.props.blackRectWidth, this.props.blackRectHeight);
                    p.rect(750, this.props.rectY, this.props.blackRectWidth, this.props.blackRectHeight);
                    snowflakeAnim();
                    this.props.sounds.eSound.play();
                }
                else {
                    p.fill(220);
                    p.rect(630, this.props.rectY, this.props.rectWidth, this.props.rectHeight);
                    p.fill(0);
                    p.rect(610, this.props.rectY, this.props.blackRectWidth, this.props.blackRectHeight);
                    p.rect(750, this.props.rectY, this.props.blackRectWidth, this.props.blackRectHeight);
                }
            } else {
                p.fill(255);
            }
            if (p.mouseX > 700 && p.mouseX < 700 + this.props.rectWidth && p.mouseY > this.props.rectY && p.mouseY < this.props.rectY + this.props.rectHeight) {
                if (p.mouseIsPressed) {
                    p.fill(34, 230, 82);
                    p.rect(700, this.props.rectY, this.props.rectWidth, this.props.rectHeight);
                    p.fill(0);
                    p.rect(820, this.props.rectY, this.props.blackRectWidth, this.props.blackRectHeight);
                    p.rect(750, this.props.rectY, this.props.blackRectWidth, this.props.blackRectHeight);
                    snowflakeAnim();
                    this.props.sounds.fSound.play();
                }
                else {
                    p.fill(220);
                    p.rect(700, this.props.rectY, this.props.rectWidth, this.props.rectHeight);
                    p.fill(0);
                    p.rect(820, this.props.rectY, this.props.blackRectWidth, this.props.blackRectHeight);
                    p.rect(750, this.props.rectY, this.props.blackRectWidth, this.props.blackRectHeight);
                }
            } else {
                p.fill(255);
            }
            if (p.mouseX > 770 && p.mouseX < 770 + this.props.rectWidth && p.mouseY > this.props.rectY && p.mouseY < this.props.rectY + this.props.rectHeight) {
                if (p.mouseIsPressed) {
                    p.fill(255, 105, 180);
                    p.rect(770, this.props.rectY, this.props.rectWidth, this.props.rectHeight);
                    p.fill(0);
                    p.rect(820, this.props.rectY, this.props.blackRectWidth, this.props.blackRectHeight);
                    p.rect(750, this.props.rectY, this.props.blackRectWidth, this.props.blackRectHeight);
                    snowflakeAnim();
                    this.props.sounds.gSound.play();
                }
                else {
                    p.fill(220);
                    p.rect(770, this.props.rectY, this.props.rectWidth, this.props.rectHeight);
                    p.fill(0);
                    p.rect(820, this.props.rectY, this.props.blackRectWidth, this.props.blackRectHeight);
                    p.rect(750, this.props.rectY, this.props.blackRectWidth, this.props.blackRectHeight);
                }
            } else {
                p.fill(255);
            }
            if (p.mouseX > 840 && p.mouseX < 840 + this.props.rectWidth && p.mouseY > this.props.rectY && p.mouseY < this.props.rectY + this.props.rectHeight) {
                if (p.mouseIsPressed) {
                    p.fill(37, 105, 248);
                    p.rect(840, this.props.rectY, this.props.rectWidth, this.props.rectHeight);
                    p.fill(0);
                    p.rect(820, this.props.rectY, this.props.blackRectWidth, this.props.blackRectHeight);
                    p.rect(890, this.props.rectY, this.props.blackRectWidth, this.props.blackRectHeight);
                    snowflakeAnim();
                    this.props.sounds.aSound.play();
                }
                else {
                    p.fill(220);
                    p.rect(840, this.props.rectY, this.props.rectWidth, this.props.rectHeight);
                    p.fill(0);
                    p.rect(820, this.props.rectY, this.props.blackRectWidth, this.props.blackRectHeight);
                    p.rect(890, this.props.rectY, this.props.blackRectWidth, this.props.blackRectHeight);
                }
            } else {
                p.fill(255);
            }
            if (p.mouseX > 910 && p.mouseX < 910 + this.props.rectWidth && p.mouseY > this.props.rectY && p.mouseY < this.props.rectY + this.props.rectHeight) {
                if (p.mouseIsPressed) {
                    p.fill(255, 255, 0);
                    p.rect(910, this.props.rectY, this.props.rectWidth, this.props.rectHeight);
                    p.fill(0);
                    p.rect(820, this.props.rectY, this.props.blackRectWidth, this.props.blackRectHeight);
                    p.rect(890, this.props.rectY, this.props.blackRectWidth, this.props.blackRectHeight);
                    snowflakeAnim();
                    this.props.sounds.bSound.play();
                }
                else {
                    p.fill(220);
                    p.rect(910, this.props.rectY, this.props.rectWidth, this.props.rectHeight);
                    p.fill(0);
                    p.rect(820, this.props.rectY, this.props.blackRectWidth, this.props.blackRectHeight);
                    p.rect(890, this.props.rectY, this.props.blackRectWidth, this.props.blackRectHeight);
                }
            } else {
                p.fill(255);
            }

            //  p.text("mouse x: "+p.mouseX+" mouse y:"+p.mouseY, p.width/2,p.height-30);
        }

        function mousePressed() {
            p.cursor(p.HAND);


        }

        function mouseReleased() {
            p.cursor(p.ARROW);
        }

        let snowflakeAnim = () => {
            let t = p.frameCount / 60;

            for (var i = 0; i < p.random(5); i++) {
                this.props.snowflakes.push(new snowflake(this));
            }


            for (let flake of this.props.snowflakes) {
                flake.update(t);
                flake.display();
            }
        }


        class snowflake {

            constructor(parent) {
                // initialize coordinates
                this.posX = 0;
                this.posY = p.random(-50, 0);
                this.initialangle = p.random(0, 2 * p.PI);
                this.size = p.random(2, 8);

                // radius of snowflake spiral
                // chosen so the snowflakes are uniformly spread out in area
                this.radius = p.sqrt(p.random(p.pow(p.width / 2, 2)));
                this.parent = parent

            }

            update = (time) => {
                // x position follows a circle
                let w = 0.6; // angular speed
                let angle = w * time + this.initialangle;
                this.posX = p.width / 2 + this.radius * p.sin(angle);

                // different size snowflakes fall at slightly different y speeds
                this.posY += p.pow(this.size, 0.5);

                // delete snowflake if past end of screen
                if (this.posY > 290) {
                    let index = this.parent.props.snowflakes.indexOf(this);
                    this.parent.props.snowflakes.splice(index, 1);
                }
            };

            display = () => {
                p.ellipse(this.posX, this.posY, this.size);
                p.fill(this.parent.props.r, this.parent.props.g, this.parent.props.b);
            };

        }
    };
}
export { UI }