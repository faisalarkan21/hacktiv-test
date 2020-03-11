function getMultipPersist(number) {
    const value = number.toString().split('');
    if (value.length === 1) {
        return 0;
    }
    let count = 1;
    for (let i = 0; i < value.length; i++) {
        count *= parseFloat(value[i])
    }
    return 1 + getMultipPersist(parseFloat(count));
}

console.log(getMultipPersist(39));