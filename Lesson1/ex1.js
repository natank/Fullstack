/**biggestArr 
 * return the array of the biggest nums
 * 
*/

function biggestArr(arr) {

  // find the sum of each array
  let sumsArr = arr.map(elem => {
    let sum = 0;
    for (let i = 0; i < elem.length; i++) {
      sum += elem[i]
    }
    return sum
  })

  // find the index of the biggest num in sums arr
  let biggestInd = 0;

  for (let i = 1; i < sumsArr.length; i++) {
    if (sumsArr[i] > sumsArr[biggestInd]) {
      biggestVal = sumsArr[i];
      biggestInd = i;
    }
  }

  biggestArr = arr[biggestInd]

  printRange(biggestArr, 10, 20)
}


// printRange
// PRINTS THE NUMBERS IN THE ARRAY BETWEEN MIN AND MAX
function printRange(arr, min, max) {
  arr.forEach(elem => {
    if (elem > min && elem < max) console.log(elem)
  })

}

let arrOfArrs = [[1, 6, 3, 9], [6, 12, 5, 21], [4, 11, 23, 1]];


biggestArr(arrOfArrs)