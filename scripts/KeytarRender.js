
//Render Object
function KeytarRender() {
  this.ctx = document.getElementById('heroCanvas').getContext('2d');
  this.setupGame();
}

//GameSetUp
KeytarRender.prototype.setupGame = function(){
	this.drawBounds();
	this.drawImage();
};

KeytarRender.prototype.clearCanvas = function() {
  ctx.clearRect(0,0,900,600);
};

KeytarRender.prototype.drawBounds = function() {
	this.ctx.moveTo(0, 0);
    this.ctx.lineTo(900,0);
    this.ctx.lineTo(900, 600);
	this.ctx.lineTo(0, 600 );
	this.ctx.lineTo(0, 0);
	
	this.ctx.stroke();
};

//Draws Stuff on Canvas
KeytarRender.prototype.drawImage = function() {
	
	//Scope for onload
	var that = this;
	
	var doge = new Image();

	doge.onload = function() {
		console.log(that.ctx);
		that.ctx.drawImage(doge, 0, 0, 100, 50);
	};
	
	doge.src = "images/doge.jpg"; 
};

KeytarRender.prototype.render = function(){
	
	
};

var kR = new KeytarRender();