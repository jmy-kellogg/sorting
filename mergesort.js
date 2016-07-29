// faskjdhfjkasdhfjlkahsdfljkahsdfljkhasdf


function split (array){
	var halfLength= Math.floor(array.length/2);

	var firstArray = array.slice(0, halfLength)
	var secondArray = array.slice(halfLength, array.length);

	return  [firstArray, secondArray]
}

function merge(a,b){
	var c = []
	do {
	if(a[0] > b[0]){
		c.push(b.shift())
	} else {
		c.push(a.shift())
	}
	} while (a.length && b.length) 

	if (a.length) {
		c = c.concat(a)
	} else {
		c = c.concat(b)
	}
	return c
}

function mergeSort(array){

	

}



