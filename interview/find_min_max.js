let arr = [10, 5, 23, 7, 90, 3];
let min = arr[0];
let max = arr[0];

for (let i = 1; i < arr.length; i++) {
    if (arr[i] > max) {
        max = arr[i];
    }
    if (arr[i] < min) {
        min = arr[i];
    }
}
console.log("Maximum element:", max);
console.log("Minimum element:", min);