class JSphere {
  constructor(x, y, z, radius) {
    this.x = x;
    this.y = y;
    this.z = z;
    this.total = 20;
    this.radius = radius;
    this.blocks = [];
    for (var x = 0; x < this.total; x += 1) {
      this.blocks[x] = [];
      var longetude = map(x, 0, this.total, -PI, PI);
      for (var y = 0; y < this.total; y += 1) {
        var latitude = map(y, 0, this.total, -HALF_PI, HALF_PI);
        this.blocks[x][y] = [];
        for (var z = 0; z < this.total; z += 1) {
          var xOffset = this.radius * sin(longetude) * cos(latitude);
          var yOffset = this.radius * sin(longetude) * sin(latitude);
          var zOffset = this.radius * cos(longetude);
          for (var angle = 0; angle < TWO_PI; angle += 0.01) {
            this.blocks[x][y][z] = new Block(xOffset, yOffset, zOffset);
          }
        }
      }
    }
  }

  show() {
    beginShape(POINTS);
    for (var x = 0; x < this.total; x += 1) {
      for (var y = 0; y < this.total; y += 1) {
        for (var z = 0; z < this.total; z += 1) {
          vertex(this.blocks[x][y][z].position.x, this.blocks[x][y][z].position.y, this.blocks[x][y][z].position.z);
        }
      }
    }
    endShape();
  }
}
