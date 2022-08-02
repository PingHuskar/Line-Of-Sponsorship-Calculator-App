const CalculatePercent = (val) => {
    const peak = [450000,270000,165000,90000,45000,15000,7500]
    var percent = 21
    for (var i = 0; i <= peak.length; i++) {
        if (val >= peak[i]) {
            return percent
        }
        percent -= 3
    }
    return 0
}
const updateA = () => {
    const getFrom = ['B','C','D']
    var sumArray = []
    var subArray = []
    for (var i = 0; i < getFrom.length; i++) {
        var checkval = document.getElementById(`${getFrom[i]}value`).textContent
        sumArray.push(parseInt(checkval)||0)
        subArray.push(parseInt(document.getElementById(`${getFrom[i]}salary`).textContent)||0)
    }
    const A = sumArray.reduce((a, b) => a + b, 0)
    document.getElementById(`Avalue`).textContent = `${A}`
    document.getElementById(`Apercent`).textContent  = `(${CalculatePercent(A)}%)`
    document.getElementById(`Asalary`).textContent  = `${CalculatePercent(A)*A/100-subArray.reduce((a, b) => a + b, 0)}`
}
const updateVal = (id,val) => {
    document.getElementById(`${id[2]}value`).textContent = `${val}`
    document.getElementById(`${id[2]}percent`).textContent  = `(${CalculatePercent(val)}%)`
    document.getElementById(`${id[2]}salary`).textContent  = `${CalculatePercent(val)*val/100}`
    updateA();
}