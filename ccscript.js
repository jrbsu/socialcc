function getSocial(){
	var inputBox = document.getElementById("stuffs");
	var result = document.getElementById("result");
	var text = inputBox.value;
	result.innerHTML="<tr><th>FB</th><th>@Wikipedia</th><th>@Wikimedia</th><th>WP G+</th><th>WMF G+</th></tr>"; //reset
	
	var x = "";
	var urls = [];
		
	// Finds a line of SM
	var Rfacebook = /(^FB.*)/igm;
	var RtwitterWP = /(^@Wikipedia.*)/igm;
	var RtwitterWM = /(^@Wikimedia.*)/igm;
	var RgoogleWP = /(^WP G+.*|^Wikipedia G+.*)/igm;
	var RgoogleWM = /(^WMF G+.*|^Wikimedia G+.*|^Wikimedia Foundation G+.*)/igm;
	
	// Finds the URL
	var findURL = /http.*/g;
	
	// put socials in array
	var socialsRaw = [text.match(RtwitterWP), text.match(RtwitterWM), text.match(Rfacebook), text.match(RgoogleWM), text.match(RgoogleWP)];
	
	var socials = [];
	
	for (var k = 0; k < socialsRaw.length; k++) {
		try { // catch errors (as in, black entries)
			socials.push(socialsRaw[i].toString());
		}
		catch(err) {
			socials.push("");
		}
		// it should just paste this in verbatim
	x = "<tr id='toSelect'><th>"+urls[0]+"</th><th>"+urls[1]+"</th><th>"+urls[2]+"</th><th>"+urls[3]+"</th><th>"+urls[4]+"</th></tr>";
	result.innerHTML = x;
		
};
	
	
	socials.push(text.match(RtwitterWP).toString(), text.match(RtwitterWM).toString(), text.match(Rfacebook).toString(), text.match(RgoogleWM).toString(), text.match(RgoogleWP).toString());
	
	console.log(socials); //debugging yay
	
	for (var i = 0; i < socials.length; i++) {
	
		// put url in array
		urls.push(socials[i].match(findURL));
		}
		// it should just paste this in verbatim
	x = "<tr id='toSelect'><th>"+urls[0]+"</th><th>"+urls[1]+"</th><th>"+urls[2]+"</th><th>"+urls[3]+"</th><th>"+urls[4]+"</th></tr>";
	result.innerHTML = x;
		
};

function SelectText(element) { //this code from https://stackoverflow.com/questions/985272/selecting-text-in-an-element-akin-to-highlighting-with-your-mouse
    var doc = document
        , text = doc.getElementById(element)
        , range, selection
    ;    
    if (doc.body.createTextRange) {
        range = document.body.createTextRange();
        range.moveToElementText(text);
        range.select();
    } else if (window.getSelection) {
        selection = window.getSelection();        
        range = document.createRange();
        range.selectNodeContents(text);
        selection.removeAllRanges();
        selection.addRange(range);
    }
    try {

		// The important part (copy selected text)
		var successful = document.execCommand('copy');

		// "Optional" remove selected text
		sel.removeAllRanges();

		if(successful) answer.innerHTML = 'Copied!';
		else answer.innerHTML = 'Unable to copy; please use ctrl+c!';
		} catch (err) {
		answer.innerHTML = 'Unsupported browser; please use ctrl+c!';
	}
};