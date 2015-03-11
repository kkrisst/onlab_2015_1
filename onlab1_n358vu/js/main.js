var canvas, ctx, flag = false,
prevX = 0,
currX = 0,
prevY = 0,
currY = 0,
dot_flag = false,
rect;

function init() {
	canvas = document.getElementById('canvas');
	ctx = canvas.getContext("2d");

	canvas.addEventListener("mousemove", function (e) {
		findxy('move', e)
	}, false);
	canvas.addEventListener("mousedown", function (e) {
		findxy('down', e)
	}, false);
	canvas.addEventListener("mouseup", function (e) {
		findxy('up', e)
	}, false);
	canvas.addEventListener("mouseout", function (e) {
		findxy('out', e)
	}, false);
}

function draw() {
	ctx.beginPath();
	ctx.moveTo(prevX, prevY);
	ctx.lineTo(currX, currY);
	ctx.strokeStyle = "Black";
	ctx.lineWidth = 1;
	ctx.stroke();
	ctx.closePath();
}

function findxy(res, e) {
	rect = canvas.getBoundingClientRect();
	if (res == 'down') {

		prevX = currX;
		prevY = currY;
		currX = e.clientX - rect.left;
		currY = e.clientY - rect.top;

		flag = true;
		/*dot_flag = true;
		if (dot_flag) {
			ctx.beginPath();
			ctx.fillStyle = "Black";
			ctx.fillRect(currX, currY, 2, 2);
			ctx.closePath();
			dot_flag = false;
		}*/
	}
	if (res == 'up' || res == "out") {
		flag = false;
	}
	if (res == 'move') {
		if (flag) {

			prevX = currX;
			prevY = currY;
			currX = e.clientX - rect.left;
			currY = e.clientY - rect.top;
			draw();

			document.getElementById('coordinates-current').innerHTML = "(" + currX + ", " + currY + ")";
		}
	}
}