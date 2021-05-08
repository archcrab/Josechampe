function KeytarMain(){
	
	// Loaded Song 
	this.qNotes = [];
	this.wNotes = [];
	this.eNotes = [];
	this.rNotes = [];
	this.tNotes = [];
	
	// Game Parameters 
	this.points = 0; 
	this.multiplier = 1; 
	this.rockLevel = 50; 
	
	this.keys = [];
}

KeytarMain.prototype.loadSong = function(song){
	this.qNotes = song[0];
	this.wNotes = song[1];
	this.eNotes = song[2];
	this.rNotes = song[3];
	this.tNotes = song[4];
}

function GreenNote(){
	this.img = new Image();
	this.x = 100;
	this.y = 100;
	
	console.log(this.img);
	
	this.img.src = "images/doge.jpg";
}

function NoteReader(x,y){
	this.x = x;
	this.y = y;
	this.img;
}

NoteReader.prototype.checkHit = function(y) {
	//return y < this.y + 50 && y > this.y - 50;
	
	if(kMain.keys.includes(81) && kR.qNotes[0].y < this.y + 50 && kR.qNotes[0].y > this.y - 50 ){
		kMain.score += 50 * multiplier;
		kMain.rockLevel += 1;
		kR.qNotes.shift();
	}
	else{
		kMain.rockLevel -= 2;
	}
	
	if(kMain.keys.includes(87) && kR.wNotes[0].y < this.y + 50 && kR.wNotes[0].y > this.y - 50 ){
		kMain.score += 50 * multiplier;
		kMain.rockLevel += 1;
		kR.wNotes.shift();
	}
	else{
		kMain.rockLevel -= 2;
	}
	
	if(kMain.keys.includes(69) && kR.eNotes[0].y < this.y + 50 && kR.eNotes[0].y > this.y - 50 ){
		kMain.score += 50 * multiplier;
		kMain.rockLevel += 1;
		kR.eNotes.shift();
	}
	else{
		kMain.rockLevel -= 2;
	}
	
	if(kMain.keys.includes(82) && kR.rNotes[0].y < this.y + 50 && kR.rNotes[0].y > this.y - 50 ){
		kMain.score += 50 * multiplier;
		kMain.rockLevel += 1;
		kR.rNotes.shift();
	}
	else{
		kMain.rockLevel -= 2;
	}
	
	if(kMain.keys.includes(84) && kR.tNotes[0].y < this.y + 50 && kR.tNotes[0].y > this.y - 50 ){
		kMain.score += 50 * multiplier;
		kMain.rockLevel += 1;
		kR.tNotes.shift();
	}
	else{
		kMain.rockLevel -= 2;
	}
}

/*
	Q: 81
	W: 87
	E: 69
	R: 82
	T: 84
*/
// OnKeyDown
document.onkeydown = function (e) {
	//e = e || event; // to deal with IE
    //map[e.keyCode] = e.type == 'keydown';
	if(!kMain.keys.includes(e.keyCode)){
		kMain.keys.push(e.keyCode);
		//console.log(kMain.keys);
		
		if(e.keyCode == 32){
			nReader.checkHit();
		}
	}
	
};

//OnKeyUp
document.onkeyup = function (e) {
	var index = kMain.keys.indexOf(e.keyCode);
	if (index !== -1) {
        kMain.keys.splice(index, 1);
    }
	//console.log(kMain.keys);
};