//water animation, shifts y-values
let yscale = 0.0;
let font;
let buttons = {} //stores the buttons
let mixture = {  //stores the
  acids: [],     //instance of spheres
  bases: [],     //based on type of
  water: [],     //molecule
}


function setup() {
  createCanvas(800, 500);
  

    buttons.HCl = new Buttons(515, 80, 47, 144, 218, "HCl")
    buttons.HNO3= new Buttons(620, 80, 47, 144, 218, "HNO₃")
    buttons.H2CO3= new Buttons(515, 140, 47, 144, 218, "H₂CO₃")
    buttons.H2SO4= new Buttons(620, 140, 47, 144, 218, "H₂SO₄")
    buttons.NaOH= new Buttons(515, 250, 37, 196, 245, "NaOH")
    buttons.KOH= new Buttons(620, 250,37, 196, 245, "KOH")
    buttons.NH4= new Buttons(515, 310, 37, 196, 245,"NH₄OH")
    buttons.BaOH2= new Buttons(620, 310, 37, 196, 245,"Ba(OH)₂")
}

function grid(){
  stroke(190);
  strokeWeight(0.5);
  for (i = -10; i < width; i += 20) { //draws vertical lines along the x-axis until 
    line(i, 0, i, width);                  // i is less than width
  }
  for (i = -10; i < height; i += 20) {    //draws horizontal lines 
    line(0, i, 800, i);
  }
}

const backButton = document.getElementById('backButton');

backButton.addEventListener('click', function(){
  window.location.href = "index.html";
})
                            
function drawWater(){
  fill(0, 119, 190);

  // Draw water
  beginShape();
  {
    let xscale = 0;
    for (let x = 50; x <= 455; x += 15) {
      //loops across the screen from pixels 50-455, placing points at intervals of 15
      let y = map(noise(xscale, yscale), 0, 1, 200, 100); //rescales the value of the noise function() into a range of yvalues between 200 and 100
      vertex(x, y); //determines the first vertex based on the for loop
      xscale += 0.05;
    }
    yscale += 0.01;
    vertex(450, 370);
    vertex(54, 370);
    endShape(CLOSE);
  }
}

