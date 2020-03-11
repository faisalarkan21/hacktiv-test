function getMean(array) {
    let increase = 0;
    for (let i = 0; i < array.length; i++) {
        increase += array[i]
    }
    const getMean = increase / array.length;
    return getMean;
}


function getMode(arr) {
    let foundFreq = 0, freqNum, list = []
    for (let i = 0; i < arr.length; i++) {
        let tempNumber = list.find((el) => { return el.num == arr[i] })
        if (tempNumber) {
            tempNumber.count++
            if (tempNumber.count > foundFreq) {
                freqNum = arr[i]
                foundFreq = tempNumber
            }
        }
        else {
            list.push({ num: arr[i], count: 1 })
        }
    }
    return freqNum
}


function getMeanMode(arr) {
    const resultMean = getMean(arr);
    const resultMode = getMode(arr)

    // console.log('result', resultMean, resultMode)

    if (resultMean !== resultMode) {
        return 0
    }
    // it's mean equal with mode
    return 1

}

console.log(getMeanMode([5, 3, 3, 3, 1]))