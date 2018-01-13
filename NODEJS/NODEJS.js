/***
    Ce script utilise le module 'fs' de node JS pour afficher sur 
    le console le dossier courant puis créer un dossier "monDossier" 
**/
var fs = require('fs');

if (process.argv.length <= 2) { //tester si le nombre de parametres passees dans la line de commande est inferieur a 2
    console.log("Le dossier courant est: " + __filename);
   // process.exit(-1);
}

try {

    fs.mkdirSync('MonDossier'); //Creation du dossier "MonDossier"
    console.log('Dossier Creéé');
} catch(err){

    if(err.code == 'EEXIST') //Creer un scenario si le dossier deja existe
    {
        console.log('MonDossier existe déja! ');
    } else {
        console.log(err);
    }
}

