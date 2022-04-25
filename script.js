const button = document.querySelector("button")
const custom = document.querySelector('#custom')
const tips = document.querySelectorAll('.num')
const bill = document.querySelector('#bill-val')
const numPeople = document.querySelector('#num-people')
const valTip = document.querySelector('.value-first')
const valTotal = document.querySelector('.value-second')

const validBill = () => {
    if(!isNaN(bill.value)){
        if(bill.value >=0){
            return true
        }
    }
}
const validPeople = () =>{
    if(!isNaN(numPeople.value)){
        if(numPeople.value === "0"){
            return false
        } else {
            return true
        } 
    }
}

let billVal = 0
let percent = 0
let customTip = 0
let tipAmount = 0 
let total = 0 
let num = 0 

tips.forEach(tip => {
    tip.addEventListener("click", ()=> {
        if(validBill() && validPeople()) {
            customTip = 0
            tips.forEach(tip=>tip.classList.remove("checked"))
            tip.classList.add("checked")

            billVal = parseFloat(bill.value)
            num = parseInt(numPeople.value) 
            percent = parseFloat(tip.dataset.id / 100)

            let tipTot = billVal * percent
            let tipPer = (tipTot / num).toFixed(2)
            let totalPer = ((billVal + tipTot) / num).toFixed(2)

            valTip.textContent = `$${tipPer}`
            valTotal.textContent = `$${totalPer}`

            if((isNaN(tipPer))&&(isNaN(totalPer))){
                valTip.textContent = `$0.00`
                valTotal.textContent = `$0.00`
            }
        }
    })
})
const calculateCustom = () =>{
    if(validBill() && validPeople()) {
        billVal = parseFloat(bill.value)
        num = parseInt(numPeople.value) 
        customPercent = parseFloat(custom.value / 100)
        let tipTot = billVal * customPercent
        let tipPer = (tipTot / num).toFixed(2)
        let totalPer = ((billVal + tipTot) / num).toFixed(2)

        valTip.textContent = `$${tipPer}`
        valTotal.textContent = `$${totalPer}`
        
        if((isNaN(tipPer))&&(isNaN(totalPer))){
            valTip.textContent = `$0.00`
            valTotal.textContent = `$0.00`
        }
    }
}
custom.addEventListener("input", ()=> {
    tips.forEach(tip=>tip.classList.remove("checked"))
    if(custom.value !== "") {
        calculateCustom()
    }
})
bill.addEventListener("input", ()=> {
    tips.forEach(tip=>tip.classList.remove("checked"))
    if(bill.value !== "") {
        calculateCustom()
    }
})
numPeople.addEventListener("input",()=> {
    tips.forEach(tip=>tip.classList.remove("checked"))
    if(numPeople.value !== "") {
        calculateCustom()
    }
})
button.addEventListener("click", () => {
    let billVal = 0
    let percent = 0
    let customTip = 0
    let tipAmount = 0 
    let total = 0 
    let num = 0 
    valTip.textContent = `$0.00`
    valTotal.textContent = `$0.00`
    bill.value = ""
    numPeople.value = ""
    tips.forEach(tip=>tip.classList.remove("checked"))
})