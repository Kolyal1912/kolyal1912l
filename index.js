const numbers = [5, 10, 15, 20, 25];

// Call helper functions to perform operations on the array
displayArray(numbers);
const sum = calculateSum(numbers);
const average = calculateAverage(numbers);

// Helper function to display the elements of an array
function displayArray(arr) {
  console.log("Numbers in the array:");
  arr.forEach(num => {
    console.log(num);
  });
}

// Helper function to calculate the sum of elements in an array
function calculateSum(arr) {
  return arr.reduce((acc, num) => acc + num, 0);
}

// Helper function to calculate the average of elements in an array
function calculateAverage(arr) {
  const sum = calculateSum(arr);
  return sum / arr.length;
}