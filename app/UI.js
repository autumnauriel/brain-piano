
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
            // Generate Keys
            sounds: [],

            // BCI Control
            selectedKey: 0,
            selected: false
        }

        // this.dependencies = ['https://cdn.jsdelivr.net/npm/p5@1.4.0/lib/p5.js']


        // Port Definition
        this.ports = {
            left: {
                onUpdate: (user) => {
                    // Command for left blink
                    if (user.value === true) if (this.props.selectedKey > 0) this.props.selectedKey--
                }
            },
            right: {
                onUpdate: (user) => {
                    // Command for right blink
                    if (user.value === true) if (this.props.selectedKey < this.props.sounds.length) this.props.selectedKey++
                }
            },
            select: {
                onUpdate: (user) => {
                    // Command for selection
                    this.props.selected = user.value
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
    }


    _p5 = (p) => {

        this.props.p = p

        p.preload = () => {
            this.props.sounds.push(p.loadSound("./app/assets/C.wav"));
            this.props.sounds.push(p.loadSound("./app/assets/D.wav"));
            this.props.sounds.push(p.loadSound("./app/assets/E.wav"));
            this.props.sounds.push(p.loadSound("./app/assets/F.wav"));
            this.props.sounds.push(p.loadSound("./app/assets/G.wav"));
            this.props.sounds.push(p.loadSound("./app/assets/A.wav"));
            this.props.sounds.push(p.loadSound("./app/assets/B.wav"));
            this.props.sounds.push(p.loadSound("./app/assets/C3.wav")); 
            this.props.sounds.push(p.loadSound("./app/assets/D3.wav"));
            this.props.sounds.push(p.loadSound("./app/assets/E3.wav"));
            this.props.sounds.push(p.loadSound("./app/assets/F3.wav"));
            this.props.sounds.push(p.loadSound("./app/assets/G3.wav"));
            this.props.sounds.push(p.loadSound("./app/assets/A3.wav"));
            this.props.sounds.push(p.loadSound("./app/assets/B3.wav"));
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

            this.props.selectedKey = this.props.sounds.length / 2

        };

        p.draw = () => {

            p.background(0);

            let n = this.props.sounds.length

            let keyHeight = this.props.container.clientHeight/2.5
            let keyWidth = this.props.container.clientWidth/n
            let blackKeyWidth = keyWidth/2
            for (let i = 0; i < n; i++){

                // White Keys
                let x = i*keyWidth
                let y = this.props.rectY

                let hoveredMouse = (p.mouseX > x && p.mouseX < x + keyWidth && p.mouseY > y && p.mouseY < y + keyHeight) 
                let selectedMouse = (hoveredMouse && p.mouseIsPressed)

                let hoveredBCI = (i === this.props.selectedKey)
                let selectedBCI = this.props.selected

                if (hoveredMouse || hoveredBCI) {
                    if (selectedMouse || selectedBCI) {
                        p.fill(34, 230, 82);
                        snowflakeAnim();
                        this.props.sounds[i].play();
                    } else {
                        p.fill(220);
                        // p.fill(0);
                    }
                } else {
                    p.fill(255);
                }
                
                p.rect(x, y, keyWidth, keyHeight);
            }

            for (let i = 0; i < n; i++){

                // Black Keys
                p.fill(0);
                p.rect((i+0.5)*keyWidth + 0.5*blackKeyWidth, this.props.rectY, blackKeyWidth, keyHeight/2.2);
            }
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