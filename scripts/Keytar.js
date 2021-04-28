function KeytarMain(){
	
	// Loaded Song 
	var qNotes = [];
	var wNotes = [];
	var eNotes = [];
	var rNotes = [];
	var tNotes = [];
	
	// Game Parameters 
	var points; 
	var multiplier; 
	var rockLevel; 
}

function Note(){
	this.color;
	this.img;
	this.x;
	this.y;
}

function NoteReader(x,y){
	this.x = x;
	this.y = y;
}

document.onkeydown = function (e) {
	

};