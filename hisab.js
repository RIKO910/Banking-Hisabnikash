document.getElementById('deposit-button').addEventListener('click',function()
{
    //get amount deposited
    const depositInput = document.getElementById('deposit-input');
    const NewdepositAmount = depositInput.value
   // console.log(NewdepositAmount)
    const depositTotal =document.getElementById('deposit-total')
    const previousDepositAmount = depositTotal.innerText;
    const NewDepositTotal = parseFloat(previousDepositAmount)  + parseFloat(NewdepositAmount) ;
     depositTotal.innerText = NewDepositTotal;
     //clear the input field
     depositInput.value=''
     //Balance sum
    const balanceTotal =document.getElementById('Balance-total')
    const previousBalanceAmount = balanceTotal.innerText
    const NewBalanceTotal = parseFloat(previousBalanceAmount)  + parseFloat(NewdepositAmount) ;
    balanceTotal.innerText = NewBalanceTotal;
})
document.getElementById('withdraw-button').addEventListener('click',function()
{
    const withdrawInput = document.getElementById('withdraw-input');
    const withdrawAmount = withdrawInput.value;
    //console.log(withdrawAmount)
    const withdrawTotal =document.getElementById('Withdraw-total')
    const previousWithdrawAmount = withdrawTotal.innerText;
    const NewWithdrawAmount = parseFloat(previousWithdrawAmount) + parseFloat(withdrawAmount)
    
    withdrawTotal.innerText=NewWithdrawAmount
    withdrawInput.value=''

    //balance sub
    const balanceTotal =document.getElementById('Balance-total')
    const previousBalanceAmount = balanceTotal.innerText;
    const NewBalanceTotal = parseFloat(previousBalanceAmount)  - parseFloat(withdrawAmount) ;
    balanceTotal.innerText = NewBalanceTotal;
})