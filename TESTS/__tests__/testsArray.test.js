const testsArray = require('./testsArray');
   
//decrire le test et le resuer dans une fonction
describe('Le nombre delement ayant plus que ciquentes caracteres', () => {
		it('Calcul', () => { 

			const tab = ['Bonjour','cette chaine de caracteres est supposee avoir plus que ciquentes caracteres'];
			const nbr = testsArray(tab);

			//utilisation d'un matcher, on expect qua le nombre de chaine ayant plus que 50 caracteres est 1
		    expect(nbr).toBe(1);
		 })
})


