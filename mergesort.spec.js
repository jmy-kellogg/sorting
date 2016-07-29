describe('Split Array function', function() {
  it('is able to split an array into two halves', function() {
    expect(split([1,2,3,4])).toEqual([[1,2],[3,4]])
  });
    it('should be able to take odd number of element', function() {
    expect(split([1,2,3,4,5])).toEqual([[1,2],[3,4,5]])
  });
});

describe('Merge Sort', function(){
  it('is able to merge two sorted arrays into one sorted array', function(){
       expect(merge([1,3],[2,4])).toEqual([1,2,3,4])
  });
    it('should be able to merge odd number of element', function() {
    expect(merge([1,4],[2,3,5])).toEqual([1,2,3,4,5])
  });
});

describe('mergeSort function', function(){
	it('is able to return an array of the same length', function(){
		var arr1 = [1,3,5,2,4,6], sortedArr1 = [1,2,3,4,5,6];
		expect(mergeSort(arr1).length).toEqual(6)
	});
	it('is able to sort an array',function(){
		var arr1 = [1,3,5,2,4,6], sortedArr1 = [1,2,3,4,5,6];
		expect(mergeSort(arr1)).toEqual(sortedArr1);
	})


});