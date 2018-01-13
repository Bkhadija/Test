
// Cette fonction prend un array de string en argument 
//et qui renvoie le nombre d'éléments dont la 
//longueur est supérieure strictement à 50

/* @flow */ 

function testsArray(tab: Array<string>): number{
	var nbr=0;
	
	tab.forEach(function(element) {
	    if(element.length > 50)
	    	nbr++;
	});
	
	return nbr;
}

module.exports = testsArray;


