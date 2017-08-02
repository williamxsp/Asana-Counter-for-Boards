
let colunas = document.querySelectorAll(".BoardColumn");
let regex = /\[((?:-|\+)?(\d+|\d+\.\d+))\]/g;

[].forEach.call(colunas, function(coluna){
	let header = coluna.querySelector(".BoardColumnHeader-title");
	let points = 0;
	let cartoes = coluna.querySelectorAll(".BoardCard-name");
	[].forEach.call(cartoes, function(ev){
		

		var myRegexp = /\[((?:-|\+)?(\d+|\d+\.\d+))\]/g;
	    try {
	        var match = myRegexp.exec(ev.textContent);
	        points += parseFloat(match[1]);
	    } catch (err) {
	        
	    }
	});
	header.innerHTML = header.textContent + " [" + points + "]";
});
