
	// Make text bold and unbold			
	function bold(){
		var status = document.getElementById("TextArea").style.fontWeight;
			if(status == "bold") {
				document.getElementById("TextArea").style.fontWeight = "normal";
			}
			else {
				document.getElementById("TextArea").style.fontWeight = "bold";
			}
			
			/*
			Just for testing purposes:
			document.getElementById("TextArea").classList.toggle("bold");
			document.execCommand("bold",false,null); note that execommand does not work with textarea, instead we use a contenteditable divs.
			*/
	}
	
	
	// Make text to italic and back to previous status
	function italic() {
		var status = document.getElementById("TextArea").style.fontStyle;
			if(status == "italic") {
				document.getElementById("TextArea").style.fontStyle = "normal";
			}
			else {
				document.getElementById("TextArea").style.fontStyle = "italic";
			}		
		
		/*
		Just for testing purposes:
		document.getElementById("TextArea").classList.toggle("italic");
		*/
	}
	
	
	// Underline text and ununderline it
	function underline() {
		var status = document.getElementById("TextArea").style.textDecoration;
			if(status == "underline") {
				document.getElementById("TextArea").style.textDecoration = "none";
			}
			else {
				document.getElementById("TextArea").style.textDecoration = "underline";
			}		
	}
	
	
	// Change text font family
	function fontFamily(fon) {
		document.getElementById("TextArea").style.fontFamily = fon.value;
	}
	
	
	// Change text colour
	function textColor(col) {
		document.getElementById("TextArea").style.color = col.value;
	}	
	
	
	// Change the textarea background colour
	function changeBGColor(){			
		var r = parseInt(document.getElementById("r").value);
			if (r < 0) {
				document.getElementById("r").value = "0";
			}
			else if (r > 255) {
				document.getElementById("r").value = "255";
			}
			
		var g = parseInt(document.getElementById("g").value);
			if (g < 0) {
				document.getElementById("g").value = "0";
			}
			else if (g > 255) {
				document.getElementById("g").value = "255";
			}
			
		var b = parseInt(document.getElementById("b").value);				 
			if (b < 0) {
				document.getElementById("b").value = "0";
			}
			else if (b > 255) {
				document.getElementById("b").value = "255";
			}				
		document.getElementById("TextArea").style.backgroundColor= 'rgb(' + r + ',' + g + ',' + b + ')';   
	}
	
	
	// Make the RGB fields empty on key press
	function makeREmpty() {
		document.getElementById("r").value = "";
	}
	
	function makeGEmpty() {
		document.getElementById("g").value = "";
	}
		
	function makeBEmpty() {
		document.getElementById("b").value = "";
	}
	
	// RGB fields input validation
	function noRChar() {		
		var pattern = /\s|\D|\.|[a-zA-Z]/gi;
		if(r.value.match(pattern)) { 
			r.value = r.value.replace(pattern,'');
			alert("Only numbers within the rgb colour range is allowed (0 - 255).");
		}
	}
	
	function noGChar() {		
		var pattern = /\s|\D|\.|[a-zA-Z]/gi;
		if(g.value.match(pattern)) { 
			g.value = g.value.replace(pattern,'');
			alert("Only numbers within the rgb colour range is allowed (0 - 255).");
		}
	}
	
	function noBChar() {		
		var pattern = /\s|\D|\.|[a-zA-Z]/gi;
		if(b.value.match(pattern)) { 
			b.value = b.value.replace(pattern,'');
			alert("Only numbers within the rgb colour range is allowed (0 - 255).");
		}
	}
		
		
	/* Things I want to improve:
	   Make only selected elements bold or italic etc.
	   Make some improvements on the rgb 
	   Sort out the code duplication
	*/
	