function getSocial(){
	var inputBox = document.getElementById("stuffs");
	var result = document.getElementById("result");
	var text = inputBox.value;
	result.innerHTML="<tr><th>FB</th><th>@Wikipedia</th><th>@Wikimedia</th><th>WP G+</th><th>WMF G+</th></tr>"; //reset
	
	var x = "";
	var urls = [];
		
	// Finds a line of SM
	var Rfacebook = /(^FB.*)/gm;
	var RtwitterWP = /(^@Wikipedia.*)/gm;
	var RtwitterWM = /(^@Wikimedia.*)/gm;
	var RgoogleWP = /(^WP G+.*)/gm;
	var RgoogleWM = /(^WMF G+.*)/gm;
	
	// Finds the URL
	var findURL = /http.*/g;
	
	// put socials in array
	var socials = [];
	console.log(text.match(Rfacebook).toString())
	socials.push(text.match(RtwitterWP).toString(), text.match(RtwitterWM).toString(), text.match(Rfacebook).toString(), text.match(RgoogleWM).toString(), text.match(RgoogleWP).toString());
	
	console.log(socials); //debugging yay
	
	for (var i = 0; i < socials.length; i++) {
	
		// put url in array
		urls.push(socials[i].match(findURL));
		console.log(urls); //debugging yay
		}
		// it should just paste this in verbatim
	x = "<tr><th>"+urls[0]+"</th><th>"+urls[1]+"</th><th>"+urls[2]+"</th><th>"+urls[3]+"</th><th>"+urls[4]+"</th></tr>";
	result.innerHTML = x;
		
};

function SelectText(element) {
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