function handleButtons(){
  let H = [213, 62, 79]
  let OH = [125, 108, 203]
  
  // Handle button presses and create spheres
  //Acids
  if (buttons.HCl.isPressed() && !buttons.HCl.pressed && mixture.acids.length < 10) {
    //isPressed() is for checking whether the button is currently being pressed
    //.pressed is the current state of the button and checks whether if it was previously         pressed - it also has an initial value of false
    let x = random(70, 430)
    let y = random(200, 350)
    
    //displays a metal ion and a H+ ion drawn in the same location 
    mixture.acids.push(new Spheres(x, y, H[0],H[1],H[2], "H⁺"));      //pushes new instance to array           'acids'
    mixture.acids.push(new Spheres(x + 15, y, 0, 255, 0, "Cl⁻"));     //pushes new instance to array           'acids'
    print("Button Pressed");
    
    buttons.HCl.pressed = true; //marks the button as pressed, and does not create another sphere         until it resets its value to false
  }
  if (buttons.HNO3.isPressed() && !buttons.HNO3.pressed && mixture.acids.length < 10) {
    let x = random(70, 430)
    let y = random(200, 350)
    mixture.acids.push(new Spheres(x,y, H[0],H[1],H[2], "H⁺"));
    mixture.acids.push(new Spheres(x + 15, y, 0, 255, 0, "NO₃⁻"));   
    buttons.HNO3.pressed = true;
  }
  if (buttons.H2CO3.isPressed() && !buttons.H2CO3.pressed && mixture.acids.length < 10) {
    let x = random(70, 430)
    let y = random(200, 350)
    mixture.acids.push(new Spheres(x,y, H[0],H[1],H[2], "H⁺"));
    mixture.acids.push(new Spheres(x - 15,y, H[0],H[1],H[2], "H⁺"));
    mixture.acids.push(new Spheres(x + 15, y, 0, 191, 255, "HCO₃⁻"));
    buttons.H2CO3.pressed = true;
  }
  if (buttons.H2SO4.isPressed() && !buttons.H2SO4.pressed && mixture.acids.length < 10) {
    let x = random(70, 430)
    let y = random(200, 350)
    mixture.acids.push(new Spheres(x, y,H[0],H[1],H[2], "H⁺"));
    mixture.acids.push(new Spheres(x - 15, y,H[0],H[1],H[2], "H⁺"));
    mixture.acids.push(new Spheres(x + 15, y, 128, 0, 128, "HSO₄⁻"));
    buttons.H2SO4.pressed = true;
  }
  if (buttons.NaOH.isPressed() && !buttons.NaOH.pressed && mixture.bases.length < 10) {
    let x = random(70, 430)
    let y = random(200, 350)
    mixture.bases.push(new Spheres(x, y, 173, 216, 230, "Na⁺"))
    mixture.bases.push(new Spheres(x + 15, y, OH[0], OH[1], OH[2], "OH⁻"))
      //pushes new instance to an array bases;
    buttons.NaOH.pressed = true;
  }
  if (buttons.KOH.isPressed() && !buttons.KOH.pressed && mixture.bases.length < 10) {
    let x = random(70, 430)
    let y = random(200, 350)
    mixture.bases.push(new Spheres(x, y, 173, 216, 230, "K⁺"))
    mixture.bases.push(new Spheres(x + 15, y, OH[0], OH[1], OH[2], "OH⁻"))
    buttons.KOH.pressed = true;
  }
  if (buttons.NH4.isPressed() && !buttons.NH4.pressed && mixture.bases.length < 10) {
    let x = random(70, 430)
    let y = random(200, 350)
    mixture.bases.push(new Spheres(x, y, 173, 216, 230, "NH₄⁺"))
    mixture.bases.push(new Spheres(x + 15, y, OH[0], OH[1], OH[2], "OH⁻"))
    buttons.NH4.pressed = true;
  }
  if (buttons.BaOH2.isPressed() && !buttons.BaOH2.pressed && mixture.bases.length < 10) {
    let x = random(70, 430)
    let y = random(200, 350)
    mixture.bases.push(new Spheres(x, y, 48, 252, 144, "Ba⁺"));
    mixture.bases.push(new Spheres(x - 15, y, OH[0], OH[1], OH[2], "OH⁻"))
    mixture.bases.push(new Spheres(x + 15, y, OH[0], OH[1], OH[2], "OH⁻"))
    buttons.BaOH2.pressed = true;
  }
}
function beaker(){
  
  // Draw beaker
  strokeWeight(9);
  stroke(0);
  fill(250, 45);
  rect(50, 70, 400, 300, 20);
  strokeWeight(12);
  stroke(255);
  line(40, 70, 450, 70);
}

function drawButtons(){
  // Draw buttons
  for (let key in buttons){
    buttons[key].show()
  }
}

function updateAcids(){
    // Update and draw 'acids' Spheres
  for (let i = 0; i < mixture.acids.length; i++) {
    mixture.acids[i].show(); //iterates over the acids array and           displays the instance
    mixture.acids[i].move();    
    mixture.acids[i].bounce();
    mixture.acids[i].collide(mixture.acids);

    mixture.acids[i].fade()
    if (mixture.acids[i].transparency <= 0) {
        mixture.acids.splice(i, 1); //remove from bases array
        i--; // decrement the index after removing an element
      }
  }
}

function updateBases(){
  for (let i = mixture.bases.length - 1; i >= 0; i--) {  // Iterate in reverse
    mixture.bases[i].show();
    mixture.bases[i].move();
    mixture.bases[i].bounce();
    mixture.bases[i].collide(mixture.bases);

     if (mixture.bases[i].neutralization(mixture.acids)) { 
        mixture.bases.splice(i, 1);
        continue; // Skip to the next iteration to avoid accessing a removed element
    }

    mixture.bases[i].fade(); // Let the base fade out

    if (mixture.bases[i].transparency <= 0) {  // Remove fully transparent bases
      console.log('rawr')
      mixture.bases.splice(i, 1);
    }
  }
}

function updateWater(){
  for (let i = 0; i < mixture.water.length; i++) {
    mixture.water[i].show()
    mixture.water[i].move()
    mixture.water[i].bounce()
    mixture.water[i].fade()
    if (mixture.water[i].transparency <= 0) {  
      // Remove fully transparent bases
      mixture.water.splice(i, 1);
    }
  }
}

