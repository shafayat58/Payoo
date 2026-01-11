document.getElementById("add-money-btn").addEventListener('click', function (event) {
  event.preventDefault();
  // console.log('click me');
  const Bank = document.getElementById('bank').value
  // console.log(Bank);

  // const BankAccountNumber = parseInt(document.getElementById('bank-account-number').value)

  const BankAccountNumber =document.getElementById('bank-account-number').value

  const AddAmount = parseInt(document.getElementById('add-amount').value)

  const PinNumber = document.getElementById('pin-number').value

  // console.log(Bank, BankAccountNumber, AddAmount, PinNumber);

  if (BankAccountNumber.length < 11) {
    alert('provide valid Bank Account Number')
    return;

  }

  if (PinNumber.length < 4) {
    alert('provide valid pin Number')
    return;

  }
  

  const AvaiableBalance = parseInt(document.getElementById('available-balance').innerText);
  // console.log(AvaiableBalance);
  

  const updateAmount = AvaiableBalance + AddAmount;
  document.getElementById('available-balance').innerText = updateAmount;
  
  
})


document.getElementById("add-m-btn").addEventListener('click', function (event) {
  event.preventDefault()
  document.getElementById('add-money-section').style.display = 'block';
  document.getElementById('cash-out-section').style.display = 'none';
  document.getElementById('transfer-money-section').style.display = 'none';
  document.getElementById('getbonus-money-section').style.display = 'none';
  document.getElementById('pay-bill-section').style.display = 'none';
  
})

document.getElementById("cashout-m-btn").addEventListener('click', function (event) {
  event.preventDefault()
  document.getElementById('cash-out-section').style.display = 'block';
  document.getElementById('add-money-section').style.display = 'none';
  document.getElementById('transfer-money-section').style.display = 'none';
  document.getElementById('pay-bill-section').style.display = 'none';
  
  
})



document.getElementById("transfer-m-btn").addEventListener('click', function (event) {
  event.preventDefault()
  document.getElementById('add-money-section').style.display = 'none';
  document.getElementById('cash-out-section').style.display = 'none';
  document.getElementById('pay-bill-section').style.display = 'none';
  document.getElementById('transfer-money-section').style.display = 'block';
  
})


document.getElementById("get-bonus-m-btn").addEventListener('click', function (event) {
  event.preventDefault()
  document.getElementById('add-money-section').style.display = 'none';
  document.getElementById('cash-out-section').style.display = 'none';
  document.getElementById('transfer-money-section').style.display = 'none';
  document.getElementById('pay-bill-section').style.display = 'none';
  document.getElementById('getbonus-money-section').style.display = 'block';

})



document.getElementById("paybill-m-btn").addEventListener('click', function (event) {
  event.preventDefault()
  document.getElementById('pay-bill-section').style.display = 'block';
  document.getElementById('cash-out-section').style.display = 'none';
  document.getElementById('transfer-money-section').style.display = 'none';
  document.getElementById('getbonus-money-section').style.display = 'none';
  document.getElementById('add-money-section').style.display = 'none';

})
