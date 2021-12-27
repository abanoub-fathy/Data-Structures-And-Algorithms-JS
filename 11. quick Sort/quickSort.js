const swap = (arr, i, j) => {
  if(i === j) return;
  [arr[i], arr[j]] = [arr[j], arr[i]]
}

const pivot = (arr, start = 0, end = arr.length - 1) => {
  let pivotIndex = start,
      nOfItemsLessThanPivot = 0;

  for(let i = start; i <= end; i++) {
    if(arr[i] < arr[pivotIndex]) {
      // increase number of elements less than pivot
      nOfItemsLessThanPivot++;

      // swap that element to the correct position
      swap(arr, i, pivotIndex + nOfItemsLessThanPivot);
    }
  }

  swap(arr, pivotIndex, pivotIndex + nOfItemsLessThanPivot);
  return pivotIndex + nOfItemsLessThanPivot;
}


/*  0   1  2  3  4  5
 * [5, 2, 7, 8, 1, 4]
 * [5, 2, 7, 1, 4, 8]
 * [5, 2, 4, 1, 7, 8]
*/
const quickSort = (arr, l = 0, r = arr.length - 1) => {
   if(l < r) {
     let pivotIndex = pivot(arr, l, r);
     // left
     quickSort(arr, l, pivotIndex - 1)
     // right
     quickSort(arr, pivotIndex + 1, r)
   }

   return arr;
}
           
quickSort([5, 2, 7, 8, 1, 4])
