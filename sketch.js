let angle = 0;
let isometricAngle;
var jsphere;

function setup() {
	createCanvas(1000, 1000, WEBGL);
	isometricAngle = atan(1 / sqrt(2));
	jsphere = new JSphere(0, 0, 0, 200);
}

function draw() {
	background(255);
	//ortho(-1000, 1000, 1000, -1000, -2000, 1000);
	//ortho(-1000, 1000, 1000, -1000, -1000, 1000);

	rotateX(isometricAngle);
	rotateY(angle);
	jsphere.show();
	angle -= 0.01;
}
