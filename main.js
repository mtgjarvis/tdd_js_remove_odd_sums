function removeOddSum(numList) {
    numList.forEach((element, index) => {
        if ((element.a + element.b) % 2 !== 0) {
            numList.splice(index, 1);
        }
    })
    return numList;
}

module.exports = removeOddSum;
