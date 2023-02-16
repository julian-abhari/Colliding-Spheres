class Block {
  constructor(x, y, z) {
    this.position = createVector(x, y, z);
    this.velocity = p5.Vector.random3D();
    this.velocity.mult(random(0.2, 1));
    this.acceleration = createVector(0, 0, 0);
    this.rWidth = 2;
  }

  show() {
    push();
    //this.rHeight = map(sin(angle + offset), -1, 1, 100, 300);
    //this.rHeight = 200*(sin(0.5 * offset + angle));
    translate(this.position.x, this.position.y, this.position.z);
    noStroke();
    normalMaterial(255);
    //vertex(this.position.x, this.position.y, this.position.z);
    box(this.rWidth, this.rWidth, this.rWidth);
    pop();
  }
}
