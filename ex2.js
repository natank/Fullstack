
/**
 * printLongerThan
 * 
 *  
 */
let printLongerThan = (arr, num) => {
  let arrLongerThan = arr.filter(elem => elem.length > num)
  console.log(arrLongerThan)
  console.log(arrLongerThan.reduce((acc, curr) => {
    return acc += curr.length
  }, 0))
}

let names = ['Ronen', 'Avi', 'Ronit', 'Ehud', 'Itamar']
printLongerThan(names, 4)