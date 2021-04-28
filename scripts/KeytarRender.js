
//Render Object
function KeytarRender() {
	
  this.ctx = document.getElementById('heroCanvas').getContext('2d');
  
  // Time Engine Variables
  this.startTime = Date.now();
  this.readRange = 50;
  this.currTime; 
  
  this.dogeY = 100;
  
  // Note rendering Queues 
  var qNotes = [];
  var wNotes = [];
  var eNotes = [];
  var rNotes = [];
  var tNotes = [];
  
  //Initialization 
  var myInterval = setInterval(setCurrTime, 5);
  this.setupGame();
}

//GameSetUp
KeytarRender.prototype.setupGame = function(){
	this.drawBounds();
	this.drawImage();
};

KeytarRender.prototype.clearCanvas = function() {
  this.ctx.clearRect(0,0,900,600);
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
		//console.log(that.ctx);
		that.ctx.drawImage(doge, 0, that.dogeY, 100, 50);
	};
	
	that.dogeY += 0.1;
	doge.src = "images/doge.jpg"; 
};

// setInterval function: Get's in game time 
function setCurrTime(){
	kR.currTime = Date.now() - kR.startTime;
	//console.log(kR.currTime);
	readOutNotes();
	kR.drawImage();
	kR.clearCanvas();
}

//Calls out Notes to spawn 
function readOutNotes() {
	
	if(qArr.length > 0)
	{
		//console.log(kR.currTime + " " + kR.readRange);
		
		if(qArr[0] <= kR.currTime - kR.readRange)
		{
			console.log("Q reader reading at time: " + qArr[0]);
			qArr.shift();
		}
		if(wArr[0] <= kR.currTime - kR.readRange)
		{
			console.log("W reader reading at time: " + wArr[0]);
			wArr.shift();
		}
		if(eArr[0] <= kR.currTime - kR.readRange)
		{
			console.log("E reader reading at time: " + eArr[0]);
			eArr.shift();
		}
		if(rArr[0] <= kR.currTime - kR.readRange)
		{
			console.log("R reader reading at time: " + rArr[0]);
			rArr.shift();
		}
		if(tArr[0] <= kR.currTime - kR.readRange)
		{
			console.log("T reader reading at time: " + tArr[0]);
			tArr.shift();
		}
	}
}

var kR = new KeytarRender();