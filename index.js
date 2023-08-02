function hasTargetSum(array, target) {
  // Write your algorithm here
  let works = false
  const maxIndex = array.length - 1
  const checkIndices = [...Array(array.length).keys()];
  array.forEach(element => {

    const elementIndex = array.indexOf(element)
    // console.log("element:", element, "elementIndex", elementIndex)
    checkIndices.forEach(index => {
      // console.log("currentCheckIndex:", index)
      if (index !== elementIndex) {
        if (array[elementIndex] + array[index] === target) {
          // console.log("got it")
          works = true
        }
      }
    })
  });
  // console.log(works)
  return works
}

// hasTargetSum([3, 8, 12, 4, 11, 7], 10);
// hasTargetSum([22, 19, 4, 6, 30], 25);
// hasTargetSum([1, 2, 5], 4);

/* 
  Write the Big O time complexity of your function here
*/

/* 
  Add your pseudocode here
  does element[0] + any other element equal the target
  return true else return false
*/

/*
  Add written explanation of your solution here
  we'll have to know how long the arary is
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", hasTargetSum([3, 8, 12, 4, 11, 7], 10));

  console.log("");

  console.log("Expecting: true");
  console.log("=>", hasTargetSum([22, 19, 4, 6, 30], 25));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", hasTargetSum([1, 2, 5], 4));
}

module.exports = hasTargetSum;