function draw() {
  background(255);
  grid()
  drawWater()
  beaker()
  drawButtons()
  handleButtons()
  updateAcids()
  updateBases()
  updateWater()
  noStroke();

  fill(0)
  textSize(20)
  text('Acids', 530, 70)
  text('Bases', 530, 240)
  
}
function mouseReleased() {
  // Reset the pressed status when the mouse is released
  for(let key in buttons){
    buttons[key].pressed = false
  }
}


class Buttons {
  constructor(x, y, r,g,b, label) {
    this.x = x; //x&y-coordinates
    this.y = y;
    this.r = r
    this.g = g
    this.b = b
    this.label = label; //corresponding chemical
    this.pressed = false;
  }
  show() {
    //class action that draws the button based on the passed parameters of the new instance and class properties
    strokeWeight(1);
    fill(this.r, this.g, this.b);
    rect(this.x, this.y, 100, 40, 10);
    fill(255)
    noStroke();
    textSize(25);
    text(this.label, this.x + 10, this.y + 29);
  }
  isPressed() {
    return (
      mouseIsPressed &&
      mouseX > this.x &&
      mouseX < this.x + 100 &&
      mouseY > this.y &&
      mouseY < this.y + 40
    );
  }
}


class Spheres {
  constructor(x, y, r, g, b, label) {
    this.x = x;
    this.y = y;
    this.r = r;
    this.g = g;
    this.b = b;
    this.label = label;
    this.xvel = random(-0.5, 0.5);
    this.yvel = random(-0.5, 0.5);
    this.transparency = 255 //control transparency
  }

  show() {
    // draw the sphere with fading effect for metal ions
    if (this.label == "Na⁺" || 
        this.label == "K⁺" || 
        this.label == "Ba⁺" || 
        this.label == "NH₄⁺" || 
        this.label == "HCO₃⁻" ||
        this.label == "HSO₄⁻" ||
        this.label == "Cl⁻" ||
        this.label == "NO₃⁻"  || this.label == "H₂O"
       ) {
      fill(this.r, this.g, this.b, this.transparency); 
    } else {
      fill(this.r, this.g, this.b);
    }
    //class action that draws the spheres based on the passed parameters of the new instance and class             properties
    
    circle(this.x, this.y, 35);
    textSize(10);
    fill(0, this.transparency);
    text(this.label, this.x - 12, this.y + 4);
  }

  move() { // adds the xvel/yvel value to the x&y coordinate
    this.x += this.xvel;
    this.y += this.yvel;
  }

  bounce() {
    //checks if this.x or y is hiting the boundaries of the beaker
    //if so, changes directions
    if (this.x >= 440 || this.x <= 60) {
      this.xvel *= -1;
    }
    if (this.y >= 350 || this.y <= 200) {
      this.yvel *= -1;
    }
  }

  collide(solution) {
    for (var i = 0; i < solution.length; i++) {
      let d = dist(this.x, this.y, solution[i].x,       solution[i].y);
      if (d < 35) {
        //sum of radii
        let angle = atan2(solution[i].y - this.y,   solution[i].x - this.x);
        let targetX = this.x + cos(angle) * 35;
        let targetY = this.y + sin(angle) * 35;
        let ax = (targetX - solution[i].x) * 0.05;
        let ay = (targetY - solution[i].y) * 0.05;

        this.xvel -= ax;
        this.yvel -= ay;
        solution[i].xvel += ax;
        solution[i].yvel += ay;
      }
    }
  }
  neutralization(){
    for (var i = mixture.acids.length - 1; i >= 0; i--) {
      let d = dist(this.x, this.y, mixture.acids[i].x, mixture.acids[i].y);    //checks whether it has collided with an acid
      if (d < 35 && (this.label === "OH⁻" && mixture.acids[i].label === "H⁺")) {
        
        mixture.water.push(new Spheres(mixture.acids[i].x, mixture.acids[i].y, 128, 128, 128, "H₂O"))
        mixture.acids.splice(i, 1);
        mixture.bases.splice(i, 1);
        print('collide')
        return true;
      }
    }
    return false;
  }
  fade() {
    // fade out metal ions over time
    if (this.label === "Na⁺" || 
        this.label === "K⁺" || 
        this.label === "Ba⁺" || 
        this.label === "NH₄⁺" || 
        this.label === "HCO₃⁻" ||
        this.label === "HSO₄⁻" ||
        this.label === "Cl⁻" ||
        this.label === "NO₃⁻" || this.label == "H₂O"
       ){
      this.transparency -= 2; // Decrease transparency
      
    }
  }
} 
