
//Render Object
function KeytarRender() {
	
  this.ctx = document.getElementById('heroCanvas').getContext('2d');
  
  // Time Engine Variables
  this.startTime = Date.now();
  this.readRange = 50;
  this.currTime; 
  
  this.dogeY = 100;
  
  // Note rendering Queues 
  this.qNotes = [];
  this.wNotes = [];
  this.eNotes = [];
  this.rNotes = [];
  this.tNotes = [];
  
  //Initialization 
  var myInterval = setInterval(setCurrTime, 5);
  this.setupGame();
}

//GameSetUp
KeytarRender.prototype.setupGame = function(){
	this.drawBounds();
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
function drawImage() {
	
	var that = kR;	
	
	that.clearCanvas();
	
		if(that.qNotes.length > 0)
		{
			for(var x = 0; x < that.qNotes.length; x++){
				that.ctx.drawImage(that.qNotes[x].img, 0, that.qNotes[x].y, 100, 50);
				that.qNotes[x].y += 5;
			}
		}
	
	//if(that.qNotes[0] != undefined)	
	//	that.ctx.drawImage(that.qNotes[0].img, 0, that.qNotes[0].y, 100, 50);
	
	//console.log(this);
	window.requestAnimationFrame(drawImage);
}

// setInterval function: Get's in game time 
function setCurrTime(){
	kR.currTime = Date.now() - kR.startTime;
	//console.log(kR.currTime);
	readOutNotes();
	//kR.drawImage();
	//kR.clearCanvas();
}

//Calls out Notes to spawn 
function readOutNotes() {
	
		//console.log(kR.qNotes);
		if(kMain.qNotes.length > 0 && kMain.qNotes[0] <= kR.currTime - kR.readRange)
		{
			console.log("Q reader reading at time: " + kMain.qNotes[0] + " " + kR.currTime);
			//console.log(kR.qNotes);
			kR.qNotes.push(new GreenNote());
			kMain.qNotes.shift();
		}
		if(kMain.wNotes.length > 0 && kMain.wNotes[0] <= kR.currTime - kR.readRange)
		{
			//console.log("W reader reading at time: " + kMain.wNotes[0]);
			kR.wNotes.push(kMain.wNotes[0]);
			kMain.wNotes.shift();
		}
		if(kMain.eNotes.length > 0 && kMain.eNotes[0] <= kR.currTime - kR.readRange)
		{
			//console.log("E reader reading at time: " + kMain.eNotes[0]);
			kR.eNotes.push(kMain.eNotes[0]);
			kMain.eNotes.shift();
		}
		if(kMain.rNotes.length > 0 && kMain.rNotes[0] <= kR.currTime - kR.readRange)
		{
			//console.log("R reader reading at time: " + kMain.rNotes[0]);
			kR.rNotes.push(kMain.rNotes[0]);
			kMain.rNotes.shift();
		}
		if(kMain.tNotes.length > 0 && kMain.tNotes[0] <= kR.currTime - kR.readRange)
		{
			//console.log("T reader reading at time: " + kMain.tNotes[0]);
			kR.tNotes.push(kMain.tNotes[0]);
			kMain.tNotes.shift();
		}
}

var kMain = new KeytarMain();
kMain.loadSong(testSong);

var nReader = new NoteReader();

var kR = new KeytarRender();

//console.log(kR.qNotes.length);

window.requestAnimationFrame(drawImage);