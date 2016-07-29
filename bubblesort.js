var bubbleSort = function(arr){
	var temp; 
	var copy = arr.slice()
	var operationPerformed = true;
	while(operationPerformed){
		operationPerformed = false;
		for(var i = 0; i <arr.length - 1; i++){
			temp = copy[i];
			if(temp > copy[i+1]){
				copy[i] = copy[i+1];
				copy[i+1] = temp; 
				operationPerformed = true;
			}
		}
	}
	return copy
}
// bubbleSort([3,2,1])
