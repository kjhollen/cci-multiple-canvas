/*
 * multiple canvases with instance mode
 */

/* CANVAS 1 -------------------------------------------------------------- */

/* define a callback function that will be run when the
 * first canvas is created.
 * this function will take a p5 instance (p) and you can call
 * any normal p5.js functions on p directly.
 * 
 * in this example, our first canvas makes a pink circle that follows
 * around the cursor.
 */
function sketch1(p) {

  // define setup on the p5 instance (p)
  p.setup = function () {
    let cnv = p.createCanvas(300, 400);

    // set which element this p5 instance's canvas will appear in
    cnv.parent('canvas1Container');
  };

  // define draw() on the p5 instance (p)
  p.draw = function () {
    p.background(0);
    p.stroke(255, 0, 255);
    p.noFill();
    p.circle(p.mouseX, p.mouseY, 50);
  };
}

/* create a new p5.js instance with the sketch1 callback function,
 * which will be called when the new instance is ready for use
 */
new p5(sketch1);

/* CANVAS 2 -------------------------------------------------------------- */

/* define a callback function that will be run when the
 * second canvas is created.
 * this function will take a p5 instance (p) and you can call
 * any normal p5.js functions on p directly.
 * 
 * in this example, our second canvas makes a white square that follows
 * around the cursor.
 */
function sketch2(p) {

  // define setup on the p5 instance (p)
  p.setup = function () {
    let cnv = p.createCanvas(400, 300);

    // set which element this p5 instance's canvas will appear in
    cnv.parent('canvas2Container');

    // if we're using any built-in variables for p5.js,
    // we'll also need to preface those with p (our p5 instance)
    p.rectMode(p.CENTER);
  };


  p.draw = function () {
    p.background(56, 87, 219);
    p.noFill();
    p.stroke(255);
    p.square(p.mouseX, p.mouseY, 50);
  };
}

/* create a new p5.js instance with the sketch2 callback function,
 * which will be called when the new instance is ready for use
 */
new p5(sketch2);