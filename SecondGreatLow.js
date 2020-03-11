
function findingSecondGreatLow(arr) {

    if (arr.length < 2) {
        return ('Masukan minimal 2 nilai array')
    }

    if (arr.length === 2) {
        arr.sort((a, b) => { return a - b });
        return `${arr[1]} ${arr[0]}`;
    }

    let uniqueArray = [...new Set(arr)];

    if (uniqueArray.length < 2) {
        return `${uniqueArray[1]} ${uniqueArray[0]}`;
    }

    uniqueArray.sort((a, b) => { return a - b });
    return `${uniqueArray[1]} ${uniqueArray[uniqueArray.length - 2]}`;
}

console.log(findingSecondGreatLow([7,7,12,98,106]))