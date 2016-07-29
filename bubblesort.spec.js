describe('Bubble Sort', function(){
  	it('handles an empty array', function(){
    	expect( bubbleSort([]) ).toEqual( [] );
  	});

	it('return an array same length of input', function(){
		expect(bubbleSort([1,2,3]).length).toEqual(3);
	});
	it('sorts descending order array', function(){
		expect(bubbleSort([3,2,1])).toEqual([1,2,3])
	})
	it('sorts a jumbled array', function(){
		var a = [234,3423,21,1231,31,1,4556,6655,4];
		var sorted = [ 1, 4, 21, 31, 234, 1231, 3423, 4556, 6655 ];
		expect(bubbleSort(a)).toEqual(sorted)
	})

});