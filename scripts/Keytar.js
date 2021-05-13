function KeytarMain(){
	
	// Loaded Song 
	this.qNotes = [];
	this.wNotes = [];
	this.eNotes = [];
	this.rNotes = [];
	this.tNotes = [];
	
	// Game Parameters 
	this.score = 0; 
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

function Q_Note(){
	this.img = new Image();
	this.x = 100;
	this.y = 0;
	
	this.img.src = "images/buttons/g_b.png";
}

function W_Note(){
	this.img = new Image();
	this.x = 100;
	this.y = 0;
	
	this.img.src = "images/buttons/r_b.png";
}

function E_Note(){
	this.img = new Image();
	this.x = 100;
	this.y = 0;
	
	this.img.src = "images/buttons/y_b.png";
}

function R_Note(){
	this.img = new Image();
	this.x = 100;
	this.y = 0;
	
	this.img.src = "images/buttons/b_b.png";
}

function T_Note(){
	this.img = new Image();
	this.x = 100;
	this.y = 0;
	
	this.img.src = "images/buttons/o_b.png";
}



function NoteReader(){
	this.x = 0;
	this.y = 500;
	this.img;
	
	this.range = 50;
}

NoteReader.prototype.checkHit = function(y) {
	//return y < this.y + 50 && y > this.y - 50;
	
	//console.log(kR.qNotes.length);
	
	if(kR.qNotes.length > 0 && kMain.keys.includes(81)){
		if(kR.qNotes[0].y < this.y + this.range && kR.qNotes[0].y > this.y - this.range ){
			kMain.score += 50;
			kMain.rockLevel += 1;
			kR.qNotes.shift();
			
			console.log(50);
		}
		else{
			kMain.rockLevel -= 1;
			//console.log("Miss");
		}
	}
	
	if(kR.wNotes.length > 0 && kMain.keys.includes(87)){
		if(kR.wNotes[0].y < this.y + this.range && kR.wNotes[0].y > this.y - this.range ){
			kMain.score += 50;
			kMain.rockLevel += 1;
			kR.wNotes.shift();
			//console.log("Score")
		}
		else{
			kMain.rockLevel -= 1;
			//console.log("Miss");
		}
	}
	
	if(kR.eNotes.length > 0 && kMain.keys.includes(69)){
		if(kR.eNotes[0].y < this.y + this.range && kR.eNotes[0].y > this.y - this.range ){
			kMain.score += 50;
			kMain.rockLevel += 1;
			kR.eNotes.shift();
			//console.log("Score")
		}
		else{
			kMain.rockLevel -= 1;
			//console.log("Miss");
		}
	}
		
	if(kR.rNotes.length > 0 && kMain.keys.includes(82)){
		if(kR.rNotes[0].y < this.y + this.range && kR.rNotes[0].y > this.y - this.range ){
			kMain.score += 50;
			kMain.rockLevel += 1;
			kR.rNotes.shift();
			//console.log("Score")
		}
		else{
			kMain.rockLevel -= 1;
			//console.log("Miss");
		}
	}
	
	if(kR.tNotes.length > 0 && kMain.keys.includes(84) ){
		if(kR.tNotes[0].y < this.y + this.range && kR.tNotes[0].y > this.y - this.range){
			kMain.score += 50;
			kMain.rockLevel += 1;
			kR.tNotes.shift();
			//console.log("Score")
		}
		else{
			kMain.rockLevel -= 1;
			//console.log("Miss");
		}
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
		
		if(e.keyCode == 13){
			nReader.checkHit();
			//console.log("Check Hit for: " + kMain.keys);
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