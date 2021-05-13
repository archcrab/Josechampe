
//Render Object
function KeytarRender() {
	
  this.ctx = document.getElementById('heroCanvas').getContext('2d');
  
  // Time Engine Variables
  this.startTime = Date.now();
  this.readRange = -1700;
  this.currTime; 
  
  this.dogeY = 100;
  
  // Note rendering Queues 
  this.qNotes = [];
  this.wNotes = [];
  this.eNotes = [];
  this.rNotes = [];
  this.tNotes = [];
  
  this.audio = document.getElementById("myAudio");;
  this.audio.play();
  
  //Initialization
  setInterval(setCurrTime, 5);
  //var test = setTimeout(this.setupGame, 10000);   
  //var myInterval = setInterval(setCurrime, 5);
  this.setupGame();
}

//GameSetUp
KeytarRender.prototype.setupGame = function(){
	//setInterval(setCurrTime, 5);
	this.drawBounds();
};

KeytarRender.prototype.clearCanvas = function() {
  this.ctx.clearRect(0,0,900,600);
};

KeytarRender.prototype.drawBounds = function() {
	/*this.ctx.moveTo(0, 0);
    this.ctx.lineTo(900,0);
    this.ctx.lineTo(900, 600);
	this.ctx.lineTo(0, 600 );
	this.ctx.lineTo(0, 0);
	*/
	//Reader
	this.ctx.moveTo(0,475);
	this.ctx.lineTo(600,475);
	this.ctx.moveTo(0,525);
	this.ctx.lineTo(600,525);
	
	//
	this.ctx.font = "30px Arial"; 
	this.ctx.fillText(kMain.score,650,300);
	
	this.ctx.fillText(kMain.rockLevel,650,200);
	
	this.ctx.stroke();
};

//Render Engine
function drawImage() {
	
	var that = kR;	
	
	that.clearCanvas();
	kR.drawBounds();
	
		
		if(that.qNotes.length > 0)
		{
			//console.log(that.qNotes[0].y);
			
			for(var x = 0; x < that.qNotes.length; x++){
				that.ctx.drawImage(that.qNotes[x].img, 0, that.qNotes[x].y, 100, 50);
				that.qNotes[x].y += 5;
			}
			
			if(that.qNotes[0].y > 600)
			{
				that.qNotes.shift();
				kMain.rockLevel -= 1;
			}
		}
		if(that.wNotes.length > 0)
		{
			for(var x = 0; x < that.wNotes.length; x++){
				that.ctx.drawImage(that.wNotes[x].img, 100, that.wNotes[x].y, 100, 50);
				that.wNotes[x].y += 5;
			}
			
			if(that.wNotes[0].y > 600){
				that.wNotes.shift();
				kMain.rockLevel -= 1;
			}
		}
		if(that.eNotes.length > 0)
		{
			//console.log(that.eNotes.length);
			for(var x = 0; x < that.eNotes.length; x++){
				that.ctx.drawImage(that.eNotes[x].img, 200, that.eNotes[x].y, 100, 50);
				that.eNotes[x].y += 5;
			}
			
			if(that.eNotes[0].y > 600){
				that.eNotes.shift();
				kMain.rockLevel -= 1;
			}
		}
		if(that.rNotes.length > 0)
		{
			for(var x = 0; x < that.rNotes.length; x++){
				that.ctx.drawImage(that.rNotes[x].img, 300, that.rNotes[x].y, 100, 50);
				that.rNotes[x].y += 5;
			}
			
			if(that.rNotes[0].y > 600){
				that.rNotes.shift();
				kMain.rockLevel -= 1;
			}
		}
		if(that.tNotes.length > 0)
		{
			for(var x = 0; x < that.tNotes.length; x++){
				that.ctx.drawImage(that.tNotes[x].img, 400, that.tNotes[x].y, 100, 50);
				that.tNotes[x].y += 5;
			}
			
			if(that.tNotes[0].y > 600){
				that.tNotes.shift();
				kMain.rockLevel -= 1;
			}
		}
	
	//console.log(that.qNotes.length + that.wNotes.length + that.eNotes.length + that.rNotes.length + that.tNotes.length );
	
	window.requestAnimationFrame(drawImage);
}

// setInterval function: Get's in game time 
function setCurrTime(){
	kR.currTime = Date.now() - kR.startTime;
	readOutNotes();
}

//Calls out Notes to spawn 
function readOutNotes() {
	
		//console.log(kR.qNotes);
		if(kMain.qNotes.length > 0 && kMain.qNotes[0] <= kR.currTime - kR.readRange)
		{
			//console.log("Q reader reading at time: " + kMain.qNotes[0] + " " + kR.currTime);
			//console.log(kR.qNotes);
			kR.qNotes.push(new Q_Note());
			kMain.qNotes.shift();
		}
		if(kMain.wNotes.length > 0 && kMain.wNotes[0] <= kR.currTime - kR.readRange)
		{
			//console.log("W reader reading at time: " + kMain.wNotes[0]);
			kR.wNotes.push(new W_Note());
			kMain.wNotes.shift();
		}
		if(kMain.eNotes.length > 0 && kMain.eNotes[0] <= kR.currTime - kR.readRange)
		{
			//console.log("E reader reading at time: " + kMain.eNotes[0]);
			kR.eNotes.push(new E_Note());
			kMain.eNotes.shift();
		}
		if(kMain.rNotes.length > 0 && kMain.rNotes[0] <= kR.currTime - kR.readRange)
		{
			//console.log("R reader reading at time: " + kMain.rNotes[0]);
			kR.rNotes.push(new R_Note());
			kMain.rNotes.shift();
		}
		if(kMain.tNotes.length > 0 && kMain.tNotes[0] <= kR.currTime - kR.readRange)
		{
			//console.log("T reader reading at time: " + kMain.tNotes[0]);
			kR.tNotes.push(new T_Note());
			kMain.tNotes.shift();
		}
}

var kMain = new KeytarMain();
kMain.loadSong(SweetSong);

var nReader = new NoteReader();

var kR = new KeytarRender();

window.requestAnimationFrame(drawImage);