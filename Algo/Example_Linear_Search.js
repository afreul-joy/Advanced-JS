const linearSearch = (arr, searchItem) => {
    for (i = 0; i < arr.length; i++) {
      if (arr[i] === searchItem) {
        return i;
      } 
    }
    return -1
  };
  
  const num=[1,23,4,5,67,85,66]
  // console.log(typeof(num));
  const result = linearSearch(num,66)
  console.log(result);