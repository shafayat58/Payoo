document.getElementById('loginButton').addEventListener('click', function (event) {
  event.preventDefault();
  
  const mobileNumber = 1860347751
  const PinNumber = 1234
  const mobileNumberValue = document.getElementById('mobile-number').value;
  const mobileNumberValueConverted = parseInt(mobileNumberValue);
  const mobilePinNumberValue = document.getElementById('pin-number').value;
  
  const mobilePinNumberValueConverted = parseInt(mobilePinNumberValue)
  
  if (mobileNumberValueConverted === mobileNumber && mobilePinNumberValueConverted === PinNumber) {
    window.location.href = './home.html';
    
  }
  
  else {
    console.log('Invalid Carentials');
    
}
  
})
