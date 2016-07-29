function split (array){
	var halfLenght= Math.floor(array.length/2);

	var firstArray = array.slice(0, halfLenght)
	var secondArray = array.slice(halfLenght, array.length);

	return  [firstArray, secondArray]
}