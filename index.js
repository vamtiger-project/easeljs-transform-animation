/*
EaselJs - Tranform and Animation
*/
var canvas;
var stage;
var horizontalToggle = "right";
var verticalToggle = "up";

function skewAnimate(shape) {
	createjs.Ticker.setFPS(30);

	createjs.Ticker.on("tick", function () {
		shape.skewY += 3;
		shape.skewX -= 1;
	});
}

function  upDownAnimate(shape) {
	createjs.Ticker.setFPS(30);

	createjs.Ticker.on("tick", function () {
		if (verticalToggle == "up") {
			shape.y -= 5;
			if (shape.y == 50) {
				verticalToggle = "down";
			}
		} else if (verticalToggle == "down") {
			shape.y += 5;
			if (shape.y > canvas.height-50) {
				verticalToggle = "up";
			}
		}
	});
}

function leftRightAnimate(shape) {
	createjs.Ticker.setFPS(30);

	createjs.Ticker.on("tick", function () {
		if (horizontalToggle == "right") {
		shape.x += 5;
			if (shape.x > canvas.width-50) {
				horizontalToggle = "left";
			}
		} else if (horizontalToggle == "left") {
			shape.x -= 5;
			if (shape.x < 50) {
				horizontalToggle = "right";
			}
		}
	});
}

function star() {
	var shape = new createjs.Shape();

	shape.graphics.beginFill("orange").drawPolyStar(0, 0, 50, 5, 0.5, 0);

	shape.x = 250;
	shape.y = 100;

	stage.addChild(shape);
	stage.update();

	rotateAnimate(shape);
}

function rotateAnimate(shape) {
	createjs.Ticker.setFPS(30);

	createjs.Ticker.on("tick", function () {
		shape.rotation += 8;
		stage.update();
	});
}

function rect4() {
	var shape = new createjs.Shape();

	shape.graphics.beginFill("blue").rect(-50, -50, 100, 100);	// offset

	shape.alpha = 0.5;

	shape.x = 100;
	shape.y = 380;

	stage.addChild(shape);

	rotateAnimate(shape);

	skewAnimate(shape);
}

function rect3() {
	var shape = new createjs.Shape();

	shape.graphics.beginFill("red").rect(-50, -50, 100, 100);	// offset

	shape.alpha = 0.3;

	shape.x = 250;
	shape.y = 250;

	stage.addChild(shape);

	rotateAnimate(shape);

	leftRightAnimate(shape);
}

function rect2() {
	var shape = new createjs.Shape();

	shape.graphics.beginFill("green").rect(0, 0, 100, 100);	// offset

	shape.alpha = 0.3;

	shape.regX = 50;
	shape.regY = 50;

	shape.x = 100;
	shape.y = 250;

	stage.addChild(shape);

	rotateAnimate(shape);

	upDownAnimate(shape);
}

function rect1() {
	var shape = new createjs.Shape();

	shape.graphics.beginFill("purple").rect(50, 50, 100, 100);	// offset

	shape.regX = 100;
	shape.regY = 100;

	shape.x = 100;
	shape.y = 100;

	stage.addChild(shape);

	rotateAnimate(shape);
}

function draw() {
	rect1();
	rect2();
	rect3();
	rect4();
	star();
}

function setStage() {
	canvas = $("#canvas1")[0];
	canvas.width = 380;
	canvas.height = 480;

	stage = new createjs.Stage(canvas);
}

$(function () {
	setStage();
	draw();
});
