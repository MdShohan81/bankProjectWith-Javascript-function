let depositValue = document.getElementById('deposit-value');
let depositOutput = document.getElementById('deposit-output');

let balanceOutput = document.getElementById('main-blance');
let widthdrawValue = document.getElementById('widthdraw-value');
let widthdrawOutput = document.getElementById('widthdraw-output');

function addMoney(currentAmount, newAmount){
    const result = Number(currentAmount) + Number(newAmount);
    return result;
}
function afterWidthraw(currentAmount,newAmount){
    const result = Number(currentAmount) - Number(newAmount);
    return result;
}

function deposit(){
        const totalDeposit = addMoney(depositOutput.innerText, depositValue.value)
        depositOutput.innerText = totalDeposit;
        const totalBlance = addMoney(balanceOutput.innerText,depositValue.value);
        balanceOutput.innerText = totalBlance;
        depositValue.value = '';
}


function widthdraw(){
    const totalWidthdraw = addMoney(widthdrawValue.value,widthdrawOutput.innerText);
    widthdrawOutput.innerText = totalWidthdraw;
   
    const totalBlance = afterWidthraw(balanceOutput.innerText, widthdrawValue.value);
    balanceOutput.innerText = totalBlance;
   
    
   widthdrawValue.value = '';
}